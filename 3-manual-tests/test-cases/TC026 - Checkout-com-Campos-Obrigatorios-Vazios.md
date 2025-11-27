#### **TC026 - Checkout com Campos Obrigatórios Vazios**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC026 |
| **Título** | Tentar checkout sem preencher campos obrigatórios |
| **Módulo** | Checkout |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Negativo |
| **Técnica** | Particionamento de Equivalência |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |

**Pré-condições:**
- Na página de checkout com produtos no carrinho

**Cenários de Teste:**
1. Todos os campos vazios
2. Apenas First Name vazio
3. Apenas Last Name vazio
4. Apenas Address vazio
5. Apenas State vazio
6. Apenas Postal Code vazio

**Passos (para cada cenário):**
1. Deixar campo(s) específico(s) em branco
2. Preencher os demais campos
3. Tentar submeter o formulário

**Resultado Esperado:**
- ✅ Formulário não é submetido
- ✅ Mensagem de erro exibida para campo(s) vazio(s)
- ✅ Campo obrigatório destacado (borda vermelha, asterisco, etc)
- ✅ Mensagem de erro clara (ex: "First Name is required")
- ✅ Foco retorna ao primeiro campo com erro