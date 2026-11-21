#!/usr/bin/env python3
"""Monta as duas versões da plataforma a partir de UM código só (src/).
- gestao/index.html  -> artifact "Inspirar Informática" (todos os perfis)
- aluno/index.html   -> artifact "Inspirar Informática Aluno" (só aluno + área da tutora)
Uso: python3 build.py
"""
import pathlib
R = pathlib.Path(__file__).resolve().parent
base = (R/'src/base.html').read_text(encoding='utf-8')
assets = (R/'src/assets.html').read_text(encoding='utf-8').rstrip('\n')
css = (R/'src/extra.css').read_text(encoding='utf-8') if (R/'src/extra.css').exists() else ''
app = (R/'src/app.js').read_text(encoding='utf-8')
assert '<title>Inspirar Informática</title>' in base
assert assets.startswith('<script>window.__LOGO__=')
if css:
    base = base.replace('</style>', css + '\n</style>', 1)
def page(aluno):
    b = base.replace('<title>Inspirar Informática</title>', '<title>Inspirar Informática Aluno</title>') if aluno else base
    a = assets.replace('<script>', '<script>window.__ALUNO__=true;', 1) if aluno else assets
    return b + a + '\n<script>\n' + app.rstrip('\n') + '\n</script>\n</body>\n</html>'
for name, aluno in (('gestao', False), ('aluno', True)):
    d = R/name; d.mkdir(exist_ok=True)
    (d/'index.html').write_text(page(aluno), encoding='utf-8')
    print(name, len(page(aluno).encode()), 'bytes')
