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