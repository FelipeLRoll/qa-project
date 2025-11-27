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