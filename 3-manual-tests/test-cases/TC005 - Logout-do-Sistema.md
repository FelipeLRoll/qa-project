### TC005 - Logout do Sistema



| Campo | Valor |
|-------|-------|
| **ID** | TC005 |
| **Título** | Logout com sucesso |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Responsável** | João Santos |
| **Estimativa** | 2 minutos |



**Objetivo:**

Verificar se o logout funciona corretamente e encerra a sessão do usuário.



**Pré-condições:**

- Usuário logado com sucesso (executar TC001 primeiro)



**Passos para Execução:**

1. Com usuário "demouser" logado

2. Localizar botão "Logout" no canto superior direito

3. Clicar no botão "Logout"

4. Observar comportamento da página



**Resultado Esperado:**

✅ Usuário é deslogado imediatamente

✅ Botão "Logout" é substituído por "Sign In"

✅ Nome do usuário desaparece do cabeçalho

✅ Página permanece acessível (não redireciona)

✅ Sessão é encerrada

✅ Carrinho é esvaziado ou mantido (documentar comportamento)



**Pós-condições:**

- Usuário deslogado

- Não é possível acessar funcionalidades que requerem login



**Evidências Necessárias:**

- Screenshot antes do logout (usuário logado)

- Screenshot após logout

- Screenshot mostrando botão "Sign In" de volta

