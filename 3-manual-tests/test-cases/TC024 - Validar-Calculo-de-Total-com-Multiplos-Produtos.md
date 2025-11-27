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