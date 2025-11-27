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