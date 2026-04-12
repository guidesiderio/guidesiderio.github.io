# Instruções para Atualização do Portfolio — guidesiderio.github.io

> Documento de instruções para o Claude Code atualizar o portfolio pessoal.
> Repositório: https://github.com/guidesiderio/guidesiderio.github.io
> Portfolio em produção: https://guidesiderio.github.io
> Data: abril de 2026

---

## Contexto Geral

O portfolio é um site estático em HTML/CSS/JavaScript hospedado no GitHub Pages.
O objetivo desta atualização é alinhar o conteúdo do portfolio com o currículo e LinkedIn do Guilherme, corrigindo inconsistências, preenchendo lacunas e removendo/adicionando projetos conforme definido.

**Não alterar:** estrutura visual, layout, design, animações, lógica de toggle PT/EN, nem nenhum elemento que não esteja listado abaixo.

---

## Parte 1 — Experiências

### Contexto

As duas experiências ativas têm o campo de descrição vazio ("Descrição a preencher.") e a data de início da PRAD está faltando. Preencher com o conteúdo abaixo.

### 1.1 TJ-PI — Substituir descrição

**Localizar:** bloco da experiência "Estagiário de TI" do Tribunal de Justiça do Piauí
**Data:** out. 2025 – o momento ✅ (manter)
**Substituir a descrição vazia por:**

> Desenvolvimento de dashboards no Qlik Sense com set analysis e Qlik Management Console para suporte à gestão judiciária. Extração e organização de dados via SQL sobre o banco de dados do PJe (PostgreSQL). Elaboração de relatórios e análises para suporte à tomada de decisão. Comunicações institucionais via SEI e gestão de projetos via CAPTEI 3.0.

### 1.2 PRAD/UFPI — Corrigir data e substituir descrição

**Localizar:** bloco da experiência "Estagiário de TI" da PRAD, Universidade Federal do Piauí
**Corrigir data:** `— – o momento` → `mar. 2026 – o momento`
**Substituir a descrição vazia por:**

> Desenvolvimento do primeiro projeto de BI da unidade: dashboard de gestão de contratos no Looker Studio a partir de dados da Gerência de Contratos (GECON). Análise de qualidade de dados em Google Sheets e criação de landing pages institucionais para centralizar documentos de fiscalização contratual.

---

## Parte 2 — Projetos

### Contexto

A seção de projetos precisa de três tipos de ação:

1. Corrigir projetos existentes com informações erradas
2. Remover projetos que estão em desenvolvimento (fora do ar)
3. Adicionar novos projetos

### Projetos finais desejados (em ordem):

1. Docker Data Pipeline ✅ (manter, apenas revisar descrição)
2. Dashboard das Salas de Audiência — CEJUSC I ✅ (corrigir)
3. Dashboard de Partes sem CPF/CNPJ 🆕 (adicionar)
4. Dashboard de Complementos Inválidos 🆕 (adicionar)
5. Maleta Digital da Fiscalização 🆕 (adicionar)

### 2.1 Docker Data Pipeline — Manter, sem alterações

Manter exatamente como está. Nenhuma alteração necessária.

### 2.2 Dashboard das Salas de Audiência — CEJUSC I — Corrigir

**Localizar:** projeto "Dashboard de Ocupação de Salas — CEJUSC"
**Corrigir título:** `Dashboard de Ocupação de Salas — CEJUSC` → `Dashboard das Salas de Audiência — CEJUSC I`
**Substituir descrição por:**

> Painel desenvolvido no Qlik Sense para monitoramento da ocupação das salas presenciais e virtuais do CEJUSC I. Utiliza set analysis sobre o banco de dados do PJe 1º Grau (PostgreSQL) para construir indicadores de taxa de ocupação, acordos por audiência e desempenho de mediadores. Demanda originada pela coordenação do CEJUSC I para otimizar o uso das salas físicas.

**Tags:** `SQL` `PostgreSQL` `Qlik Sense` `Set Analysis`
**Badge:** `Institucional` — `TJPI · 2026` ✅ (manter)

### 2.3 Remover: "Análise de Desempenho Interno — PRAD"

**Localizar:** projeto "Análise de Desempenho Interno — PRAD"
**Ação:** remover o bloco inteiro deste projeto.
**Motivo:** projeto ainda em desenvolvimento, será adicionado futuramente quando estiver finalizado.

### 2.4 Adicionar: Dashboard de Partes sem CPF/CNPJ

**Inserir após** o projeto "Dashboard das Salas de Audiência — CEJUSC I".

**Título:** Dashboard de Partes sem CPF/CNPJ
**Descrição:**

> Painel desenvolvido no Qlik Sense a partir de solicitação formal da Corregedoria-Geral de Justiça. Identifica feitos de execução fiscal sem indicação de CPF ou CNPJ dos executados e, nessas hipóteses, sugere minuta de extinção do processo. Dados extraídos via SQL do banco de dados do PJe (PostgreSQL).

**Tags:** `SQL` `PostgreSQL` `Qlik Sense`
**Badge:** `Institucional` — `TJPI · 2026`

### 2.5 Adicionar: Dashboard de Complementos Inválidos

**Inserir após** o projeto "Dashboard de Partes sem CPF/CNPJ".

**Título:** Dashboard de Complementos Inválidos
**Descrição:**

> Painel para monitoramento da qualidade dos dados enviados ao DataJud, com foco no Indicador A3 — Percentual de Complementos Válidos, do Painel de Saneamento do Conselho Nacional de Justiça (CNJ). Auxilia na identificação de inconsistências e na tomada de decisão para correção de processos com complementos de movimentos inválidos.

**Tags:** `Qlik Sense` `DataJud` `CNJ`
**Badge:** `Institucional` — `TJPI · 2026`

### 2.6 Adicionar: Maleta Digital da Fiscalização

**Inserir após** o projeto "Dashboard de Complementos Inválidos".

**Título:** Maleta Digital da Fiscalização
**Descrição:**

> Site institucional desenvolvido para a Gerência de Contratos (GECON) da PRAD/UFPI. Interface com UI de maleta 3D e navegação por pastas para centralizar documentos normativos utilizados no dia a dia da fiscalização contratual — legislação, portarias, resoluções e fluxos de procedimentos — que ficavam dispersos em sites de difícil acesso.

**Tags:** `HTML` `CSS` `JavaScript`
**Badge:** `PRAD/UFPI · 2026`
**Link público:** https://maleta-digital-da-fiscalizacao.vercel.app/
**Ação:** adicionar botão/link "Ver projeto" apontando para a URL acima, seguindo o mesmo padrão visual dos outros projetos com link externo, se houver.

---

## Parte 3 — Habilidades

### Contexto

A seção de habilidades está desatualizada. Faltam ferramentas relevantes e uma ferramenta está incorreta (Power BI listado na seção de BI, mas Looker Studio — que é a ferramenta principal na PRAD — não aparece).

### 3.1 Dados & BI — Adicionar Looker Studio

**Localizar:** grupo "Dados & BI"
**Adicionar** o ícone/badge do Looker Studio logo após o Qlik Sense.
**Ícone sugerido:** `https://cdn.simpleicons.org/looker` ou badge shields.io: `https://img.shields.io/badge/Looker_Studio-4285F4?style=flat-square&logo=looker&logoColor=white`

### 3.2 Infraestrutura — Adicionar MySQL e Jupyter

**Localizar:** grupo "Infraestrutura"
**Adicionar** MySQL logo após PostgreSQL.
**Ícone:** `https://cdn.simpleicons.org/mysql`

**Adicionar** Jupyter Notebook logo após MySQL.
**Ícone:** `https://cdn.simpleicons.org/jupyter`

### 3.3 Dev & Ferramentas — Adicionar DBeaver e VS Code

**Localizar:** grupo "Dev & Ferramentas"
**Adicionar** DBeaver e VS Code seguindo o padrão visual existente.

- DBeaver: sem ícone CDN disponível — usar texto simples ou ícone local se houver
- VS Code: `https://cdn.simpleicons.org/visualstudiocode`

---

## Parte 4 — Certificados

### Contexto

Falta o certificado da AWS.

### 4.1 Adicionar: AWS Fundamentos de Nuvem

**Inserir antes** do certificado da Udemy (ou após, se fizer mais sentido visualmente).

**Título:** AWS Fundamentos de Nuvem
**Emissor:** AWS Treina Brasil
**Categoria/tag:** `Cloud` — `2025` (ou o ano correto se souber)

---

## Parte 5 — Formação Acadêmica

### Contexto

O ano de conclusão previsto está inconsistente com os outros documentos.

### 5.1 Corrigir ano de conclusão

**Localizar:** bloco da formação "Bacharelado em Ciência da Computação — UFPI"
**Corrigir:** `2022.1 — 2027.1` → `2022.1 — 2028.1`

---

## Observações Finais para o Claude Code

- Manter 100% da estrutura HTML/CSS/JS existente
- Não alterar estilos, cores, fontes nem animações
- Para os novos projetos (2.4, 2.5, 2.6), replicar exatamente o mesmo padrão de markup HTML dos projetos existentes
- O toggle PT/EN deve continuar funcionando — se houver strings em inglês hardcoded ou em arquivo separado, atualizar também com as traduções equivalentes
- Após as alterações, verificar se a página renderiza corretamente antes de fazer commit
