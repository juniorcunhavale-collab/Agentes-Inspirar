# Dados — o "combustível" dos agentes

Sem dados, os agentes dão conselhos genéricos. Com dados, eles encontram problemas reais.
Coloque aqui exportações do seu sistema (CSV ou XLSX). Não precisa ser perfeito — os agentes
se adaptam ao formato, mas **colunas com nomes claros** ajudam muito.

## Nome dos arquivos
`<tema>_<unidade>_<AAAA-MM-DD>.csv` — ex.: `alunos_idiomas_2026-11-19.csv`

## Arquivos sugeridos (em ordem de importância)

| Arquivo | Colunas mínimas | Frequência |
|---|---|---|
| `alunos_<unidade>` | id, curso/turma, data_matricula, situacao (ativo/trancado/cancelado), data_saida, motivo_saida | semanal |
| `financeiro_receber` | id_aluno, unidade, vencimento, valor, data_pagamento, valor_pago | semanal |
| `financeiro_pagar` | fornecedor/categoria, unidade, vencimento, valor, pago (s/n) | semanal |
| `leads` | data, origem (Instagram, indicação…), unidade/curso de interesse, status (novo/contatado/visitou/matriculou/perdido), motivo_perda | semanal |
| `turmas` | turma, unidade, horário, professor, capacidade, alunos_ativos | mensal |
| `frequencia` | id_aluno, turma, aulas_previstas, presenças | mensal |
| `repasses_unicesumar` | competência, valor_esperado, valor_recebido, data | mensal |
| `extrato_bancario` | data, descrição, valor | mensal |

## LGPD
- Prefira **IDs** a nomes; **não** inclua CPF, RG ou endereço.
- Por padrão este diretório **não** é enviado ao GitHub (veja `.gitignore`), apenas este README.
  Assim os dados dos alunos ficam só na máquina/sessão de trabalho.
