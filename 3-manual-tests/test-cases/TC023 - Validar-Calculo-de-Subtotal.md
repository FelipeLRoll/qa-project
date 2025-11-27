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