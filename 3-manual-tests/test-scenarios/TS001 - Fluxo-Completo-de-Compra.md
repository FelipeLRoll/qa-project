# TS001 - Fluxo Completo de Compra

## Informações do Cenário

| Campo | Detalhes |
|-------|----------|
| **ID** | TS001 |
| **Título** | Fluxo Completo de Compra |
| **Descrição** | Usuário navega, seleciona produtos e finaliza compra com sucesso |
| **Objetivo** | Validar o journey completo do cliente desde a entrada até a confirmação do pedido |
| **Prioridade** | 🔴 ALTA |
| **Módulos Envolvidos** | Autenticação, Catálogo, Carrinho, Checkout |
| **Responsável** | Time Completo QA |
| **Estimativa** | 25 minutos |

## Objetivo de Negócio
Garantir que um usuário consiga completar uma compra de forma fluida e sem obstáculos, maximizando a conversão e satisfação do cliente.

## Casos de Teste Relacionados
- TC001 - Login com Credenciais Válidas
- TC007 - Filtrar Produtos por Marca (Apple)
- TC015 - Adicionar Produto ao Carrinho (Fluxo Completo)
- TC025 - Checkout Completo com Sucesso

## Fluxo Principal

### 1. Acesso e Primeira Impressão
- Acessar `https://bstackdemo.com`
- Verificar carregamento correto da página inicial
- Validar que todos os elementos visuais estão presentes
- Confirmar que produtos são exibidos corretamente

### 2. Descoberta e Seleção de Produtos
- Navegar pela lista de produtos
- Utilizar filtros por marca (ex: Apple)
- Verificar que filtros funcionam corretamente
- Selecionar produto desejado

### 3. Gerenciamento do Carrinho
- Adicionar produto selecionado ao carrinho
- Verificar feedback visual de confirmação
- Validar que contador do carrinho é atualizado
- Acessar carrinho para revisão dos itens

### 4. Processo de Checkout
- Iniciar processo de checkout
- Preencher formulário de entrega com dados válidos:
  - First Name: João
  - Last Name: Silva
  - Address: Rua das Flores, 123
  - State: São Paulo
  - Postal Code: 01310-100
- Revisar resumo do pedido
- Confirmar compra

### 5. Confirmação e Pós-Venda
- Validar mensagem de confirmação de pedido
- Verificar que ID do pedido é gerado
- Confirmar que carrinho foi esvaziado
- Validar opções pós-compra (detalhes do pedido)

## Fluxos Alternativos

### FA1 - Usuário Não Logado
1. Navegar como visitante
2. Adicionar produtos ao carrinho
3. Ser redirecionado para login no checkout
4. Fazer login e continuar compra

### FA2 - Múltiplos Produtos
1. Adicionar 2-3 produtos diferentes
2. Verificar cálculo correto do total
3. Proceder para checkout

## Critérios de Aceitação

### Funcionais
- Usuário consegue completar compra em menos de 3 minutos
- Todos os passos são intuitivos e claros
- Confirmação de pedido é exibida com sucesso
- Dados do pedido são registrados corretamente

### Técnicos
- Tempo de resposta em cada etapa < 3 segundos
- Não há erros no console do navegador
- Sessão é mantida durante todo o processo
- Dados sensíveis são tratados com segurança

### Negócio
- Taxa de conversão potencial > 5%
- Experiência gera confiança no usuário
- Processo não causa abandono de carrinho

## Riscos e Possíveis Problemas
- **Alto Impacto**: Erros no checkout podem causar perda de vendas
- **Médio Impacto**: Problemas no carrinho podem frustrar usuários
- **Baixo Impacto**: Issues visuais menores na navegação

## Métricas de Sucesso
- **Tempo médio para completar compra**: < 3 minutos
- **Taxa de sucesso do fluxo**: 100%
- **Satisfação do usuário**: Alta (subjetiva)
- **Erros técnicos**: 0

## Cenários de Dados de Teste

### Conjunto 1 - Produtos Apple
- Produto: iPhone 12
- Filtro: Apple
- Quantidade: 1

### Conjunto 2 - Múltiplos Produtos
- Produto 1: iPhone 12
- Produto 2: Galaxy S20
- Quantidades: 1 cada

## Checklist de Validação
- [ ] Página inicial carrega corretamente
- [ ] Filtros funcionam e atualizam lista
- [ ] Produto é adicionado ao carrinho com sucesso
- [ ] Carrinho mostra itens corretos
- [ ] Checkout processa dados válidos
- [ ] Confirmação de pedido é exibida
- [ ] Carrinho é esvaziado após compra
- [ ] Nenhum erro no console

---

**Status**: Ativo  
**Última Execução**: --/--/----  
**Resultado**: --  
**Próxima Execução**: Semana 1
