# 📊 TEMPLATE DE PLANILHA DE TESTES - BSTACK DEMO
## Instruções de Uso

---

## 🎯 COMO USAR ESTE TEMPLATE

### Passo 1: Criar a Planilha
1. Abra o **Google Sheets** (recomendado) ou Excel
2. Crie uma nova planilha
3. Renomeie para "Execução de Testes - BStack Demo"

### Passo 2: Criar as Abas
Crie **6 abas** com estes nomes exatos:
1. `Casos de Teste`
2. `Registro de Bugs`
3. `Dashboard`
4. `Rastreabilidade`
5. `Execução Diária`
6. `Instruções`

---

## 📋 ABA 1: "Casos de Teste"

### Copie e cole esta tabela:

```
ID	Título do Caso de Teste	Módulo	Prioridade	Responsável	Status	Data Execução	Tempo (min)	Resultado	Build	Navegador	Resolução	Observações	Bug ID	Link Evidência
TC001	Login com credenciais válidas	Autenticação	Alta	João Santos	Não executado			N/A	v1.0				
TC002	Login com credenciais inválidas	Autenticação	Alta	João Santos	Não executado			N/A	v1.0				
TC003	Login com senha inválida	Autenticação	Alta	João Santos	Não executado			N/A	v1.0				
TC004	Login com campos vazios	Autenticação	Alta	João Santos	Não executado			N/A	v1.0				
TC005	Logout do sistema	Autenticação	Alta	João Santos	Não executado			N/A	v1.0				
TC006	Persistência de logout	Autenticação	Média	João Santos	Não executado			N/A	v1.0				
TC007	Filtrar produtos por marca (Apple)	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC008	Filtrar produtos por múltiplas marcas	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC009	Remover filtro de marca	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC010	Filtrar produtos por preço	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC011	Combinar múltiplos filtros	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC012	Ordenar por menor preço	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC013	Ordenar por maior preço	Catálogo	Média	João Santos	Não executado			N/A	v1.0				
TC014	Ordenar alfabeticamente	Catálogo	Baixa	João Santos	Não executado			N/A	v1.0				
TC015	Adicionar produto ao carrinho	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC016	Adicionar múltiplos produtos diferentes	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC017	Adicionar mesmo produto múltiplas vezes	Carrinho	Média	Ana Costa	Não executado			N/A	v1.0				
TC018	Remover produto do carrinho	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC019	Remover todos os produtos	Carrinho	Média	Ana Costa	Não executado			N/A	v1.0				
TC020	Aumentar quantidade de produto	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC021	Diminuir quantidade de produto	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC022	Quantidade zero ou negativa	Carrinho	Média	Ana Costa	Não executado			N/A	v1.0				
TC023	Validar cálculo de subtotal	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC024	Validar cálculo de total com múltiplos produtos	Carrinho	Alta	Ana Costa	Não executado			N/A	v1.0				
TC025	Checkout completo com dados válidos	Checkout	Alta	Ana Costa	Não executado			N/A	v1.0				
TC026	Checkout com campos obrigatórios vazios	Checkout	Alta	Ana Costa	Não executado			N/A	v1.0				
TC027	Checkout com dados inválidos	Checkout	Média	Ana Costa	Não executado			N/A	v1.0				
TC028	Acessar checkout com carrinho vazio	Checkout	Média	Ana Costa	Não executado			N/A	v1.0				
TC029	Validação de caracteres especiais	Checkout	Baixa	Ana Costa	Não executado			N/A	v1.0				
TC030	Validação de limite de caracteres	Checkout	Baixa	Ana Costa	Não executado			N/A	v1.0				
TC031	Validação de código postal	Checkout	Média	Ana Costa	Não executado			N/A	v1.0				
TC032	Layout mobile (375x667)	Responsividade	Média	Pedro Oliveira	Não executado			N/A	v1.0				
TC033	Layout tablet (768x1024)	Responsividade	Média	Pedro Oliveira	Não executado			N/A	v1.0				
TC034	Rotação de tela (Portrait/Landscape)	Responsividade	Baixa	Pedro Oliveira	Não executado			N/A	v1.0				
TC035	Compatibilidade Chrome	Cross-browser	Alta	João Santos	Não executado			N/A	v1.0				
TC036	Compatibilidade Firefox	Cross-browser	Alta	João Santos	Não executado			N/A	v1.0				
TC037	Compatibilidade Safari	Cross-browser	Média	Ana Costa	Não executado			N/A	v1.0				
TC038	Compatibilidade Edge	Cross-browser	Média	Ana Costa	Não executado			N/A	v1.0				
TC039	Tempo de carregamento da página inicial	Performance	Baixa	Pedro Oliveira	Não executado			N/A	v1.0				
TC040	Performance do filtro de produtos	Performance	Baixa	Pedro Oliveira	Não executado			N/A	v1.0				
```

### Configurações de Formatação (Google Sheets/Excel):

**1. Formatação Condicional para coluna "Status":**
- Se contém "Não executado" → Cinza claro (#E0E0E0)
- Se contém "Em execução" → Amarelo (#FFF3CD)
- Se contém "Executado" → Verde claro (#D4EDDA)
- Se contém "Bloqueado" → Azul claro (#CCE5FF)

**2. Formatação Condicional para coluna "Resultado":**

- Se contém "PASS" → Verde (#28A745) com texto branco
- Se contém "FAIL" → Vermelho (#DC3545) com texto branco
- Se contém "N/A" → Cinza (#6C757D)

**3. Formatação Condicional para coluna "Prioridade":**
- Se contém "Alta" → Vermelho claro (#FFE6E6)
- Se contém "Média" → Amarelo claro (#FFF9E6)
- Se contém "Baixa" → Verde claro (#E6F9E6)

**4. Cabeçalhos:**
- Linha 1: Fundo azul escuro (#003366)
- Texto: Branco e Negrito
- Centralizado

**5. Validação de Dados (Dropdowns):**

**Coluna "Status":**
```
Não executado
Em execução
Executado
Bloqueado
```

**Coluna "Resultado":**
```
N/A
PASS
FAIL
```

**Coluna "Prioridade":**
```
Alta
Média
Baixa
```

**Coluna "Navegador":**
```
Chrome
Firefox
Safari
Edge
Mobile Chrome
Mobile Safari
```

**Coluna "Resolução":**
```
1920x1080
1366x768
768x1024
375x667
360x640
```

---

## 🐛 ABA 2: "Registro de Bugs"

### Copie e cole esta tabela:

```
Bug ID	Título do Bug	Severidade	Prioridade	Status	Módulo	Encontrado em (TC)	Reportado Por	Data Reporte	Navegador	Descrição Resumida	Link Evidência	Data Correção	Observações
BUG-001	[Exemplo] Contador do carrinho não atualiza	Alta	P1	Aberto	Carrinho	TC015	Ana Costa	12/11/2025	Chrome	Ao adicionar produto, o contador permanece em 0	link-screenshot		Aguardando dev
BUG-002									
BUG-003									
BUG-004									
BUG-005									
BUG-006									
BUG-007									
BUG-008									
BUG-009									
BUG-010									
```

### Formatação Condicional para coluna "Severidade":
- "Crítica" → Vermelho escuro (#8B0000) texto branco
- "Alta" → Laranja (#FF8C00) texto branco
- "Média" → Amarelo (#FFD700)
- "Baixa" → Verde claro (#90EE90)

### Formatação Condicional para coluna "Status":
- "Aberto" → Vermelho claro (#FFE6E6)
- "Em análise" → Amarelo (#FFF9E6)
- "Em correção" → Azul claro (#E6F2FF)
- "Corrigido" → Verde claro (#E6F9E6)
- "Reaberto" → Laranja claro (#FFE0CC)
- "Fechado" → Cinza (#F0F0F0)

---

## 📊 ABA 3: "Dashboard"

### Copie e cole (será preenchido automaticamente):

```
DASHBOARD DE TESTES - BSTACK DEMO
Última atualização: [Data Automática]

═══════════════════════════════════════════════════════════

📋 EXECUÇÃO DE CASOS DE TESTE

Total de Casos Planejados:		40
Casos Executados:			=CONT.SE('Casos de Teste'!F:F;"Executado")
Casos Não Executados:			=CONT.SE('Casos de Teste'!F:F;"Não executado")
Casos Em Execução:			=CONT.SE('Casos de Teste'!F:F;"Em execução")
Casos Bloqueados:			=CONT.SE('Casos de Teste'!F:F;"Bloqueado")

Taxa de Execução:			=CONT.SE('Casos de Teste'!F:F;"Executado")/40*100
Progresso:				[Criar barra de progresso visual]

═══════════════════════════════════════════════════════════

✅ RESULTADO DOS TESTES

Casos Aprovados (PASS):			=CONT.SE('Casos de Teste'!I:I;"PASS")
Casos Reprovados (FAIL):		=CONT.SE('Casos de Teste'!I:I;"FAIL")

Taxa de Aprovação:			=CONT.SE('Casos de Teste'!I:I;"PASS")/CONT.SE('Casos de Teste'!F:F;"Executado")*100

═══════════════════════════════════════════════════════════

🐛 BUGS ENCONTRADOS

Total de Bugs:				=CONT.SE('Registro de Bugs'!A:A;"BUG-*")-1
Bugs Críticos:				=CONT.SE('Registro de Bugs'!C:C;"Crítica")
Bugs Altos:				=CONT.SE('Registro de Bugs'!C:C;"Alta")
Bugs Médios:				=CONT.SE('Registro de Bugs'!C:C;"Média")
Bugs Baixos:				=CONT.SE('Registro de Bugs'!C:C;"Baixa")

Bugs Abertos:				=CONT.SE('Registro de Bugs'!E:E;"Aberto")
Bugs Corrigidos:			=CONT.SE('Registro de Bugs'!E:E;"Corrigido")
Bugs Fechados:				=CONT.SE('Registro de Bugs'!E:E;"Fechado")

═══════════════════════════════════════════════════════════

📈 EXECUÇÃO POR MÓDULO

Módulo				Total	Executados	Aprovados	Reprovados
Autenticação			6	=CONT.SES		
Catálogo			8	
Carrinho			10	
Checkout			7	
Responsividade			3	
Cross-browser			4	
Performance			2	

═══════════════════════════════════════════════════════════

⏱️ TEMPO DE EXECUÇÃO

Tempo Total de Execução:		=SOMA('Casos de Teste'!H:H)
Tempo Médio por Caso:			=MÉDIA('Casos de Teste'!H:H)
Tempo Estimado Restante:		=[Calcular baseado em casos não executados]

═══════════════════════════════════════════════════════════

👥 EXECUÇÃO POR RESPONSÁVEL

Responsável		Total	Executados	Taxa
João Santos		18	=CONT.SES
Ana Costa		17	
Pedro Oliveira		5	

═══════════════════════════════════════════════════════════

🎯 STATUS GERAL DO PROJETO

Status:		[🟢 No Prazo | 🟡 Atenção | 🔴 Atrasado]
Observações:	[Texto livre]
```

### Criar Gráficos no Dashboard:

**Gráfico 1: Pizza - Status dos Casos**
- Dados: Executados, Não Executados, Em Execução, Bloqueados
- Tipo: Pizza/Donut

**Gráfico 2: Barras - Resultado por Módulo**
- Eixo X: Módulos
- Eixo Y: Quantidade
- Séries: PASS (verde), FAIL (vermelho)

**Gráfico 3: Linha - Execução Acumulada**
- Eixo X: Datas
- Eixo Y: Casos executados acumulados

**Gráfico 4: Pizza - Bugs por Severidade**
- Dados: Críticos, Altos, Médios, Baixos
- Cores: Vermelho, Laranja, Amarelo, Verde

---

## 🔗 ABA 4: "Rastreabilidade"

### Copie e cole esta tabela:

```
Requisito ID	Descrição do Requisito	Casos de Teste Relacionados	Total Casos	Executados	Aprovados	Status	Cobertura %
REQ-001	Login de usuário	TC001, TC002, TC003, TC004	4			Pendente	0%
REQ-002	Logout de usuário	TC005, TC006	2			Pendente	0%
REQ-003	Filtrar produtos por marca	TC007, TC008, TC009	3			Pendente	0%
REQ-004	Filtrar produtos por preço	TC010, TC011	2			Pendente	0%
REQ-005	Ordenar produtos	TC012, TC013, TC014	3			Pendente	0%
REQ-006	Adicionar produto ao carrinho	TC015, TC016, TC017	3			Pendente	0%
REQ-007	Remover produto do carrinho	TC018, TC019	2			Pendente	0%
REQ-008	Atualizar quantidade no carrinho	TC020, TC021, TC022	3			Pendente	0%
REQ-009	Calcular total do carrinho	TC023, TC024	2			Pendente	0%
REQ-010	Processo de checkout	TC025, TC026, TC027, TC028	4			Pendente	0%
REQ-011	Validação de formulário	TC029, TC030, TC031	3			Pendente	0%
REQ-012	Responsividade mobile	TC032, TC033, TC034	3			Pendente	0%
REQ-013	Compatibilidade cross-browser	TC035, TC036, TC037, TC038	4			Pendente	0%
REQ-014	Performance básica	TC039, TC040	2			Pendente	0%
```

### Formatação Condicional para "Status":
- "Completo" → Verde
- "Em andamento" → Amarelo
- "Pendente" → Cinza
- "Bloqueado" → Vermelho

### Formatação Condicional para "Cobertura %":
- >= 100% → Verde escuro
- >= 80% → Verde claro
- >= 50% → Amarelo
- < 50% → Vermelho

---

## 📅 ABA 5: "Execução Diária"

### Copie e cole esta tabela:

```
Data	Dia da Semana	Executor	Casos Planejados	Casos Executados	Aprovados	Reprovados	Bugs Encontrados	Tempo Total (min)	Observações
11/11/2025	Segunda-feira										
12/11/2025	Terça-feira										
13/11/2025	Quarta-feira										
14/11/2025	Quinta-feira										
15/11/2025	Sexta-feira										
18/11/2025	Segunda-feira										
19/11/2025	Terça-feira										
20/11/2025	Quarta-feira										
21/11/2025	Quinta-feira										
22/11/2025	Sexta-feira										
25/11/2025	Segunda-feira										
26/11/2025	Terça-feira										
27/11/2025	Quarta-feira										
28/11/2025	Quinta-feira										
29/11/2025	Sexta-feira										
02/12/2025	Segunda-feira										
03/12/2025	Terça-feira										
04/12/2025	Quarta-feira										
05/12/2025	Quinta-feira										
06/12/2025	Sexta-feira										
```

---

## 📖 ABA 6: "Instruções"

### Copie e cole este texto:

```
═══════════════════════════════════════════════════════════
 INSTRUÇÕES DE USO - PLANILHA DE EXECUÇÃO DE TESTES
═══════════════════════════════════════════════════════════

📋 ABA "Casos de Teste"
└─ Principal aba de trabalho
└─ Atualizar diariamente:
   • Status (dropdown)
   • Data de Execução
   • Tempo gasto
   • Resultado (PASS/FAIL)
   • Observações importantes
   • Bug ID (se falhou)
   • Link de evidência

🐛 ABA "Registro de Bugs"
└─ Criar novo bug quando caso de teste FALHAR
└─ Preencher TODOS os campos
└─ Anexar link de screenshot/vídeo
└─ Atualizar status quando corrigido

📊 ABA "Dashboard"
└─ Atualiza AUTOMATICAMENTE
└─ Não editar (apenas visualizar)
└─ Compartilhar em reuniões

🔗 ABA "Rastreabilidade"
└─ Mostra cobertura por requisito
└─ Verificar semanalmente
└─ Identificar gaps de cobertura

📅 ABA "Execução Diária"
└─ Preencher ao final de cada dia
└─ Registrar progresso diário
└─ Identificar tendências

═══════════════════════════════════════════════════════════

🎨 LEGENDA DE CORES

Status:
🟢 Verde = Executado
🟡 Amarelo = Em execução
⚪ Cinza = Não executado
🔵 Azul = Bloqueado

Resultado:
🟢 Verde = PASS (aprovado)
🔴 Vermelho = FAIL (reprovado)
⚫ Cinza = N/A (não aplicável)

Prioridade:
🔴 Vermelho = Alta
🟡 Amarelo = Média
🟢 Verde = Baixa

Severidade de Bugs:
🔴 Vermelho escuro = Crítica
🟠 Laranja = Alta
🟡 Amarelo = Média
🟢 Verde = Baixa

═══════════════════════════════════════════════════════════

✅ CHECKLIST DIÁRIO

Ao iniciar o dia:
□ Verificar casos planejados para hoje
□ Preparar dados de teste
□ Configurar ambiente

Durante execução:
□ Seguir passos do STD
□ Capturar evidências
□ Documentar observações
□ Reportar bugs imediatamente

Ao final do dia:
□ Atualizar planilha
□ Preencher "Execução Diária"
□ Organizar evidências
□ Comunicar progresso

═══════════════════════════════════════════════════════════

🎯 METAS DO PROJETO

✅ Executar 100% dos casos de alta prioridade
✅ Atingir taxa de aprovação ≥ 90%
✅ Documentar todos os bugs com evidências
✅ Manter planilha atualizada diariamente
✅ Testar em 4 navegadores diferentes
✅ Entregar relatório final completo

═══════════════════════════════════════════════════════════

📞 CONTATOS

Product Owner: Maria Silva
Email: maria.silva@email.com
Telefone: (51) 9999-8888

QA Team:
• João Santos - joao.santos@email.com
• Ana Costa - ana.costa@email.com
• Pedro Oliveira - pedro.oliveira@email.com

═══════════════════════════════════════════════════════════

📚 DOCUMENTOS RELACIONADOS

• Software Test Plan (STP)
• Software Test Design (STD)
• Bug Report Templates
• Test Evidence Folder

═══════════════════════════════════════════════════════════
```

---

## 🎨 RESUMO DE FORMATAÇÃO

### Para aplicar no Google Sheets:

1. **Congele a primeira linha:**
   - View → Freeze → 1 row

2. **Aplique filtros:**
   - Selecione cabeçalhos → Data → Create a filter

3. **Formatação Condicional:**
   - Format → Conditional formatting
   - Configure as regras descritas acima

4. **Validação de Dados (Dropdowns):**
   - Data → Data validation
   - Criteria: List of items
   - Cole as opções de cada coluna

5. **Proteja o Dashboard:**
   - Data → Protect sheets and ranges
   - Selecione aba "Dashboard"
   - Marque "Except certain cells"

---

## 💾 DICA FINAL

Após criar e configurar:
1. Salve como "Template - Execução Testes"
2. Faça uma cópia antes de começar a usar
3. Compartilhe o link (Anyone with link can VIEW)
4. Faça backup semanal

Bom trabalho! 🚀
```

