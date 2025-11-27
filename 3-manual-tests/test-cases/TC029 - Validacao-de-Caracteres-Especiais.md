#### **TC029 - Validação de Caracteres Especiais**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC029 |
| **Título** | Validar comportamento com caracteres especiais |
| **Módulo** | Checkout |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | Ana Costa |
| **Estimativa** | 4 minutos |

**Dados de Teste:**
- First Name: João@#$%
- Last Name: Silva!@#
- Address: <script>alert('test')</script>


**Passos:**
1. Preencher campos com caracteres especiais
2. Tentar submeter formulário

**Resultado Esperado:**
- ✅ Sistema sanitiza/valida entrada
- ✅ Caracteres especiais são aceitos OU rejeitados com mensagem clara
- ✅ Não há execução de scripts (XSS prevention)
- ✅ Comportamento consistente em todos os campos