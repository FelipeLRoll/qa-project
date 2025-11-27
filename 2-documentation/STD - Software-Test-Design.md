# 🧪 Software Test Design (STD)
## BStack Demo - Plataforma E-commerce

---

## 📌 1. INFORMAÇÕES DO DOCUMENTO

| Campo | Detalhes |
|-------|---------|
| **Nome do Projeto** | BStack Demo - Testes E-commerce |
| **Documento** | Software Test Design (STD) |
| **Versão** | 1.0 |
| **Preparado Por** | Maria Silva - Product Owner |
| **Revisado Por** | João Santos, Ana Costa, Pedro Oliveira |
| **Data de Criação** | 05 de Novembro de 2025 |
| **Última Atualização** | 05 de Novembro de 2025 |
| **Documento Relacionado** | Software Test Plan (STP) v1.0 |

---

## 📖 2. INTRODUÇÃO

### 2.1 Objetivo do Documento

Este documento detalha o design dos testes para a plataforma BStack Demo, incluindo:
- Especificação detalhada de casos de teste
- Técnicas de teste aplicadas
- Dados de teste necessários
- Condições de pré e pós-teste
- Matriz de rastreabilidade

### 2.2 Público-Alvo

- Time de QA (executores dos testes)
- Product Owner
- Desenvolvedores (para entendimento dos cenários)
- Stakeholders (para visibilidade da cobertura)

### 2.3 Escopo

Este STD cobre o design de testes para:
- ✅ Módulo de Autenticação
- ✅ Módulo de Catálogo de Produtos
- ✅ Módulo de Carrinho de Compras
- ✅ Módulo de Checkout
- ✅ Testes Cross-browser
- ✅ Testes de Responsividade

---

## 🎯 3. TÉCNICAS DE TESTE APLICADAS

### 3.1 Técnicas de Caixa Preta

| Técnica | Aplicação | Módulos |
|---------|-----------|---------|
| **Particionamento de Equivalência** | Agrupar dados de entrada em classes válidas e inválidas | Autenticação, Checkout |
| **Análise de Valor Limite** | Testar limites de campos numéricos e textos | Carrinho, Filtros |
| **Tabela de Decisão** | Combinar múltiplas condições | Filtros, Checkout |
| **Testes Baseados em Estado** | Validar transições de estado | Carrinho, Sessão |
| **Testes de Caso de Uso** | Validar fluxos completos do usuário | Todos os módulos |

### 3.2 Técnicas de Caixa Branca

> 💡 **Nota**: Como não temos acesso ao código-fonte, focaremos em técnicas de caixa preta e testes exploratórios.

### 3.3 Testes Exploratórios

- Sessões estruturadas de 60-90 minutos
- Foco em encontrar bugs não cobertos pelos casos formais
- Documentação de descobertas em tempo real

---

## 📊 4. MATRIZ DE RASTREABILIDADE

### 4.1 Requisitos vs Casos de Teste

| ID Requisito | Descrição | Casos de Teste | Prioridade |
|--------------|-----------|----------------|------------|
| **REQ-001** | Login de usuário | TC001, TC002, TC003, TC004 | 🔴 Alta |
| **REQ-002** | Logout de usuário | TC005, TC006 | 🔴 Alta |
| **REQ-003** | Filtrar produtos por marca | TC007, TC008, TC009 | 🟡 Média |
| **REQ-004** | Filtrar produtos por preço | TC010, TC011 | 🟡 Média |
| **REQ-005** | Ordenar produtos | TC012, TC013, TC014 | 🟡 Média |
| **REQ-006** | Adicionar produto ao carrinho | TC015, TC016, TC017 | 🔴 Alta |
| **REQ-007** | Remover produto do carrinho | TC018, TC019 | 🔴 Alta |
| **REQ-008** | Atualizar quantidade no carrinho | TC020, TC021, TC022 | 🔴 Alta |
| **REQ-009** | Calcular total do carrinho | TC023, TC024 | 🔴 Alta |
| **REQ-010** | Processo de checkout | TC025, TC026, TC027, TC028 | 🔴 Alta |
| **REQ-011** | Validação de formulário | TC029, TC030, TC031 | 🔴 Alta |
| **REQ-012** | Responsividade mobile | TC032, TC033, TC034 | 🟡 Média |
| **REQ-013** | Compatibilidade cross-browser | TC035, TC036, TC037, TC038 | 🔴 Alta |

---

## 🔐 5. MÓDULO DE AUTENTICAÇÃO

### 5.1 Casos de Teste - Login

---

#### **TC001 - Login com Credenciais Válidas**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC001 |
| **Título** | Login com credenciais válidas |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | João Santos |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Aplicação acessível
- Usuário não está logado
- Navegador limpo (sem cache/cookies de sessões anteriores)

**Dados de Teste:**
- Usuário: `demouser`
- Senha: `testingisfun99`

**Passos:**
1. Acessar `https://bstackdemo.com`
2. Verificar que a página inicial carregou corretamente
3. Localizar e clicar no botão "Sign In" no topo da página
4. Aguardar modal de login aparecer
5. No campo "Select Username", selecionar `demouser`
6. No campo "Select Password", selecionar `testingisfun99`
7. Clicar no botão "Log In"
8. Aguardar processamento

**Resultado Esperado:**
- ✅ Modal de login fecha automaticamente
- ✅ Usuário é redirecionado/permanece na página inicial
- ✅ Nome "demouser" aparece no canto superior direito
- ✅ Botão "Sign In" é substituído por "Logout"
- ✅ Ícone de usuário logado é exibido
- ✅ Não há mensagens de erro
- ✅ Transição é suave (sem erros de console)

**Pós-condições:**
- Usuário permanece logado
- Sessão ativa mantida durante navegação

**Critérios de Aprovação:**
- Todos os resultados esperados devem ser atendidos
- Tempo de resposta inferior a 3 segundos

---

#### **TC002 - Login com Usuário Inválido**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC002 |
| **Título** | Login com usuário inválido |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | João Santos |
| **Estimativa** | 2 minutos |

**Pré-condições:**
- Aplicação acessível
- Usuário não está logado

**Dados de Teste:**
- Usuário: `invalid_user` (ou qualquer usuário não listado)
- Senha: `testingisfun99`

**Passos:**
1. Acessar `https://bstackdemo.com`
2. Clicar no botão "Sign In"
3. Tentar selecionar/digitar usuário inválido
4. Observar comportamento do sistema

**Resultado Esperado:**
- ✅ Sistema não permite seleção de usuário inválido (dropdown limitado)
- ✅ Ou exibe mensagem de erro apropriada
- ✅ Login não é concluído
- ✅ Usuário permanece na tela de login

**Pós-condições:**
- Usuário continua deslogado

---

#### **TC003 - Login com Senha Inválida**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC003 |
| **Título** | Login com senha inválida |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | João Santos |
| **Estimativa** | 2 minutos |

**Pré-condições:**
- Aplicação acessível
- Usuário não está logado

**Dados de Teste:**
- Usuário: `demouser`
- Senha: Senha inválida (ou qualquer senha não listada)

**Passos:**
1. Acessar `https://bstackdemo.com`
2. Clicar no botão "Sign In"
3. Selecionar usuário válido `demouser`
4. Tentar selecionar/digitar senha inválida
5. Tentar fazer login

**Resultado Esperado:**
- ✅ Sistema não permite seleção de senha inválida (dropdown limitado)
- ✅ Ou exibe mensagem de erro apropriada
- ✅ Login não é concluído

---

#### **TC004 - Login com Campos Vazios**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC004 |
| **Título** | Tentativa de login com campos vazios |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | João Santos |
| **Estimativa** | 2 minutos |

**Pré-condições:**
- Aplicação acessível
- Modal de login aberto

**Dados de Teste:**
- Usuário: (vazio)
- Senha: (vazio)

**Passos:**
1. Acessar `https://bstackdemo.com`
2. Clicar em "Sign In"
3. Deixar ambos os campos vazios
4. Tentar clicar em "Log In"

**Resultado Esperado:**
- ✅ Botão "Log In" desabilitado, OU
- ✅ Mensagem de validação exibida
- ✅ Login não é processado
- ✅ Campos obrigatórios destacados

---

### 5.2 Casos de Teste - Logout

---

#### **TC005 - Logout do Sistema**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC005 |
| **Título** | Logout com sucesso |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso |
| **Responsável** | João Santos |
| **Estimativa** | 2 minutos |

**Pré-condições:**
- Usuário logado no sistema

**Passos:**
1. Com usuário logado, localizar botão "Logout"
2. Clicar em "Logout"
3. Observar comportamento da aplicação

**Resultado Esperado:**
- ✅ Usuário é deslogado imediatamente
- ✅ Botão "Logout" é substituído por "Sign In"
- ✅ Nome do usuário desaparece do cabeçalho
- ✅ Permanece na mesma página ou é redirecionado à home
- ✅ Sessão é encerrada

**Pós-condições:**
- Usuário deslogado
- Não é possível acessar funcionalidades restritas

---

#### **TC006 - Persistência de Logout**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC006 |
| **Título** | Validar que logout persiste após navegação |
| **Módulo** | Autenticação |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Testes Baseados em Estado |
| **Responsável** | João Santos |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Usuário logado no sistema

**Passos:**
1. Fazer logout do sistema (TC005)
2. Navegar para diferentes páginas da aplicação
3. Tentar acessar carrinho ou fazer checkout
4. Atualizar a página (F5)

**Resultado Esperado:**
- ✅ Usuário permanece deslogado em todas as páginas
- ✅ Não consegue acessar funcionalidades restritas
- ✅ É solicitado login ao tentar ações que requerem autenticação
- ✅ Após refresh, continua deslogado

---

## 🛍️ 6. MÓDULO DE CATÁLOGO DE PRODUTOS

### 6.1 Casos de Teste - Filtros

---

#### **TC007 - Filtrar Produtos por Marca (Apple)**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC007 |
| **Título** | Aplicar filtro de marca Apple |
| **Módulo** | Catálogo de Produtos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | João Santos |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Aplicação acessível
- Página inicial carregada com todos os produtos visíveis

**Dados de Teste:**
- Marca a filtrar: Apple

**Passos:**
1. Acessar `https://bstackdemo.com`
2. Observar quantidade total de produtos exibidos
3. Localizar seção de filtros na lateral esquerda
4. Localizar filtro "Vendor" ou "Brand"
5. Clicar na checkbox/opção "Apple"
6. Aguardar atualização da lista de produtos
7. Verificar produtos exibidos

**Resultado Esperado:**
- ✅ Lista de produtos é atualizada automaticamente
- ✅ Apenas produtos da marca Apple são exibidos
- ✅ Filtro "Apple" aparece como selecionado/ativo
- ✅ Contador de produtos é atualizado (ex: "Showing X products")
- ✅ Todos os produtos exibidos têm "Apple" visível no card
- ✅ Não há produtos de outras marcas
- ✅ Layout permanece consistente

**Pós-condições:**
- Filtro permanece ativo durante navegação na página

---

#### **TC008 - Filtrar Produtos por Múltiplas Marcas**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC008 |
| **Título** | Aplicar filtros de múltiplas marcas simultaneamente |
| **Módulo** | Catálogo de Produtos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Tabela de Decisão |
| **Responsável** | João Santos |
| **Estimativa** | 4 minutos |

**Pré-condições:**
- Página inicial carregada

**Dados de Teste:**
- Marcas: Apple + Samsung

**Passos:**
1. Acessar página inicial
2. Selecionar filtro "Apple"
3. Verificar produtos exibidos
4. Adicionar filtro "Samsung"
5. Verificar produtos exibidos

**Resultado Esperado:**
- ✅ Produtos de Apple E Samsung são exibidos
- ✅ Ambos os filtros aparecem como ativos
- ✅ Contador de produtos reflete a soma
- ✅ Não aparecem produtos de outras marcas

---

#### **TC009 - Remover Filtro de Marca**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC009 |
| **Título** | Desmarcar filtro aplicado |
| **Módulo** | Catálogo de Produtos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso |
| **Responsável** | João Santos |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Filtro de marca já aplicado (ex: Apple)

**Passos:**
1. Com filtro "Apple" ativo
2. Clicar novamente na checkbox "Apple" para desmarcar
3. Observar atualização da lista

**Resultado Esperado:**
- ✅ Filtro é removido
- ✅ Todos os produtos voltam a ser exibidos
- ✅ Contador retorna ao total original
- ✅ Checkbox aparece desmarcada

---

### 6.2 Casos de Teste - Ordenação

---

#### **TC012 - Ordenar por Menor Preço**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC012 |
| **Título** | Ordenar produtos do menor para o maior preço |
| **Módulo** | Catálogo de Produtos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | João Santos |
| **Estimativa** | 4 minutos |

**Pré-condições:**
- Página inicial carregada com produtos

**Passos:**
1. Acessar página inicial
2. Localizar dropdown/seletor de ordenação
3. Selecionar opção "Lowest to highest" ou similar
4. Aguardar reordenação
5. Verificar ordem dos preços

**Resultado Esperado:**
- ✅ Produtos são reordenados
- ✅ Primeiro produto tem o menor preço
- ✅ Último produto tem o maior preço
- ✅ Ordem crescente é mantida
- ✅ Preços são comparados corretamente

**Validação:**
- Anotar preço do 1º produto
- Anotar preço do 2º produto
- Confirmar que preço 1º ≤ preço 2º

---

## 🛒 7. MÓDULO DE CARRINHO DE COMPRAS

### 7.1 Casos de Teste - Adicionar Produtos

---

#### **TC015 - Adicionar Produto ao Carrinho (Fluxo Completo)**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC015 |
| **Título** | Adicionar produto ao carrinho com sucesso |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso |
| **Responsável** | Ana Costa |
| **Estimativa** | 4 minutos |

**Pré-condições:**
- Usuário logado
- Carrinho vazio (ou anotar quantidade inicial)
- Produto disponível

**Dados de Teste:**
- Produto: iPhone 12 (ou qualquer produto disponível)

**Passos:**
1. Fazer login no sistema
2. Na página inicial, localizar produto "iPhone 12"
3. Anotar preço do produto
4. Anotar contador atual do carrinho (canto superior direito)
5. Clicar no card do produto ou botão "Add to cart"
6. Aguardar confirmação visual
7. Verificar ícone do carrinho
8. Clicar no ícone do carrinho
9. Verificar conteúdo do carrinho

**Resultado Esperado:**
- ✅ Feedback visual de confirmação (toast, animação, etc)
- ✅ Contador do carrinho incrementa em +1
- ✅ Produto aparece na lista do carrinho
- ✅ Nome do produto correto
- ✅ Preço do produto correto
- ✅ Quantidade inicial = 1
- ✅ Imagem do produto exibida
- ✅ Subtotal calculado corretamente (preço × quantidade)

**Pós-condições:**
- Produto permanece no carrinho durante navegação

---

#### **TC016 - Adicionar Múltiplos Produtos Diferentes**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC016 |
| **Título** | Adicionar vários produtos diferentes ao carrinho |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso |
| **Responsável** | Ana Costa |
| **Estimativa** | 6 minutos |

**Pré-condições:**
- Usuário logado
- Carrinho vazio

**Dados de Teste:**
- Produto 1: iPhone 12
- Produto 2: Galaxy S20
- Produto 3: Google Pixel 7

**Passos:**
1. Adicionar iPhone 12 ao carrinho
2. Verificar contador (deve ser 1)
3. Voltar à página inicial
4. Adicionar Galaxy S20 ao carrinho
5. Verificar contador (deve ser 2)
6. Adicionar Google Pixel 7
7. Verificar contador (deve ser 3)
8. Abrir carrinho e verificar conteúdo

**Resultado Esperado:**
- ✅ Contador do carrinho = 3
- ✅ Três produtos distintos listados no carrinho
- ✅ Cada produto com nome correto
- ✅ Cada produto com preço correto
- ✅ Cada produto com quantidade = 1
- ✅ Subtotal de cada produto correto
- ✅ Total geral = soma de todos os subtotais

---

#### **TC017 - Adicionar Mesmo Produto Múltiplas Vezes**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC017 |
| **Título** | Adicionar o mesmo produto várias vezes |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Pré-condições:**
- Usuário logado
- Carrinho vazio

**Dados de Teste:**
- Produto: iPhone 12 (adicionar 3 vezes)

**Passos:**
1. Adicionar iPhone 12 ao carrinho (1ª vez)
2. Voltar à página inicial
3. Adicionar iPhone 12 ao carrinho (2ª vez)
4. Voltar à página inicial
5. Adicionar iPhone 12 ao carrinho (3ª vez)
6. Abrir carrinho

**Resultado Esperado:**
**Cenário A (Quantidade incrementa):**
- ✅ Apenas 1 item no carrinho
- ✅ Quantidade = 3
- ✅ Subtotal = preço × 3

**Cenário B (Itens separados):**
- ✅ 3 itens no carrinho
- ✅ Cada um com quantidade = 1
- ✅ Total = preço × 3

> 📝 **Nota**: Documentar qual comportamento o sistema apresenta

---

### 7.2 Casos de Teste - Remover Produtos

---

#### **TC018 - Remover Produto do Carrinho**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC018 |
| **Título** | Remover produto do carrinho |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso |
| **Responsável** | Ana Costa |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Carrinho com pelo menos 1 produto

**Passos:**
1. Abrir carrinho
2. Anotar quantidade de itens
3. Localizar botão/ícone de remover (X, lixeira, "Remove")
4. Clicar para remover o produto
5. Observar atualização do carrinho

**Resultado Esperado:**
- ✅ Produto é removido da lista
- ✅ Contador do carrinho decrementa
- ✅ Total é recalculado
- ✅ Animação de remoção (se houver)
- ✅ Se era o único produto, mensagem de carrinho vazio

---

### 7.3 Casos de Teste - Atualizar Quantidade

---

#### **TC020 - Aumentar Quantidade de Produto**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC020 |
| **Título** | Aumentar quantidade de produto no carrinho |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Carrinho com 1 produto (quantidade = 1)

**Dados de Teste:**
- Produto: iPhone 12 (preço: $1299)
- Quantidade inicial: 1
- Nova quantidade: 3

**Passos:**
1. Abrir carrinho
2. Localizar campo de quantidade ou botões +/-
3. Aumentar quantidade para 3
4. Aguardar atualização

**Resultado Esperado:**
- ✅ Quantidade atualiza para 3
- ✅ Subtotal recalculado: $1299 × 3 = $3897
- ✅ Total geral atualizado
- ✅ Contador do carrinho reflete nova quantidade (ou permanece como número de itens distintos)

---

#### **TC021 - Diminuir Quantidade de Produto**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC021 |
| **Título** | Diminuir quantidade de produto no carrinho |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Produto no carrinho com quantidade > 1

**Dados de Teste:**
- Quantidade inicial: 3
- Nova quantidade: 1

**Passos:**
1. Com produto de quantidade 3
2. Diminuir para 1
3. Verificar atualização

**Resultado Esperado:**
- ✅ Quantidade = 1
- ✅ Subtotal recalculado corretamente
- ✅ Total atualizado

---

#### **TC022 - Quantidade Zero ou Negativa**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC022 |
| **Título** | Tentar definir quantidade 0 ou negativa |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Produto no carrinho

**Passos:**
1. Tentar definir quantidade = 0
2. Tentar definir quantidade negativa (-1)

**Resultado Esperado:**
- ✅ Sistema não permite quantidade ≤ 0, OU
- ✅ Produto é automaticamente removido ao definir 0
- ✅ Validação impede valores negativos

---

### 7.4 Casos de Teste - Cálculos

---

#### **TC023 - Validar Cálculo de Subtotal**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC023 |
| **Título** | Verificar cálculo correto do subtotal |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Pré-condições:**
- Carrinho vazio

**Dados de Teste:**
- iPhone 12: $1299 × 2 = $2598
- Galaxy S20: $849 × 1 = $849
- Subtotal esperado: $3447

**Passos:**
1. Adicionar iPhone 12, quantidade 2
2. Adicionar Galaxy S20, quantidade 1
3. Abrir carrinho
4. Verificar subtotal de cada produto
5. Verificar total geral

**Resultado Esperado:**
- ✅ Subtotal iPhone 12 = $2598
- ✅ Subtotal Galaxy S20 = $849
- ✅ Total = $3447
- ✅ Todos os cálculos precisos (sem arredondamentos incorretos)

---

#### **TC024 - Validar Cálculo de Total com Múltiplos Produtos**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC024 |
| **Título** | Verificar total com vários produtos e quantidades |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Tabela de Decisão |
| **Responsável** | Ana Costa |
| **Estimativa** | 6 minutos |

**Pré-condições:**
- Carrinho vazio

**Dados de Teste:**
- Produto A: $100 × 2 = $200
- Produto B: $50 × 3 = $150
- Produto C: $75 × 1 = $75
- Total esperado: $425

**Passos:**
1. Adicionar 3 produtos diferentes com quantidades variadas
2. Calcular manualmente o total esperado
3. Verificar total exibido no carrinho
4. Alterar quantidade de um produto
5. Verificar se total é recalculado

**Resultado Esperado:**
- ✅ Total inicial correto
- ✅ Total atualiza automaticamente após mudanças
- ✅ Precisão matemática mantida

---

## 💳 8. MÓDULO DE CHECKOUT

### 8.1 Casos de Teste - Fluxo de Checkout

---

#### **TC025 - Checkout Completo com Sucesso**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC025 |
| **Título** | Realizar checkout completo com dados válidos |
| **Módulo** | Checkout |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Técnica** | Caso de Uso End-to-End |
| **Responsável** | Ana Costa |
| **Estimativa** | 8 minutos |

**Pré-condições:**
- Usuário logado
- Carrinho com pelo menos 1 produto

**Dados de Teste:**
```
First Name: João
Last Name: Silva
Address Line: Rua das Flores, 123
State/Province: São Paulo
Postal Code: 01310-100
```

**Passos:**
1. Com produtos no carrinho, clicar no ícone do carrinho
2. Verificar resumo do carrinho
3. Clicar em "Checkout" ou "Proceed to Checkout"
4. Aguardar carregamento da página de checkout
5. Preencher campo "First Name" com "João"
6. Preencher campo "Last Name" com "Silva"
7. Preencher campo "Address Line" com "Rua das Flores, 123"
8. Selecionar/preencher "State/Province" com "São Paulo"
9. Preencher "Postal Code" com "01310-100"
10. Verificar resumo do pedido na lateral/final
11. Clicar em "Submit" ou "Place Order"
12. Aguardar processamento

**Resultado Esperado:**
- ✅ Todos os campos são preenchidos sem erros
- ✅ Resumo do pedido exibido corretamente
- ✅ Total corresponde ao carrinho
- ✅ Pedido é processado com sucesso
- ✅ Mensagem de confirmação exibida (ex: "Your order has been successfully placed")
- ✅ ID do pedido gerado (se aplicável)
- ✅ Carrinho é esvaziado após confirmação
- ✅ Opção de visualizar detalhes do pedido

**Pós-condições:**
- Pedido registrado no sistema
- Carrinho vazio

---

#### **TC026 - Checkout com Campos Obrigatórios Vazios**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC026 |
| **Título** | Tentar checkout sem preencher campos obrigatórios |
| **Módulo** | Checkout |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Pré-condições:**
- Na página de checkout com produtos no carrinho

**Cenários de Teste:**
1. Todos os campos vazios
2. Apenas First Name vazio
3. Apenas Last Name vazio
4. Apenas Address vazio
5. Apenas State vazio
6. Apenas Postal Code vazio

**Passos (para cada cenário):**
1. Deixar campo(s) específico(s) em branco
2. Preencher os demais campos
3. Tentar submeter o formulário

**Resultado Esperado:**
- ✅ Formulário não é submetido
- ✅ Mensagem de erro exibida para campo(s) vazio(s)
- ✅ Campo obrigatório destacado (borda vermelha, asterisco, etc)
- ✅ Mensagem de erro clara (ex: "First Name is required")
- ✅ Foco retorna ao primeiro campo com erro

---

#### **TC027 - Checkout com Dados Inválidos**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC027 |
| **Título** | Tentar checkout com dados em formato inválido |
| **Módulo** | Checkout |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 6 minutos |

**Pré-condições:**
- Na página de checkout

**Dados Inválidos para Testar:**
- First Name: "123" (números)
- First Name: "A" (muito curto)
- First Name: [String de 200 caracteres] (muito longo)
- Postal Code: "ABC" (letras se só aceita números)
- Postal Code: "123" (formato incompleto)

**Passos:**
1. Para cada dado inválido:
   - Preencher o campo com valor inválido
   - Preencher demais campos corretamente
   - Tentar submeter

**Resultado Esperado:**
- ✅ Validação de formato é aplicada
- ✅ Mensagem de erro específica para cada caso
- ✅ Formulário não é submetido
- ✅ Sugestão de formato correto (se aplicável)

---

#### **TC028 - Acessar Checkout com Carrinho Vazio**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC028 |
| **Título** | Tentar acessar checkout sem produtos no carrinho |
| **Módulo** | Checkout |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Caso de Uso |
| **Responsável** | Ana Costa |
| **Estimativa** | 3 minutos |

**Pré-condições:**
- Carrinho vazio
- Usuário logado

**Passos:**
1. Garantir que carrinho está vazio
2. Tentar acessar URL de checkout diretamente, OU
3. Tentar clicar em "Checkout" com carrinho vazio

**Resultado Esperado:**
- ✅ Botão "Checkout" desabilitado quando carrinho vazio, OU
- ✅ Redirecionamento para página de produtos, OU
- ✅ Mensagem "Cart is empty" exibida
- ✅ Não permite prosseguir com checkout

---

### 8.2 Casos de Teste - Validação de Formulário

---

#### **TC029 - Validação de Caracteres Especiais**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC029 |
| **Título** | Validar comportamento com caracteres especiais |
| **Módulo** | Checkout |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | Ana Costa |
| **Estimativa** | 4 minutos |

**Dados de Teste:**
```
First Name: João@#$%
Last Name: Silva!@#
Address: <script>alert('test')</script>
```

**Passos:**
1. Preencher campos com caracteres especiais
2. Tentar submeter formulário

**Resultado Esperado:**
- ✅ Sistema sanitiza/valida entrada
- ✅ Caracteres especiais são aceitos OU rejeitados com mensagem clara
- ✅ Não há execução de scripts (XSS prevention)
- ✅ Comportamento consistente em todos os campos

---

#### **TC030 - Validação de Limite de Caracteres**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC030 |
| **Título** | Testar limites máximo e mínimo de caracteres |
| **Módulo** | Checkout |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Cenários:**
1. Campo com 1 caractere (valor limite inferior)
2. Campo com 255 caracteres (valor limite superior provável)
3. Campo com 1000 caracteres (além do limite)

**Passos:**
1. Para cada campo, testar com diferentes comprimentos
2. Observar validação e comportamento

**Resultado Esperado:**
- ✅ Limite mínimo respeitado
- ✅ Limite máximo respeitado
- ✅ Mensagem de erro se exceder limite
- ✅ Campo não aceita mais caracteres além do máximo

---

#### **TC031 - Validação de Código Postal**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC031 |
| **Título** | Validar formato de código postal |
| **Módulo** | Checkout |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo/Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Dados de Teste:**
```
Válidos:
- 01310-100
- 01310100
- 12345-678

Inválidos:
- 123 (muito curto)
- ABCDE-FGH (letras)
- 12345-67 (formato incompleto)
```

**Passos:**
1. Testar cada formato de código postal
2. Verificar validação do sistema

**Resultado Esperado:**
- ✅ Formatos válidos são aceitos
- ✅ Formatos inválidos são rejeitados
- ✅ Mensagem de erro específica para formato incorreto

---

## 📱 9. TESTES DE RESPONSIVIDADE

### 9.1 Casos de Teste - Mobile

---

#### **TC032 - Layout Mobile (375x667)**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC032 |
| **Título** | Validar layout e funcionalidades em resolução mobile |
| **Módulo** | Responsividade |
| **Prioridade** | 🟡 Média |
| **Tipo** | UI/UX |
| **Técnica** | Caso de Uso |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 15 minutos |

**Pré-condições:**
- Navegador em modo responsivo (375x667)
- Ou dispositivo mobile real

**Aspectos a Validar:**

**Layout Geral:**
- ✅ Não há scroll horizontal
- ✅ Elementos não quebrados ou sobrepostos
- ✅ Espaçamento adequado entre elementos
- ✅ Menu adaptado (hambúrguer menu se aplicável)
- ✅ Logo visível e proporcional

**Navegação:**
- ✅ Menu mobile funcional
- ✅ Links clicáveis e espaçados
- ✅ Botões com tamanho adequado para toque (min 44x44px)

**Produtos:**
- ✅ Cards de produtos empilhados verticalmente
- ✅ Imagens redimensionadas proporcionalmente
- ✅ Texto legível (mínimo 14px)
- ✅ Botões "Add to cart" acessíveis

**Filtros:**
- ✅ Filtros acessíveis (drawer, accordion, etc)
- ✅ Checkboxes clicáveis facilmente

**Carrinho:**
- ✅ Ícone do carrinho visível
- ✅ Modal/página do carrinho adaptada
- ✅ Produtos listados de forma legível
- ✅ Botões de quantidade utilizáveis

**Checkout:**
- ✅ Formulário adaptado para mobile
- ✅ Campos de input com tamanho adequado
- ✅ Teclado virtual apropriado para cada campo
- ✅ Botões submit acessíveis

**Passos:**
1. Acessar site em resolução 375x667
2. Navegar por todas as páginas
3. Testar todos os fluxos críticos
4. Documentar quebras de layout
5. Capturar screenshots de problemas

**Resultado Esperado:**
- ✅ Layout 100% responsivo
- ✅ Todas as funcionalidades operacionais
- ✅ Experiência de usuário mantida

---

#### **TC033 - Layout Tablet (768x1024)**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC033 |
| **Título** | Validar layout em resolução tablet |
| **Módulo** | Responsividade |
| **Prioridade** | 🟡 Média |
| **Tipo** | UI/UX |
| **Técnica** | Caso de Uso |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 12 minutos |

**Pré-condições:**
- Navegador em resolução 768x1024

**Aspectos a Validar:**
- ✅ Layout intermediário entre mobile e desktop
- ✅ Grid de produtos em 2 ou 3 colunas
- ✅ Menu adaptado para tablet
- ✅ Formulários com largura adequada
- ✅ Espaçamento otimizado

**Passos:**
1. Acessar em resolução tablet
2. Testar fluxos principais
3. Verificar orientação portrait e landscape
4. Documentar inconsistências

---

#### **TC034 - Rotação de Tela (Portrait/Landscape)**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC034 |
| **Título** | Validar comportamento ao rotacionar tela |
| **Módulo** | Responsividade |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | UI/UX |
| **Técnica** | Caso de Uso |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 8 minutos |

**Pré-condições:**
- Dispositivo mobile ou emulador

**Passos:**
1. Acessar site em modo portrait
2. Navegar até página de produtos
3. Rotacionar para landscape
4. Verificar adaptação do layout
5. Adicionar produto ao carrinho
6. Rotacionar novamente
7. Verificar persistência de estado

**Resultado Esperado:**
- ✅ Layout se adapta automaticamente
- ✅ Estado da aplicação é mantido
- ✅ Sem perda de dados
- ✅ Sem quebras visuais

---

## 🌐 10. TESTES CROSS-BROWSER

### 10.1 Casos de Teste - Compatibilidade

---

#### **TC035 - Compatibilidade Chrome**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC035 |
| **Título** | Validar funcionamento completo no Google Chrome |
| **Módulo** | Compatibilidade |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Compatibilidade |
| **Técnica** | Smoke Test |
| **Responsável** | João Santos |
| **Estimativa** | 20 minutos |

**Pré-condições:**
- Chrome versão mais recente instalado
- Extensões desabilitadas (ou modo anônimo)

**Checklist de Validação:**
- ✅ Página carrega corretamente
- ✅ CSS aplicado sem problemas
- ✅ Imagens carregam
- ✅ Fontes renderizam corretamente
- ✅ Login funciona
- ✅ Filtros funcionam
- ✅ Adicionar ao carrinho funciona
- ✅ Checkout funciona
- ✅ Nenhum erro no console
- ✅ Performance aceitável

**Passos:**
1. Abrir Chrome
2. Acessar https://bstackdemo.com
3. Executar fluxo completo: Login → Filtrar → Adicionar ao Carrinho → Checkout
4. Verificar console (F12) para erros JavaScript
5. Documentar qualquer anomalia

---

#### **TC036 - Compatibilidade Firefox**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC036 |
| **Título** | Validar funcionamento completo no Mozilla Firefox |
| **Módulo** | Compatibilidade |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Compatibilidade |
| **Técnica** | Smoke Test |
| **Responsável** | João Santos |
| **Estimativa** | 20 minutos |

**Pré-condições:**
- Firefox versão mais recente

**Checklist:** (Mesma do TC035)

**Atenção Especial:**
- ✅ Renderização de CSS Flexbox/Grid
- ✅ Eventos de JavaScript
- ✅ Compatibilidade de fontes
- ✅ Scroll behavior

---

#### **TC037 - Compatibilidade Safari**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC037 |
| **Título** | Validar funcionamento completo no Safari |
| **Módulo** | Compatibilidade |
| **Prioridade** | 🟡 Média |
| **Tipo** | Compatibilidade |
| **Técnica** | Smoke Test |
| **Responsável** | Ana Costa |
| **Estimativa** | 20 minutos |

**Pré-condições:**
- Safari (macOS ou iOS)

**Atenção Especial (Safari tem particularidades):**
- ✅ Date pickers
- ✅ Input autofill
- ✅ Smooth scrolling
- ✅ CSS transformations
- ✅ Webkit-specific properties

---

#### **TC038 - Compatibilidade Edge**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC038 |
| **Título** | Validar funcionamento completo no Microsoft Edge |
| **Módulo** | Compatibilidade |
| **Prioridade** | 🟡 Média |
| **Tipo** | Compatibilidade |
| **Técnica** | Smoke Test |
| **Responsável** | Ana Costa |
| **Estimativa** | 20 minutos |

**Pré-condições:**
- Edge versão mais recente (Chromium-based)

**Checklist:** (Similar ao Chrome, mas validar especificidades do Edge)

---

## ⚡ 11. TESTES DE PERFORMANCE

### 11.1 Casos de Teste - Performance Básica

---

#### **TC039 - Tempo de Carregamento da Página Inicial**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC039 |
| **Título** | Medir tempo de carregamento da home |
| **Módulo** | Performance |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Performance |
| **Técnica** | Medição |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 10 minutos |

**Ferramentas:**
- Chrome DevTools (Network tab)
- Lighthouse
- PageSpeed Insights

**Métricas a Medir:**
- ✅ First Contentful Paint (FCP)
- ✅ Largest Contentful Paint (LCP)
- ✅ Time to Interactive (TTI)
- ✅ Total Blocking Time (TBT)
- ✅ Cumulative Layout Shift (CLS)

**Critérios de Aceitação:**
- LCP < 2.5s (Bom)
- FCP < 1.8s (Bom)
- CLS < 0.1 (Bom)

**Passos:**
1. Limpar cache do navegador
2. Abrir DevTools → Network
3. Acessar https://bstackdemo.com
4. Documentar tempo de carregamento
5. Executar Lighthouse audit
6. Repetir 3 vezes e calcular média

---

#### **TC040 - Performance do Filtro de Produtos**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC040 |
| **Título** | Medir tempo de resposta ao aplicar filtros |
| **Módulo** | Performance |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Performance |
| **Técnica** | Medição |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 8 minutos |

**Passos:**
1. Carregar página inicial
2. Cronometrar tempo ao aplicar filtro
3. Medir com Performance API do browser
4. Documentar tempo de resposta

**Resultado Esperado:**
- ✅ Filtro responde em < 500ms
- ✅ UI não congela
- ✅ Feedback visual de carregamento (se > 300ms)

---

## 🔍 12. TESTES EXPLORATÓRIOS

### 12.1 Sessões de Teste Exploratório

---

#### **TE001 - Sessão Exploratória: Fluxo de Compra**

| Campo | Detalhes |
|-------|----------|
| **ID** | TE001 |
| **Título** | Exploração livre do fluxo de compra |
| **Módulo** | Todos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Exploratório |
| **Responsável** | Todos (em rodízio) |
| **Duração** | 60 minutos |

**Charter (Objetivo da Sessão):**
"Explorar o fluxo completo de compra tentando encontrar bugs, inconsistências e problemas de usabilidade não cobertos pelos casos de teste formais."

**Áreas de Foco:**
- Interações não óbvias
- Sequências de ações incomuns
- Edge cases
- Problemas de usabilidade
- Mensagens de erro
- Comportamentos inesperados

**Técnicas a Aplicar:**
- ✅ Testar ações na ordem "errada"
- ✅ Clicar rapidamente múltiplas vezes
- ✅ Voltar/avançar no navegador
- ✅ Refresh em momentos críticos
- ✅ Abrir múltiplas abas
- ✅ Testar com internet lenta (throttling)

**Documentação:**
Para cada bug encontrado:
1. Anotar o que estava tentando fazer
2. Passos para reproduzir
3. Screenshot/vídeo
4. Severidade estimada

---

#### **TE002 - Sessão Exploratória: Usuários Especiais**

| Campo | Detalhes |
|-------|----------|
| **ID** | TE002 |
| **Título** | Explorar comportamentos dos usuários especiais |
| **Duração** | 45 minutos |

**Charter:**
"Investigar os diferentes usuários disponíveis (`demouser`, `fav_user`, `image_not_loading_user`, `existing_orders_user`) e documentar diferenças de comportamento."

**Hipóteses a Testar:**
- `image_not_loading_user` → Imagens não carregam?
- `existing_orders_user` → Tem histórico de pedidos?
- `fav_user` → Tem favoritos salvos?

**Ações:**
1. Fazer login com cada usuário
2. Navegar pela aplicação
3. Documentar diferenças
4. Identificar se há bugs específicos por usuário

---

## 📋 13. DADOS DE TESTE

### 13.1 Credenciais

```
Usuário 1: demouser / testingisfun99
Usuário 2: fav_user / testingisfun99
Usuário 3: image_not_loading_user / testingisfun99
Usuário 4: existing_orders_user / testingisfun99
```

### 13.2 Dados de Checkout

```
Conjunto 1 (Válido):
First Name: João
Last Name: Silva
Address: Rua das Flores, 123
State: São Paulo
Postal Code: 01310-100

Conjunto 2 (Válido):
First Name: Maria
Last Name: Santos
Address: Av. Paulista, 1000
State: São Paulo
Postal Code: 01310-200

Conjunto 3 (Válido - Caracteres Especiais):
First Name: José
Last Name: Müller
Address: Rua José d'Ávila, 50
State: Rio Grande do Sul
Postal Code: 90000-000
```

### 13.3 Dados Inválidos (Para Testes Negativos)

```
Nome muito curto: "A"
Nome muito longo: [string de 300 caracteres]
Nome com números: "João123"
Nome com caracteres especiais: "João@#$"
CEP inválido: "ABC"
CEP incompleto: "123"
Endereço vazio: ""
```

---

## 📊 14. MATRIZ DE COBERTURA

### 14.1 Cobertura por Módulo

| Módulo | Total de Casos | Alta Prioridade | Média | Baixa | Cobertura |
|--------|----------------|-----------------|-------|-------|-----------|
| Autenticação | 6 | 4 | 2 | 0 | 100% |
| Catálogo | 8 | 2 | 6 | 0 | 90% |
| Carrinho | 10 | 6 | 3 | 1 | 95% |
| Checkout | 7 | 4 | 2 | 1 | 100% |
| Responsividade | 3 | 0 | 3 | 0 | 80% |
| Cross-browser | 4 | 2 | 2 | 0 | 100% |
| Performance | 2 | 0 | 0 | 2 | 60% |
| **TOTAL** | **40** | **18** | **18** | **4** | **90%** |

### 14.2 Cobertura por Tipo de Teste

| Tipo | Quantidade | Percentual |
|------|------------|------------|
| Funcional Positivo | 22 | 55% |
| Funcional Negativo | 12 | 30% |
| UI/UX | 3 | 7.5% |
| Compatibilidade | 4 | 10% |
| Performance | 2 | 5% |
| Exploratório | 2 | 5% |

---

## 🎯 15. CRITÉRIOS DE APROVAÇÃO

### 15.1 Por Caso de Teste

Um caso de teste é considerado **APROVADO** quando:
- ✅ Todos os resultados esperados são atendidos
- ✅ Nenhum bug crítico ou bloqueador é encontrado
- ✅ Comportamento está conforme especificação

Um caso de teste é considerado **REPROVADO** quando:
- ❌ Qualquer resultado esperado não é atendido
- ❌ Bug crítico/bloqueador é encontrado
- ❌ Funcionalidade não está operacional

Um caso de teste pode ser **BLOQUEADO** quando:
- ⏸️ Depende de outro caso que falhou
- ⏸️ Ambiente indisponível
- ⏸️ Dados de teste não disponíveis

### 15.2 Por Módulo

Um módulo é considerado **APROVADO** quando:
- ✅ 100% dos casos de teste de alta prioridade aprovados
- ✅ ≥ 90% de todos os casos de teste aprovados
- ✅ Nenhum bug crítico em aberto

---

## 📝 16. TEMPLATE DE EXECUÇÃO

### 16.1 Como Executar os Casos de Teste

Para cada caso de teste:

1. **Preparação:**
   - Ler o caso de teste completo
   - Verificar pré-condições
   - Preparar dados de teste
   - Configurar ambiente (navegador, resolução, etc)

2. **Execução:**
   - Seguir passos EXATAMENTE como descritos
   - Anotar qualquer desvio
   - Capturar evidências (screenshots/vídeos)
   - Registrar tempo de execução

3. **Validação:**
   - Comparar resultado obtido com resultado esperado
   - Verificar TODOS os pontos de validação
   - Documentar discrepâncias

4. **Documentação:**
   - Atualizar status na planilha de testes
   - Se APROVADO: Anexar evidência de sucesso
   - Se REPROVADO: Criar bug report detalhado
   - Anotar observações relevantes

---

## 📸 17. EVIDÊNCIAS DE TESTE

### 17.1 Tipos de Evidências Necessárias

**Para Casos APROVADOS:**
- ✅ Screenshot do resultado final esperado
- ✅ Screenshot de telas intermediárias importantes
- ✅ Registro de timestamp

**Para Casos REPROVADOS:**
- ❌ Screenshots de TODAS as etapas
- ❌ Screenshot do erro/bug encontrado
- ❌ Console do navegador (se houver erros JavaScript)
- ❌ Vídeo da reprodução (para bugs complexos)
- ❌ Informações de ambiente (browser, versão, SO)

### 17.2 Nomenclatura de Arquivos

Padrão sugerido:
```
TC001_Login_Valido_PASS_2025-11-05.png
TC002_Login_Invalido_PASS_2025-11-05.png
TC015_Add_Carrinho_FAIL_2025-11-05.png
BUG-001_Calculo_Total_Incorreto_2025-11-05.mp4
```

### 17.3 Organização de Evidências

Estrutura de pastas sugerida:
```
Evidencias_BStackDemo/
├── Autenticacao/
│   ├── TC001_PASS/
│   ├── TC002_PASS/
│   └── TC003_FAIL/
├── Catalogo/
│   ├── TC007_PASS/
│   └── TC008_PASS/
├── Carrinho/
│   ├── TC015_PASS/
│   └── TC016_FAIL/
├── Checkout/
│   └── TC025_PASS/
├── Bugs/
│   ├── BUG-001/
│   └── BUG-002/
└── Relatorios/
    ├── Relatorio_Semanal_1.pdf
    └── Relatorio_Final.pdf
```

---

## 🐛 18. TEMPLATE DE BUG REPORT

### 18.1 Estrutura de Bug Report

```markdown
# BUG-XXX: [Título Descritivo do Bug]

## Informações Gerais
- **ID**: BUG-XXX
- **Reportado por**: [Nome do QA]
- **Data**: DD/MM/YYYY
- **Módulo**: [Autenticação/Catálogo/Carrinho/Checkout/Outro]
- **Severidade**: [Crítica/Alta/Média/Baixa]
- **Prioridade**: [P1/P2/P3/P4]
- **Status**: [Novo/Em Análise/Em Correção/Resolvido/Reaberto]

## Ambiente
- **URL**: https://bstackdemo.com
- **Navegador**: Chrome 120.0.6099.109
- **Sistema Operacional**: Windows 11
- **Resolução**: 1920x1080
- **Usuário de Teste**: demouser

## Descrição
[Descrição clara e objetiva do problema encontrado]

## Passos para Reproduzir
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]
...

## Resultado Esperado
[O que deveria acontecer]

## Resultado Obtido
[O que realmente aconteceu]

## Evidências
- Screenshot 1: [arquivo.png]
- Screenshot 2: [arquivo.png]
- Vídeo: [arquivo.mp4]
- Console Log: [texto ou arquivo]

## Impacto
[Descrição do impacto no usuário/negócio]

## Frequência
[Sempre | Às vezes | Raramente]

## Workaround
[Existe alguma forma alternativa de contornar o problema? Se sim, descrever]

## Observações Adicionais
[Qualquer informação relevante adicional]

## Relacionado a
- Caso de Teste: TC-XXX
- Requisito: REQ-XXX
- Outros Bugs: BUG-YYY
```

### 18.2 Exemplo de Bug Report Completo

```markdown
# BUG-001: Total do Carrinho Calculado Incorretamente com Múltiplos Produtos

## Informações Gerais
- **ID**: BUG-001
- **Reportado por**: Ana Costa
- **Data**: 12/11/2025
- **Módulo**: Carrinho de Compras
- **Severidade**: Alta
- **Prioridade**: P1
- **Status**: Novo

## Ambiente
- **URL**: https://bstackdemo.com
- **Navegador**: Chrome 120.0.6099.109
- **Sistema Operacional**: Windows 11
- **Resolução**: 1920x1080
- **Usuário de Teste**: demouser

## Descrição
Ao adicionar múltiplos produtos ao carrinho com diferentes quantidades, 
o total geral não está sendo calculado corretamente. O sistema está 
somando apenas o primeiro produto.

## Passos para Reproduzir
1. Fazer login com usuário "demouser"
2. Adicionar iPhone 12 ao carrinho (preço: $1299)
3. Definir quantidade: 2
4. Adicionar Galaxy S20 ao carrinho (preço: $849)
5. Definir quantidade: 1
6. Abrir carrinho
7. Verificar total exibido

## Resultado Esperado
- Subtotal iPhone 12: $1299 × 2 = $2598
- Subtotal Galaxy S20: $849 × 1 = $849
- **Total Esperado: $3447**

## Resultado Obtido
- Subtotal iPhone 12: $2598 ✓ (correto)
- Subtotal Galaxy S20: $849 ✓ (correto)
- **Total Exibido: $2598** ❌ (incorreto - mostra apenas primeiro produto)

## Evidências
- Screenshot 1: carrinho_com_produtos.png
- Screenshot 2: total_incorreto.png
- Console Log: Nenhum erro no console

## Impacto
**ALTO** - Usuário pode finalizar compra pagando valor incorreto, 
causando perda financeira ou insatisfação do cliente.

## Frequência
Sempre - Reproduzido em 5 de 5 tentativas

## Workaround
Adicionar apenas um produto por vez ao carrinho.

## Observações Adicionais
- Bug ocorre apenas com 2 ou mais produtos DIFERENTES
- Adicionar o mesmo produto múltiplas vezes funciona corretamente
- Bug reproduzido também no Firefox 121

## Relacionado a
- Caso de Teste: TC024
- Requisito: REQ-009
```

---

## 📈 19. MÉTRICAS DE TESTE

### 19.1 Métricas a Serem Coletadas

#### Durante a Execução:
- **Casos Planejados**: Total de casos de teste criados
- **Casos Executados**: Casos já executados
- **Casos Aprovados**: Casos que passaram
- **Casos Reprovados**: Casos que falharam
- **Casos Bloqueados**: Casos que não puderam ser executados
- **Bugs Encontrados**: Total de bugs identificados
- **Bugs por Severidade**: Críticos, Altos, Médios, Baixos
- **Taxa de Execução**: (Executados / Planejados) × 100
- **Taxa de Aprovação**: (Aprovados / Executados) × 100

#### Ao Final:
- **Cobertura de Testes**: Requisitos cobertos / Total de requisitos
- **Densidade de Defeitos**: Bugs / Casos de Teste
- **Efetividade de Testes**: Bugs encontrados em testes / Total de bugs
- **Tempo Médio de Execução**: Tempo total / Casos executados

### 19.2 Dashboard de Acompanhamento

```
╔════════════════════════════════════════════════════╗
║       DASHBOARD DE TESTES - BSTACK DEMO           ║
║                  Semana 1/4                        ║
╠════════════════════════════════════════════════════╣
║ Casos de Teste                                     ║
║ ├─ Total Planejado:        40                      ║
║ ├─ Executados:            20  (50%)               ║
║ ├─ Aprovados:             18  (90%)               ║
║ ├─ Reprovados:             2  (10%)               ║
║ └─ Bloqueados:             0  (0%)                ║
╠════════════════════════════════════════════════════╣
║ Bugs Encontrados                                   ║
║ ├─ 🔴 Críticos:             0                      ║
║ ├─ 🟠 Altos:                2                      ║
║ ├─ 🟡 Médios:               3                      ║
║ └─ 🟢 Baixos:               1                      ║
║ Total de Bugs:              6                      ║
╠════════════════════════════════════════════════════╣
║ Progresso por Módulo                               ║
║ ├─ Autenticação:      6/6   (100%) ✓              ║
║ ├─ Catálogo:          4/8   (50%)  ⏳             ║
║ ├─ Carrinho:          6/10  (60%)  ⏳             ║
║ ├─ Checkout:          2/7   (28%)  ⏳             ║
║ ├─ Responsividade:    0/3   (0%)   ⏳             ║
║ └─ Cross-browser:     2/4   (50%)  ⏳             ║
╠════════════════════════════════════════════════════╣
║ Status Geral                                       ║
║ 🟢 No Prazo | 🟡 Atenção Necessária | 🔴 Atrasado ║
║                                                    ║
║ Status Atual: 🟢 No Prazo                         ║
╚════════════════════════════════════════════════════╝
```

---

## 🎓 20. BOAS PRÁTICAS

### 20.1 Durante a Execução de Testes

✅ **FAÇA:**
- Siga os casos de teste rigorosamente
- Documente tudo (mesmo casos aprovados)
- Capture evidências de qualidade
- Anote observações relevantes
- Comunique bloqueios imediatamente
- Faça pausas regulares (evite fadiga)
- Teste com mente crítica
- Questione comportamentos estranhos
- Explore além do roteiro (quando apropriado)
- Mantenha planilha atualizada diariamente

❌ **NÃO FAÇA:**
- Pular passos do caso de teste
- Assumir que algo funciona sem testar
- Deixar para documentar depois
- Testar com pressa
- Ignorar pequenos problemas visuais
- Executar testes em ambiente instável
- Misturar execuções de diferentes navegadores na mesma sessão
- Deixar bugs sem evidências

### 20.2 Ao Encontrar um Bug

1. **PARE** - Não continue o caso de teste
2. **REPRODUZA** - Tente reproduzir pelo menos 2 vezes
3. **DOCUMENTE** - Crie bug report detalhado
4. **EVIDENCIE** - Capture screenshots/vídeos
5. **COMUNIQUE** - Avise o PO se for crítico
6. **ISOLE** - Tente identificar a causa raiz
7. **RELACIONE** - Veja se afeta outros casos de teste

### 20.3 Comunicação com o Time

**Daily Standup - O que reportar:**
- ✅ Casos executados ontem
- ✅ Bugs encontrados (com severidade)
- ✅ Casos planejados para hoje
- ✅ Bloqueios ou impedimentos
- ✅ Dúvidas ou necessidade de suporte

**Não precisa reportar:**
- ❌ Detalhes técnicos profundos (use reunião específica)
- ❌ Bugs já documentados
- ❌ Tarefas administrativas

---

## 📅 21. CRONOGRAMA DETALHADO DE EXECUÇÃO

### 21.1 Semana 1 (11-15/11/2025)

| Dia | Responsável | Atividade | Casos de Teste | Estimativa |
|-----|-------------|-----------|----------------|------------|
| **Seg** | Todos | Kickoff + Setup | - | 2h |
| **Seg** | João | Autenticação | TC001-TC006 | 3h |
| **Ter** | João | Catálogo - Filtros | TC007-TC009 | 2h |
| **Ter** | Ana | Carrinho - Adicionar | TC015-TC017 | 2.5h |
| **Qua** | João | Catálogo - Ordenação | TC010-TC014 | 2.5h |
| **Qua** | Ana | Carrinho - Remover/Atualizar | TC018-TC022 | 3h |
| **Qui** | Ana | Carrinho - Cálculos | TC023-TC024 | 2h |
| **Qui** | João | Revisão e retestes | - | 2h |
| **Sex** | Todos | Reunião de acompanhamento | - | 1h |
| **Sex** | Todos | Documentação de bugs | - | 2h |

### 21.2 Semana 2 (18-22/11/2025)

| Dia | Responsável | Atividade | Casos de Teste | Estimativa |
|-----|-------------|-----------|----------------|------------|
| **Seg** | Ana | Checkout - Fluxo Completo | TC025-TC028 | 3h |
| **Ter** | Ana | Checkout - Validações | TC029-TC031 | 3h |
| **Qua** | Pedro | Responsividade Mobile | TC032 | 3h |
| **Qui** | Pedro | Responsividade Tablet | TC033-TC034 | 3h |
| **Sex** | Todos | Reunião + Ajustes | - | 3h |

### 21.3 Semana 3 (25-29/11/2025)

| Dia | Responsável | Atividade | Casos de Teste | Estimativa |
|-----|-------------|-----------|----------------|------------|
| **Seg** | João | Cross-browser Chrome/Firefox | TC035-TC036 | 3h |
| **Ter** | Ana | Cross-browser Safari/Edge | TC037-TC038 | 3h |
| **Qua** | Pedro | Performance | TC039-TC040 | 3h |
| **Qui** | Todos | Testes Exploratórios | TE001-TE002 | 4h |
| **Sex** | Todos | Reteste de bugs corrigidos | - | 3h |

### 21.4 Semana 4 (02-06/12/2025)

| Dia | Responsável | Atividade | Estimativa |
|-----|-------------|-----------|------------|
| **Seg** | Todos | Regressão - Fluxos Críticos | 4h |
| **Ter** | Todos | Regressão - Fluxos Secundários | 4h |
| **Qua** | Pedro | Consolidação de evidências | 4h |
| **Qua** | João/Ana | Fechamento de bugs | 4h |
| **Qui** | Maria (PO) | Relatório Final | 4h |
| **Sex** | Todos | Apresentação de Resultados | 2h |
| **Sex** | Todos | Retrospectiva | 1h |

---

## 🎯 22. CRITÉRIOS DE SAÍDA

### 22.1 Critérios Obrigatórios

Para considerar o ciclo de testes CONCLUÍDO, todos estes critérios devem ser atendidos:

✅ **Execução:**
- 100% dos casos de teste de alta prioridade executados
- ≥ 95% de todos os casos de teste executados
- Casos não executados justificados

✅ **Qualidade:**
- Taxa de aprovação ≥ 90%
- 0 bugs críticos em aberto
- 0 bugs bloqueadores em aberto
- ≤ 2 bugs de alta prioridade em aberto

✅ **Documentação:**
- Todos os bugs documentados com evidências
- Planilha de casos de teste 100% atualizada
- Evidências organizadas e arquivadas
- Relatório final consolidado

✅ **Cobertura:**
- Todos os 4 navegadores testados
- Pelo menos 2 resoluções mobile testadas
- Fluxos críticos testados em regressão

✅ **Aprovação:**
- Product Owner aprova os resultados
- Stakeholders informados
- Go/No-Go decision tomada

### 22.2 Critérios Desejáveis (Nice to Have)

🌟 Taxa de aprovação ≥ 95%
🌟 Tempo médio de execução dentro da estimativa
🌟 Nenhum bug de média prioridade em aberto
🌟 Testes automatizados criados (se aplicável)
🌟 Documentação de lições aprendidas

---

## 📚 23. GLOSSÁRIO

| Termo | Definição |
|-------|-----------|
| **BStack Demo** | Plataforma de e-commerce de demonstração da BrowserStack |
| **Caso de Teste** | Especificação detalhada de condições, passos e resultados esperados |
| **Checkout** | Processo de finalização de compra |
| **Cross-browser** | Teste de compatibilidade entre diferentes navegadores |
| **Defeito/Bug** | Desvio do comportamento esperado |
| **Exploratório** | Teste não roteirizado, baseado em exploração livre |
| **Evidência** | Prova documental (screenshot, vídeo) da execução do teste |
| **Fluxo Crítico** | Funcionalidade essencial para o negócio |
| **Prioridade** | Ordem de correção/execução (P1 a P4) |
| **Regressão** | Re-teste de funcionalidades após correções |
| **Responsividade** | Capacidade de adaptar layout a diferentes telas |
| **Severidade** | Impacto do defeito (Crítica, Alta, Média, Baixa) |
| **Smoke Test** | Teste rápido das funcionalidades principais |
| **STD** | Software Test Design - Documento de design de testes |
| **STP** | Software Test Plan - Documento de planejamento de testes |
| **Workaround** | Solução alternativa temporária para um problema |

---

## 📞 24. CONTATOS E SUPORTE

### 24.1 Time de QA

| Nome | Função | Email | Telefone |
|------|--------|-------|----------|
| Maria Silva | Product Owner / QA Lead | maria.silva@email.com | (51) 9999-8888 |
| João Santos | QA Tester | joao.santos@email.com | (51) 9999-7777 |
| Ana Costa | QA Tester | ana.costa@email.com | (51) 9999-6666 |
| Pedro Oliveira | QA Tester | pedro.oliveira@email.com | (51) 9999-5555 |

### 24.2 Canais de Comunicação

- **Urgências**: WhatsApp do grupo
- **Dúvidas Técnicas**: Slack #qa-bstack-demo
- **Documentação**: Google Drive (link compartilhado)
- **Bugs**: Jira/Trello Board
- **Reuniões**: Google Meet (link nas convocações)

### 24.3 Horário de Suporte

- **Segunda a Sexta**: 9h às 18h
- **Sábados**: Apenas emergências
- **Domingos e Feriados**: Não há suporte

---

## ✅ 25. CHECKLIST FINAL

### 25.1 Antes de Começar os Testes

- [ ] Li e entendi o Software Test Plan (STP)
- [ ] Li e entendi este Software Test Design (STD)
- [ ] Tenho acesso ao ambiente de teste
- [ ] Tenho credenciais de teste
- [ ] Ferramentas de captura instaladas
- [ ] Planilha de casos de teste acessível
- [ ] Sei como reportar bugs
- [ ] Participei do kickoff meeting
- [ ] Entendo minha área de responsabilidade
- [ ] Tenho dúvidas? (Se sim, falar com PO)

### 25.2 Durante os Testes

- [ ] Atualizo planilha diariamente
- [ ] Capturo evidências de todos os testes
- [ ] Reporto bugs imediatamente
- [ ] Participo das dailys
- [ ] Comunico bloqueios
- [ ] Sigo os casos de teste rigorosamente
- [ ] Documento observações importantes

### 25.3 Ao Final dos Testes

- [ ] 100% dos meus casos executados
- [ ] Todos os bugs reportados e documentados
- [ ] Evidências organizadas e arquivadas
- [ ] Planilha 100% atualizada
- [ ] Contribuí para o relatório final
- [ ] Participei da reunião de fechamento
- [ ] Documentei lições aprendidas
- [ ] Arquivei trabalho adequadamente

---

## 📝 26. APROVAÇÕES

### 26.1 Assinaturas

| Nome | Função | Assinatura | Data |
|------|--------|------------|------|
| Maria Silva | Product Owner / QA Lead | ✍️ Maria Silva | 05/11/2025 |
| João Santos | QA Tester | | |
| Ana Costa | QA Tester | | |
| Pedro Oliveira | QA Tester | | |

---

## 📋 27. HISTÓRICO DE REVISÕES

| Versão | Data | Autor | Descrição |
|--------|------|-------|-----------|
| 0.1 | 01/11/2025 | Maria Silva | Esboço inicial |
| 0.5 | 03/11/2025 | Maria Silva | Casos de teste detalhados |
| 1.0 | 05/11/2025 | Maria Silva | Versão final aprovada |

---

## 🎉 MENSAGEM FINAL

**Pessoal,**

Este documento é o nosso **guia técnico completo** para execução dos testes. Ele complementa o Software Test Plan (STP) que receberam anteriormente.

Aqui vocês encontram:
- ✅ Casos de teste detalhados passo a passo
- ✅ Dados de teste prontos para uso
- ✅ Templates de bug report
- ✅ Boas práticas e dicas
- ✅ Checklist para não esquecer nada

**Importante:**
- Este é um **documento vivo** - se encontrarem ambiguidades ou tiverem sugestões, me avisem!
- Os casos de teste são um **guia**, não uma prisão - usem o bom senso
- **Qualidade > Quantidade** - melhor executar 20 casos bem feitos que 40 mal feitos
- **Comuniquem-se** - estamos em time, ajudem uns aos outros!

Lembrem-se: este trabalho pode ir para seus **portfólios**. Façam com capricho e orgulho! 💪

Qualquer dúvida, estou à disposição.

Vamos fazer um trabalho excelente! 🚀

**Maria Silva**
Product Owner & QA Lead
maria.silva@email.com

---

> 💡 **Dica Final**: Marque este documento como favorito no Notion e use os links de navegação para encontrar rapidamente o que precisa!

---

*Documento gerado em: 05 de Novembro de 2025*  
*Próxima revisão: Após Semana 2 de testes*