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

- Válidos:

   - 01310-100

   - 01310100

   - 12345-678

- Inválidos:

   - 123 (muito curto)

   - ABCDE-FGH (letras)

   - 12345-67 (formato incompleto)

**Passos:**
1. Testar cada formato de código postal
2. Verificar validação do sistema

**Resultado Esperado:**
- ✅ Formatos válidos são aceitos
- ✅ Formatos inválidos são rejeitados
- ✅ Mensagem de erro específica para formato incorreto