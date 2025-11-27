#### **TC030 - Validação de Limite de Caracteres**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC030 |
| **Título** | Testar limites máximo e mínimo de caracteres |
| **Módulo** | Checkout |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Análise de Valor Limite |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Cenários:**
1. Campo com 1 caractere (valor limite inferior)
2. Campo com 255 caracteres (valor limite superior provável)
3. Campo com 1000 caracteres (além do limite)

**Passos:**
1. Para cada campo, testar com diferentes comprimentos
2. Observar validação e comportamento

**Resultado Esperado:**
- ✅ Limite mínimo respeitado
- ✅ Limite máximo respeitado
- ✅ Mensagem de erro se exceder limite
- ✅ Campo não aceita mais caracteres além do máximo