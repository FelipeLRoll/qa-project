### TC001 - Login com Credenciais Válidas

| Campo | Valor |
|-------|-------|
| **ID** | TC001 |
| **Título** | Login com credenciais válidas |
| **Módulo** | Autenticação |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Funcional - Positivo |
| **Responsável** | João Santos |
| **Estimativa** | 3 minutos |

**Objetivo:**
Verificar se o sistema permite login com credenciais válidas e redireciona corretamente o usuário.

**Pré-condições:**
- Aplicação acessível em https://bstackdemo.com
- Navegador limpo (sem cache de sessões anteriores)
- Usuário NÃO está logado

**Dados de Teste:**
```
Usuário: demouser
Senha: testingisfun99
```

**Passos para Execução:**
1. Abrir navegador e acessar https://bstackdemo.com
2. Aguardar carregamento completo da página
3. Localizar botão "Sign In" no canto superior direito
4. Clicar no botão "Sign In"
5. Aguardar abertura do modal/formulário de login
6. No dropdown "Select Username", selecionar "demouser"
7. No dropdown "Select Password", selecionar "testingisfun99"
8. Clicar no botão "Log In"
9. Aguardar processamento (2-3 segundos)

**Resultado Esperado:**
✅ Modal de login fecha automaticamente
✅ Página recarrega ou atualiza
✅ Botão "Sign In" é substituído por "Logout"
✅ Nome do usuário "demouser" aparece no canto superior direito
✅ Ícone de usuário logado é exibido
✅ Não há mensagens de erro
✅ URL permanece em https://bstackdemo.com
✅ Console do navegador sem erros JavaScript

**Pós-condições:**
- Usuário permanece logado
- Sessão ativa é criada
- Carrinho do usuário é carregado (se existir)

**Critérios de Aprovação:**
- Todos os resultados esperados devem ser atendidos
- Tempo de resposta < 5 segundos
- Sem erros no console

**Evidências Necessárias:**
- Screenshot da página antes do login
- Screenshot do modal de login preenchido
- Screenshot após login bem-sucedido
- Screenshot mostrando nome do usuário logado
