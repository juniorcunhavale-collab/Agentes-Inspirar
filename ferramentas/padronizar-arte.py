#!/usr/bin/env python3
"""Padroniza artes geradas (Gemini etc.) no tamanho exato das redes sociais.

Uso:
  python3 ferramentas/padronizar-arte.py arte1.png arte2.png --formato feed --saida relatorios/artes-black-week/instagram-1080x1350
Formatos: feed (1080x1350, 4:5 - padrão), story (1080x1920, 9:16), quadrado (1080x1080).
Recorta o mínimo necessário (centralizado) para chegar à proporção e redimensiona.
"""
import argparse, os
from PIL import Image, ImageFilter

FORMATOS = {"feed": (1080, 1350), "story": (1080, 1920), "quadrado": (1080, 1080)}

def padronizar(caminho, formato, saida):
    W, H = FORMATOS[formato]
    im = Image.open(caminho).convert("RGB")
    w, h = im.size
    alvo = W / H
    if w / h > alvo:                       # larga demais: corta nas laterais
        nw = int(round(h * alvo)); l = (w - nw) // 2; im = im.crop((l, 0, l + nw, h))
    else:                                  # alta demais: corta em cima/embaixo
        nh = int(round(w / alvo)); t = (h - nh) // 2; im = im.crop((0, t, w, t + nh))
    im = im.resize((W, H), Image.LANCZOS).filter(ImageFilter.UnsharpMask(1.0, 60, 2))
    os.makedirs(saida, exist_ok=True)
    destino = os.path.join(saida, os.path.splitext(os.path.basename(caminho))[0] + ".png")
    im.save(destino, optimize=True)
    return destino, (w, h)

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("arquivos", nargs="+")
    p.add_argument("--formato", choices=FORMATOS, default="feed")
    p.add_argument("--saida", default="artes-padronizadas")
    a = p.parse_args()
    for f in a.arquivos:
        d, orig = padronizar(f, a.formato, a.saida)
        print(f"{f} {orig} -> {d} {FORMATOS[a.formato]}")
