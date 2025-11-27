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