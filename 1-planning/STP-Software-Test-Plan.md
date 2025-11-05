# Projeto 1 - STP

# 📋 Plano de Teste de Software

## BStack Demo - Plataforma E-commerce

---

---

## 📌 1. INFORMAÇÕES DO DOCUMENTO

| Campo | Detalhes |
| --- | --- |
| **Nome do Projeto** | BStack Demo - Testes E-commerce |
| **Versão do Documento** | 1.0 |
| **Preparado Por** | Maria Silva - Product Owner |
| **Data** | 05 de Novembro de 2025 |
| **Gerente de Testes** | Maria Silva |
| **Time de QA** | João Santos, Ana Costa, Pedro Oliveira |
| **URL da Aplicação** | https://bstackdemo.com |
| **Período de Testes** | 11/11/2025 a 29/11/2025 |

---

## 👋 2. INTRODUÇÃO

Olá time!

Este documento serve como nosso guia oficial para os testes da plataforma BStack Demo. Preparei este plano para que todos tenhamos clareza sobre o escopo, objetivos e expectativas para este ciclo de testes.

### 🎯 2.1 Objetivo

Nosso objetivo principal é validar a qualidade da plataforma BStack Demo, garantindo que todos os fluxos críticos do e-commerce funcionem corretamente em diferentes ambientes e dispositivos. Queremos entregar um relatório completo que demonstre a confiabilidade da aplicação.

### 📖 2.2 Contexto do Projeto

Este é um projeto de demonstração que simula uma loja online real. Embora seja um ambiente de testes, vamos tratá-lo como um projeto real para construirmos um portfólio sólido que reflita a experiência de trabalho em equipe.

### 📦 2.3 Escopo dos Testes

**✅ O que vamos testar:**

- Fluxo completo de autenticação (login/logout)
- Navegação e filtragem do catálogo de produtos
- Funcionalidades do carrinho de compras
- Processo de checkout completo
- Compatibilidade em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- Responsividade em desktop, tablet e mobile
- Performance básica (tempos de carregamento)
- Usabilidade e experiência do usuário

**❌ O que NÃO vamos testar:**

- Integração real com gateway de pagamento (é apenas simulação)
- Testes de API/Backend direto
- Testes de segurança avançados (penetration testing)
- Testes de carga/estresse com milhares de usuários
- Funcionalidades administrativas (não temos acesso)

---

## 🎯 3. OBJETIVOS E METAS

Como PO, estabeleci os seguintes objetivos para nosso time:

1. ✅ **Cobertura de Testes**: Executar 100% dos casos de teste planejados
2. ✅ **Qualidade**: Atingir taxa de aprovação mínima de 90% nos testes
3. ✅ **Documentação**: Todos os bugs encontrados devem ser documentados com evidências
4. ✅ **Prazo**: Concluir todos os testes no período estabelecido
5. ✅ **Compatibilidade**: Validar funcionamento em pelo menos 4 navegadores diferentes
6. ✅ **Responsividade**: Testar em 3 resoluções distintas (desktop, tablet, mobile)

---

## 🔬 4. ESTRATÉGIA DE TESTE

### 📅 4.1 Abordagem Geral

Vamos adotar uma abordagem híbrida:

**Semana 1-2: Testes Funcionais**
- Cada QA será responsável por módulos específicos
- Foco em cenários positivos e negativos
- Execução manual de casos de teste

**Semana 3: Testes de Compatibilidade e Responsividade**
- Testes cross-browser
- Validação em diferentes dispositivos
- Testes exploratórios

**Semana 4: Regressão e Fechamento**
- Reteste de bugs corrigidos
- Testes de regressão nos fluxos críticos
- Consolidação de relatórios

### 👥 4.2 Divisão de Responsabilidades

**João Santos** - Foco em:
- 🔐 Módulo de Autenticação
- 🛍️ Módulo de Catálogo de Produtos
- 🌐 Testes em Chrome e Firefox

**Ana Costa** - Foco em:
- 🛒 Módulo de Carrinho de Compras
- 💳 Módulo de Checkout
- 🌐 Testes em Safari e Edge

**Pedro Oliveira** - Foco em:
- 📱 Testes de Responsividade (todos os módulos)
- ⚡ Testes de Performance
- 🔍 Testes Exploratórios
- 📸 Consolidação de evidências

> 💡 Nota: Essa divisão é uma sugestão. Podemos ajustar conforme a necessidade e disponibilidade de cada um.
> 

### 📊 4.3 Tipos de Teste por Prioridade

| Tipo de Teste | Prioridade | Responsável | Prazo |
| --- | --- | --- | --- |
| Testes Funcionais - Fluxos Críticos | 🔴 Alta | João, Ana | Semana 1 |
| Testes Funcionais - Fluxos Secundários | 🟡 Média | João, Ana | Semana 2 |
| Testes Cross-browser | 🔴 Alta | Todos | Semana 3 |
| Testes Responsivos | 🟡 Média | Pedro | Semana 3 |
| Testes de Performance | 🟢 Baixa | Pedro | Semana 3 |
| Testes Exploratórios | 🟡 Média | Todos | Semana 3-4 |
| Regressão | 🔴 Alta | Todos | Semana 4 |

---

## 💻 5. AMBIENTE DE TESTE

### 🌐 5.1 Navegadores Obrigatórios

Pessoal, precisamos garantir testes nestes navegadores (versões mais recentes):
- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Safari (quem tiver Mac)
- ✅ Microsoft Edge

### 📐 5.2 Resoluções e Dispositivos

**Desktop:**
- 1920x1080 (Full HD)
- 1366x768 (notebook padrão)

**Tablet:**
- iPad ou similar (768x1024)

**Mobile:**
- iPhone ou similar (375x667)
- Android ou similar (360x640)

> 💡 Dica: Se não tiverem todos os dispositivos físicos, podem usar o modo responsivo do Chrome DevTools.
> 

### 🔑 5.3 Credenciais de Teste

O site disponibiliza estes usuários de teste:

**Usuários disponíveis:**
- `demouser`
- `fav_user`
- `image_not_loading_user`
- `existing_orders_user`

**Senha para todos:** `testingisfun99`

> ⚠️ Atenção: Explorem os diferentes usuários, pois alguns podem ter comportamentos específicos (olhem os nomes, eles dão dicas! 😉)
> 

---

## 🧪 6. FUNCIONALIDADES A SEREM TESTADAS

### 🔐 6.1 Módulo de Autenticação

**Responsável Principal: João**

**Cenários a validar:**
- ✅ Login com credenciais válidas
- ✅ Login com credenciais inválidas
- ✅ Validação de campos vazios
- ✅ Logout do sistema
- ✅ Persistência da sessão após navegação
- ✅ Mensagens de erro apropriadas
- ✅ Comportamento após logout (não deve acessar áreas restritas)

### 🛍️ 6.2 Módulo de Catálogo de Produtos

**Responsável Principal: João**

**Cenários a validar:**
- ✅ Carregamento correto da lista de produtos
- ✅ Aplicação de filtros por marca (Apple, Samsung, Google, OnePlus)
- ✅ Aplicação de filtros por sistema operacional
- ✅ Ordenação de produtos (menor preço, maior preço, etc.)
- ✅ Visualização de detalhes do produto
- ✅ Carregamento de imagens dos produtos
- ✅ Exibição correta de preços e descrições
- ✅ Combinação de múltiplos filtros
- ✅ Limpeza de filtros

### 🛒 6.3 Módulo de Carrinho de Compras

**Responsável Principal: Ana**

**Cenários a validar:**
- ✅ Adicionar produto ao carrinho
- ✅ Adicionar múltiplos produtos
- ✅ Remover produto do carrinho
- ✅ Atualizar quantidade de produtos
- ✅ Visualizar resumo do carrinho
- ✅ Cálculo correto de subtotais
- ✅ Cálculo correto do total
- ✅ Persistência do carrinho durante navegação
- ✅ Carrinho vazio - mensagem apropriada
- ✅ Comportamento com quantidade zero
- ✅ Limite de quantidade (se houver)

### 💳 6.4 Módulo de Checkout

**Responsável Principal: Ana**

**Cenários a validar:**
- ✅ Acesso ao checkout somente com produtos no carrinho
- ✅ Preenchimento de nome completo
- ✅ Preenchimento de endereço
- ✅ Seleção de estado/região
- ✅ Preenchimento de código postal
- ✅ Validação de campos obrigatórios
- ✅ Mensagens de erro para campos inválidos
- ✅ Revisão do pedido antes da finalização
- ✅ Finalização do pedido
- ✅ Mensagem de confirmação
- ✅ Redirecionamento após compra

### 📱 6.5 Testes de Responsividade

**Responsável Principal: Pedro**

**Validar em todas as resoluções:**
- ✅ Layout se adapta corretamente
- ✅ Todos os elementos são clicáveis
- ✅ Textos legíveis (tamanho adequado)
- ✅ Imagens redimensionam corretamente
- ✅ Menu de navegação funciona (mobile menu)
- ✅ Formulários utilizáveis em mobile
- ✅ Botões com tamanho adequado para toque
- ✅ Sem quebras de layout
- ✅ Sem scroll horizontal indesejado

---

## ✅ 7. CRITÉRIOS DE ACEITE

### 🚀 7.1 Para Iniciar os Testes

- ✅ Aplicação acessível e estável
- ✅ Todos os QAs têm acesso ao ambiente
- ✅ Casos de teste disponibilizados
- ✅ Ferramentas de captura de tela/vídeo prontas
- ✅ Planilha de gestão de testes compartilhada

### 🏁 7.2 Para Concluir os Testes

- ✅ 100% dos casos de teste executados
- ✅ Nenhum bug crítico ou bloqueador em aberto
- ✅ Taxa de aprovação mínima de 90%
- ✅ Todos os bugs documentados com evidências
- ✅ Testes de regressão concluídos
- ✅ Relatório final consolidado
- ✅ Apresentação dos resultados para o time

---

## 📝 8. EXEMPLOS DE CASOS DE TESTE

> 💡 Preparei alguns exemplos para guiar vocês. Sintam-se livres para expandir e criar casos adicionais baseados em suas explorações!
> 

### TC001 - Login com Credenciais Válidas

**Prioridade**: 🔴 Alta

**Responsável**: João

**Pré-condição**: Usuário não está logado

**Passos**:
1. Acessar https://bstackdemo.com
2. Clicar no botão “Sign In”
3. Selecionar usuário “demouser” no dropdown
4. Selecionar senha “testingisfun99” no dropdown
5. Clicar no botão “Log In”

**Resultado Esperado**:
- Login realizado com sucesso
- Usuário redirecionado para página inicial
- Nome do usuário aparece no canto superior direito
- Botão “Sign In” muda para “Logout”

---

### TC002 - Login com Credenciais Inválidas

**Prioridade**: 🔴 Alta

**Responsável**: João

**Pré-condição**: Usuário não está logado

**Passos**:
1. Acessar https://bstackdemo.com
2. Clicar no botão “Sign In”
3. Selecionar usuário inválido ou deixar vazio
4. Tentar fazer login

**Resultado Esperado**:
- Login não é permitido
- Mensagem de erro apropriada é exibida
- Usuário permanece na tela de login

---

### TC003 - Adicionar Produto ao Carrinho

**Prioridade**: 🔴 Alta

**Responsável**: Ana

**Pré-condição**: Usuário logado no sistema

**Passos**:
1. Navegar pela lista de produtos na página inicial
2. Clicar em um produto específico (ex: iPhone 12)
3. Visualizar detalhes do produto
4. Clicar no botão “Add to cart”
5. Observar o ícone do carrinho no topo

**Resultado Esperado**:
- Produto é adicionado ao carrinho
- Contador do carrinho incrementa em 1
- Feedback visual de confirmação (se houver)

---

### TC004 - Aplicar Filtro de Marca

**Prioridade**: 🟡 Média

**Responsável**: João

**Pré-condição**: Estar na página inicial com produtos visíveis

**Passos**:
1. Localizar os filtros na lateral esquerda
2. Clicar em uma marca específica (ex: Apple)
3. Aguardar atualização da lista
4. Verificar produtos exibidos

**Resultado Esperado**:
- Apenas produtos da marca Apple são exibidos
- Contador de produtos é atualizado
- Filtro aparece como selecionado

---

### TC005 - Remover Produto do Carrinho

**Prioridade**: 🔴 Alta

**Responsável**: Ana

**Pré-condição**: Carrinho com pelo menos 1 produto

**Passos**:
1. Clicar no ícone do carrinho
2. Visualizar produtos no carrinho
3. Clicar no botão de remover produto
4. Confirmar remoção (se houver confirmação)

**Resultado Esperado**:
- Produto é removido da lista
- Total é recalculado
- Contador do carrinho é atualizado
- Se era o único produto, mensagem de carrinho vazio

---

### TC006 - Finalizar Compra Completa

**Prioridade**: 🔴 Alta

**Responsável**: Ana

**Pré-condição**: Carrinho com pelo menos 1 produto, usuário logado

**Passos**:
1. Clicar no ícone do carrinho
2. Clicar em “Checkout”
3. Preencher “First Name”: João
4. Preencher “Last Name”: Silva
5. Preencher “Address”: Rua Teste, 123
6. Preencher “State/Province”: São Paulo
7. Preencher “Postal Code”: 01234-567
8. Clicar em “Submit”

**Resultado Esperado**:
- Pedido é processado
- Mensagem de confirmação é exibida
- Carrinho é esvaziado
- Pedido aparece no histórico (se aplicável)

---

### TC007 - Teste Responsivo Mobile

**Prioridade**: 🟡 Média

**Responsável**: Pedro

**Pré-condição**: Navegador em modo mobile (375x667)

**Passos**:
1. Acessar https://bstackdemo.com em viewport mobile
2. Verificar carregamento da página
3. Testar menu hambúrguer (se houver)
4. Navegar pelos produtos
5. Testar todos os fluxos principais

**Resultado Esperado**:
- Layout se adapta ao mobile
- Todos os elementos são acessíveis
- Não há quebra de layout
- Funcionalidades mantêm o comportamento

---

## 🐛 9. GESTÃO DE DEFEITOS

### 📋 9.1 Como Reportar Bugs

Quando encontrarem um bug, preciso que documentem com estas informações:

**Template de Bug Report:**

```
ID: BUG-XXX
Título: [Breve descrição do problema]
Módulo: [Autenticação/Catálogo/Carrinho/Checkout/Outro]
Severidade: [Crítica/Alta/Média/Baixa]
Prioridade: [P1/P2/P3/P4]
Ambiente: [Navegador + versão, SO, resolução]

Passos para Reproduzir:
1.
2.
3.

Resultado Esperado:
[O que deveria acontecer]

Resultado Atual:
[O que está acontecendo]

Evidências:
[Anexar screenshots/vídeos]

Observações:
[Informações adicionais relevantes]
```

### 🎯 9.2 Classificação de Severidade

**🔴 Crítica**:
- Sistema não funciona, bloqueio total
- Perda de dados
- Funcionalidade principal completamente quebrada
- **Exemplo**: Não consegue fazer login de forma alguma

**🟠 Alta**:
- Funcionalidade principal não funciona corretamente
- Impacto significativo na experiência do usuário
- **Exemplo**: Carrinho não calcula o total corretamente

**🟡 Média**:
- Funcionalidade secundária com problema
- Workaround disponível
- **Exemplo**: Filtro específico não funciona, mas outros sim

**🟢 Baixa**:
- Problemas cosméticos
- Melhorias de usabilidade
- **Exemplo**: Desalinhamento visual pequeno

### ⏱️ 9.3 Classificação de Prioridade

- **P1 - Imediata**: Corrigir antes de prosseguir com outros testes
- **P2 - Alta**: Corrigir na próxima iteração
- **P3 - Média**: Corrigir quando possível
- **P4 - Baixa**: Backlog para futuras melhorias

---

## 📅 10. CRONOGRAMA

| Semana | Período | Atividades Principais | Entregável |
| --- | --- | --- | --- |
| **Semana 1** | 11-15/11 | • Revisão do plano de testes• Configuração de ambientes• Início testes funcionais (João, Ana) | Casos de teste executados (50%) |
| **Semana 2** | 18-22/11 | • Continuação testes funcionais• Documentação de bugs• Início testes responsivos (Pedro) | Casos de teste executados (80%)Relatório de bugs |
| **Semana 3** | 25-29/11 | • Testes cross-browser• Testes exploratórios• Validação de bugs corrigidos | Casos de teste executados (100%)Matriz de compatibilidade |
| **Semana 4** | 02-06/12 | • Testes de regressão• Consolidação de evidências• Relatório final | Relatório final de testesApresentação de resultados |

---

## 🛠️ 11. FERRAMENTAS E RECURSOS

### 💾 11.1 Ferramentas Recomendadas

**Para captura de evidências:**
- 📸 Lightshot / Greenshot (screenshots)
- 🎥 Loom / OBS (vídeos)
- 🔧 DevTools do navegador (console de erros)

**Para gestão de testes:**
- 📊 Google Sheets (planilha de casos de teste - vou criar e compartilhar)
- 📋 Trello ou Notion (gestão de bugs e tarefas)

**Para testes responsivos:**
- 📱 Chrome DevTools (Device Mode)
- 🦊 Firefox Responsive Design Mode

### 📚 11.2 Documentos Relacionados

Vou disponibilizar para vocês:
- 📊 Planilha de Casos de Teste (Excel/Google Sheets)
- 📋 Template de Relatório de Bug
- 📈 Dashboard de Métricas (atualização semanal)
- 📝 Atas de reunião de acompanhamento

---

## 💬 12. COMUNICAÇÃO E ACOMPANHAMENTO

### 🤝 12.1 Reuniões

**Daily Standup** (15 min - diário às 9h):
- O que fiz ontem?
- O que vou fazer hoje?
- Tenho algum impedimento?

**Reunião de Acompanhamento** (30 min - toda sexta às 16h):
- Revisão do progresso semanal
- Discussão de bugs críticos
- Ajustes no planejamento se necessário

### 📱 12.2 Canais de Comunicação

- **Slack/WhatsApp**: Para comunicação rápida e dúvidas
- **Email**: Para compartilhamento de documentos e relatórios formais
- **Google Drive**: Para armazenamento de evidências e documentos

---

## 📊 13. MÉTRICAS E INDICADORES

Vou acompanhar estas métricas semanalmente:

| Métrica | Meta | Como Medir |
| --- | --- | --- |
| Casos Executados | 100% | (Executados / Total) × 100 |
| Taxa de Aprovação | ≥ 90% | (Aprovados / Executados) × 100 |
| Bugs Encontrados | N/A | Contagem total |
| Bugs Críticos Abertos | 0 ao final | Contagem por severidade |
| Cobertura de Navegadores | 4 navegadores | Checklist de compatibilidade |
| Tempo Médio de Execução | N/A | Tempo gasto / Casos executados |

---

## ⚠️ 14. RISCOS E MITIGAÇÃO

| Risco | Impacto | Probabilidade | Mitigação |
| --- | --- | --- | --- |
| Site fora do ar | Alto | Baixa | Reagendar testes, testar em horários alternativos |
| Membro do time indisponível | Médio | Média | Redistribuir tarefas entre o time |
| Encontrar muitos bugs críticos | Alto | Média | Priorizar correções, estender prazo se necessário |
| Falta de dispositivos para teste | Médio | Baixa | Usar emuladores, pedir dispositivos emprestados |
| Ambiguidade nos requisitos | Médio | Média | Documentar e discutir em daily, usar bom senso |

---

## 📦 15. ENTREGÁVEIS ESPERADOS

Ao final do ciclo de testes, preciso receber de vocês:

- ✅ **Planilha de Casos de Teste** (com status de execução)
- ✅ **Relatório de Bugs** (todos os bugs encontrados documentados)
- ✅ **Evidências de Teste** (screenshots e vídeos organizados por módulo)
- ✅ **Matriz de Compatibilidade** (tabela com resultados por navegador)
- ✅ **Relatório de Testes Responsivos** (resultados por resolução)
- ✅ **Relatório Final Consolidado** (resumo executivo com métricas)
- ✅ **Lições Aprendidas** (o que funcionou bem, o que pode melhorar)

---

## 💡 16. OBSERVAÇÕES FINAIS

**Pessoal, algumas orientações importantes:**

1. **Dúvidas**: Não hesitem em me procurar! Melhor perguntar do que assumir errado.
2. **Qualidade > Quantidade**: Prefiro 50 casos bem executados e documentados do que 100 feitos às pressas.
3. **Colaboração**: Ajudem uns aos outros! Se alguém encontrar algo interessante, compartilhem com o time.
4. **Criatividade**: Os casos de teste são um guia, mas usem a criatividade para encontrar bugs que não estão óbvios.
5. **Documentação**: Capturem evidências de TUDO. Um bug sem evidência é difícil de reproduzir.
6. **Feedback**: Este é um documento vivo. Se acharem que algo deve ser ajustado, me avisem!
7. **Portfólio**: Lembrem-se que este trabalho pode ir para seus portfólios. Façam com capricho! 💪

---

## ✍️ 17. APROVAÇÕES

| Nome | Função | Status | Data |
| --- | --- | --- | --- |
| Maria Silva | Product Owner / QA Lead | ✅ Aprovado | 05/11/2025 |
| João Santos | QA Tester | ⏳ Pendente |  |
| Ana Costa | QA Tester | ⏳ Pendente |  |
| Pedro Oliveira | QA Tester | ⏳ Pendente |  |

---

## 📞 CONTATOS

**Maria Silva (PO)**
- 📧 Email: maria.silva@email.com
- 📱 WhatsApp: (51) 9999-8888
- 💬 Slack: @maria.silva
- 🔗 Reuniões: Link do Google Meet (será enviado antes de cada reunião)

---

> 💭 “A qualidade não é um acidente, é o resultado de um esforço inteligente.” - John Ruskin
> 

**Vamos fazer um ótimo trabalho juntos!** 🚀✨