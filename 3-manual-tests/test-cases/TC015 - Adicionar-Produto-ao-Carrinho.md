### TC015 - Adicionar Produto ao Carrinho



| Campo | Valor |
|-------|-------|
| **ID** | TC015 |
| **Título** | Adicionar produto ao carrinho com sucesso |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Responsável** | Ana Costa |
| **Estimativa** | 4 minutos |



**Objetivo:**

Verificar se é possível adicionar um produto ao carrinho e se o contador é atualizado.



**Pré-condições:**

- Usuário logado (executar TC001)

- Carrinho vazio (ou anotar quantidade inicial)

- Pelo menos 1 produto disponível



**Dados de Teste:**

```

Produto: iPhone 12

Preço: $1299 (anotar preço real)

```



**Passos para Execução:**

1. Com usuário logado, ir para página inicial

2. Localizar produto "iPhone 12"

3. Anotar preço exibido no card

4. Anotar número atual do contador do carrinho (ícone no topo)

5. Clicar no botão "Add to cart" no card do produto

6. Aguardar confirmação (2-3 segundos)

7. Verificar feedback visual

8. Clicar no ícone do carrinho (topo direito)

9. Verificar conteúdo do carrinho



**Resultado Esperado:**

✅ Feedback visual de confirmação (toast notification, animação, etc)

✅ Contador do carrinho incrementa de X para X+1

✅ Ícone do carrinho pode mudar de cor ou animar

✅ Ao clicar no carrinho, modal/página abre

✅ Produto "iPhone 12" aparece na lista do carrinho

✅ Nome do produto está correto

✅ Imagem do produto é exibida

✅ Preço exibido é $1299 (ou o preço anotado)

✅ Quantidade inicial é 1

✅ Subtotal = Preço × 1 = $1299



**Pós-condições:**

- Produto permanece no carrinho

- Contador mantém novo valor

- Carrinho pode ser acessado a qualquer momento



**Critérios de Aprovação:**

- Todos os resultados esperados atendidos

- Tempo de adição < 3 segundos

- Sem erros no console



**Evidências Necessárias:**

- Screenshot do produto antes de adicionar

- Screenshot do feedback de confirmação

- Screenshot do contador atualizado

- Screenshot do produto no carrinho

- Screenshot do subtotal calculado



