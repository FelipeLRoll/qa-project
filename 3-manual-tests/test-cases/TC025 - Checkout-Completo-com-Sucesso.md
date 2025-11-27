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
- First Name: João
- Last Name: Silva
- Address Line: Rua das Flores, 123
- State/Province: São Paulo
- Postal Code: 01310-100

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