#!/usr/bin/env python3
"""Gera no Gemini as imagens pendentes de Theo e Lia (relatorios/2026-11-20-prompts-mascotes-theo-lia.md).

Uso:
  python3 gerar_imagens.py --listar          # mostra o que falta gerar
  python3 gerar_imagens.py                   # gera tudo que ainda não existe
  python3 gerar_imagens.py b-theo-acenando   # gera só os itens indicados
  python3 gerar_imagens.py --versoes 3       # 3 versões de cada (para escolher a melhor)

Chave: variável GEMINI_API_KEY (na nuvem do Claude a chave é injetada pelo proxy).
Saída: plataforma-informatica/mascotes/geradas/<pasta>/<data>-<id>-vN.png
Nada é publicado: toda imagem precisa do OK do Júnior antes de uso.
"""
import base64, datetime, json, os, ssl, sys, time, urllib.error, urllib.request

AQUI = os.path.dirname(os.path.abspath(__file__))
SAIDA = os.path.join(AQUI, "geradas")
MODELOS = ["gemini-3.1-flash-image", "gemini-3-pro-image", "gemini-2.5-flash-image"]  # 1º que funcionar
REF_THEO, REF_LIA, REF_DUPLA = "theo-referencia-oficial.jpg", "lia-referencia-oficial.jpg", "dupla-referencia-oficial.jpg"

FRASE_REF = ("Use the attached image as the exact character reference. Keep the same faces, skin tones, "
             "hair, proportions and outfits exactly as shown.")
BASE = ("Original 3D animated-movie style character illustration, stylized child proportions (slightly larger head, "
        "big expressive eyes, soft rounded shapes), friendly and warm expressions, vivid but harmonious colors, soft "
        "diffused studio lighting with gentle shadows, smooth clean materials, high detail, appealing and age-appropriate "
        "for children 8 to 12. Brand palette: turquoise #237f9f and #6cc3de, navy #1c2452, coral #ff7a45, yellow #ffc43d, "
        "with white. Original character design, not based on any existing film, studio or franchise character. No text, "
        "no letters, no numbers, no logos, no watermarks anywhere in the image.")
THEO = ("THEO: a 10-year-old Brazilian boy with fair (white) skin with a warm tone and rosy cheeks, thick glossy straight "
        "black hair in a rounded cut with a full straight fringe down to his eyebrows, big expressive dark-brown eyes, soft "
        "rounded face with a friendly smile, slim build, about a hand's width taller than Lia. Default outfit: plain light "
        "turquoise t-shirt (#6cc3de) with no print, open dark turquoise zip-up hoodie jacket (#237f9f) with a low hood, side "
        "pockets and sleeves pushed up to mid-forearm, dark navy blue jeans (#1c2452), white low-top sneakers with navy "
        "laces. No accessories, no logos, no prints.")
LIA = ("LIA: a 10-year-old Brazilian girl with fair (white) skin with a warm tone and rosy cheeks, no freckles, golden "
       "blonde hair, straight with a slight wave at the ends, tied in a high ponytail with a simple yellow hair tie "
       "(#ffc43d), a few loose strands framing her face, big bright light-brown eyes, round face with a wide smile, about a "
       "hand's width shorter than Theo. Default outfit: plain coral-orange crewneck sweatshirt (#ff7a45) with no hood and "
       "no print, sleeves slightly pushed up, a yellow t-shirt (#ffc43d) peeking out at the collar and at the hem, "
       "medium-blue jeans with rolled-up cuffs, yellow sneakers (#ffc43d) with white soles and white toe caps. No other "
       "accessories, no logos, no prints.")

STICKER = ("Sticker-style illustration of {who}, head and upper body, {expr}, with a thick clean white outline around "
           "the character like a die-cut sticker, on a plain pure white background, centered, no shadow on the background. No text.")
COLORIR = ("Use the attached image as the exact character reference for faces, hair, proportions and outfits. Create a "
           "black-and-white coloring page for children aged 8 to 12: Theo and Lia {cena}. Clean, bold, smooth black outlines "
           "of uniform thickness, simple closed shapes that are easy to color, no shading, no gray tones, no hatching, no "
           "filled black areas, pure white background, simple background elements only. Original character design. No text, "
           "no letters, no numbers, no logos. Vertical portrait orientation, A4 proportion.")

def cena(quem, texto):
    fichas = {"theo": [THEO], "lia": [LIA], "dupla": [THEO, LIA]}[quem]
    return " ".join([FRASE_REF, BASE, *fichas, texto])

REF = {"theo": [REF_THEO], "lia": [REF_LIA], "dupla": [REF_DUPLA]}

# (id, pasta, quem, proporção, prompt)
ITENS = [
    ("b-theo-acenando", "02-cenas", "theo", "3:4", cena("theo",
        "Full-body shot of Theo standing slightly turned three-quarters toward the viewer, waving hello with his right hand "
        "raised, friendly confident smile, curious sparkle in his eyes as if he just had an idea. Plain white background, "
        "soft shadow under his feet. Vertical framing with space around him.")),
    ("c-lia-acenando", "02-cenas", "lia", "3:4", cena("lia",
        "Full-body shot of Lia standing slightly turned three-quarters toward the viewer, waving hello enthusiastically with "
        "her left hand raised high, big joyful smile, a small happy bounce in her pose. Plain white background, soft shadow "
        "under her feet. Vertical framing with space around her.")),
    ("e-dupla-comemorando", "02-cenas", "dupla", "4:3", cena("dupla",
        "Theo and Lia celebrating an achievement: Lia jumps with both arms up, wearing a shiny gold medal with a turquoise "
        "ribbon; Theo proudly holds up a certificate paper with only a simple decorative border and a small ribbon "
        "seal, its surface completely empty with no words or letters. Colorful confetti in coral, yellow and turquoise falling around them. Joyful, proud "
        "expressions. Plain white or very light turquoise background. Full body. No text on the certificate or medal.")),
    ("f-dupla-notebook", "02-cenas", "dupla", "4:3", cena("dupla",
        "Theo and Lia sitting together at a light wooden desk in front of an open laptop, seen from a three-quarter front "
        "angle. Theo points at the screen explaining with a curious smile; Lia leans in excited, discovering something. On "
        "the screen, a simplified abstract spreadsheet made of colored cells and a small bar chart, and a document page "
        "shown only as simple gray horizontal lines; absolutely no readable letters or numbers on the screen. Bright, cozy "
        "classroom atmosphere with a softly blurred background in turquoise and white tones.")),
    ("g-dupla-internet-segura", "02-cenas", "dupla", "4:3", cena("dupla",
        "Theo and Lia standing confidently in front of a large glowing friendly shield in turquoise and navy with a simple "
        "padlock symbol in the center. Lia holds a tablet whose screen shows only a small green check mark icon; Theo gives "
        "a thumbs-up. Small floating icons around them: a closed padlock, a key, a check mark (simple shapes only, no "
        "letters). Calm, safe and positive mood, not scary. Light background with soft turquoise glow.")),
    ("h-colonia-feed-1x1", "05-posts-colonia", "dupla", "1:1", cena("dupla",
        "Square 1:1 social media illustration for a fun kids' digital summer camp. Theo and Lia, waist-up, positioned in the "
        "LOWER RIGHT part of the image, smiling and waving at the viewer, a laptop and a few playful floating tech icons "
        "(mouse cursor, folder, puzzle piece, lightbulb; simple shapes, no letters) around them. The UPPER LEFT half is "
        "clean, empty space with a smooth light background (soft turquoise to white gradient) reserved for text to be added "
        "later. Bright, cheerful, uncluttered. No text.")),
    ("h-colonia-stories-9x16", "05-posts-colonia", "dupla", "9:16", cena("dupla",
        "Vertical 9:16 story-format illustration for a fun kids' digital summer camp. Theo and Lia, full body, in the LOWER "
        "THIRD of the image, jumping happily with a laptop and floating tech icons around them (simple shapes, no letters). "
        "The UPPER TWO THIRDS is clean empty space with a smooth light background (soft turquoise-to-white gradient) "
        "reserved for text added later. Keep the very top and bottom edges free of important elements. No text.")),
    ("i-theo-pensativo", "03-figurinhas", "theo", "1:1", cena("theo", STICKER.format(who="Theo",
        expr="thinking, looking up to the side with a finger on the chin and a small curious smile"))),
    ("i-theo-surpreso", "03-figurinhas", "theo", "1:1", cena("theo", STICKER.format(who="Theo",
        expr="surprised and amazed, wide eyes, open mouth, hands up near the cheeks"))),
    ("i-lia-feliz", "03-figurinhas", "lia", "1:1", cena("lia", STICKER.format(who="Lia",
        expr="beaming with a big happy smile and eyes squeezed with joy"))),
    ("i-lia-parabens", "03-figurinhas", "lia", "1:1", cena("lia", STICKER.format(who="Lia",
        expr="clapping hands and cheering, very proud, with a few small confetti pieces around"))),
    ("i-dupla-toca-aqui", "03-figurinhas", "dupla", "1:1", cena("dupla", STICKER.format(who="Theo and Lia",
        expr="Theo and Lia giving each other a high five, cheering"))),
    ("j-colorir-acenando", "04-colorir", "dupla", "3:4", COLORIR.format(cena="standing side by side, waving hello and smiling")),
    ("j-colorir-medalha", "04-colorir", "dupla", "3:4", COLORIR.format(cena="celebrating, Lia wearing a medal and Theo holding a certificate paper with only a border and a ribbon seal, no words")),
    ("j-colorir-escudo", "04-colorir", "dupla", "3:4", COLORIR.format(cena="standing in front of a friendly shield with a padlock, giving thumbs-up")),
    ("j-colorir-computadores", "04-colorir", "dupla", "3:4", COLORIR.format(cena="each sitting at their own computer, smiling at each other")),
]

def ctx():
    ca = "/root/.ccr/ca-bundle.crt"
    return ssl.create_default_context(cafile=ca) if os.path.exists(ca) else ssl.create_default_context()

def chamar(modelo, prompt, refs, proporcao):
    partes = [{"inline_data": {"mime_type": "image/jpeg",
               "data": base64.b64encode(open(os.path.join(AQUI, r), "rb").read()).decode()}} for r in refs]
    partes.append({"text": prompt})
    corpo = {"contents": [{"parts": partes}],
             "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": proporcao}}}
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{modelo}:generateContent",
        data=json.dumps(corpo).encode(), method="POST",
        headers={"Content-Type": "application/json", "x-goog-api-key": os.environ.get("GEMINI_API_KEY", "dummy")})
    with urllib.request.urlopen(req, context=ctx(), timeout=180) as r:
        resp = json.load(r)
    for p in resp.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        dado = p.get("inlineData") or p.get("inline_data")
        if dado:
            return base64.b64decode(dado["data"])
    raise RuntimeError("resposta sem imagem: " + json.dumps(resp)[:300])

def main():
    args = sys.argv[1:]
    versoes = 1
    if "--versoes" in args:
        i = args.index("--versoes"); versoes = int(args[i + 1]); del args[i:i + 2]
    hoje = datetime.date.today().isoformat()
    alvo = [it for it in ITENS if not [a for a in args if not a.startswith("--")] or it[0] in args]
    if "--listar" in args:
        for id_, pasta, quem, prop, _ in ITENS:
            feito = os.path.isdir(os.path.join(SAIDA, pasta)) and any(id_ in f for f in os.listdir(os.path.join(SAIDA, pasta)))
            print(f"{'✅' if feito else '⬜'} {id_:28} {pasta:18} {quem:6} {prop}")
        return
    ok = falha = 0
    for id_, pasta, quem, prop, prompt in alvo:
        os.makedirs(os.path.join(SAIDA, pasta), exist_ok=True)
        for v in range(1, versoes + 1):
            destino = os.path.join(SAIDA, pasta, f"{hoje}-{id_}-v{v}.png")
            if os.path.exists(destino):
                continue
            for modelo in MODELOS:
                try:
                    open(destino, "wb").write(chamar(modelo, prompt, REF[quem], prop))
                    print(f"✅ {id_} v{v} ({modelo})"); ok += 1; break
                except urllib.error.HTTPError as e:
                    msg = e.read().decode()[:160].replace("\n", " ")
                    print(f"   {modelo}: HTTP {e.code} {msg}")
                except Exception as e:
                    print(f"   {modelo}: {e}")
            else:
                print(f"❌ {id_} v{v}: nenhum modelo gerou"); falha += 1
            time.sleep(3)
    print(f"\nGeradas: {ok} · Falharam: {falha} · Pasta: {SAIDA}")

if __name__ == "__main__":
    main()
