\### TC002 - Login com Credenciais Inválidas



| Campo | Valor |

|-------|-------|

| \*\*ID\*\* | TC002 |

| \*\*Título\*\* | Login com credenciais inválidas |

| \*\*Módulo\*\* | Autenticação |

| \*\*Prioridade\*\* | 🔴 Alta |

| \*\*Tipo\*\* | Funcional - Negativo |

| \*\*Responsável\*\* | João Santos |

| \*\*Estimativa\*\* | 2 minutos |



\*\*Objetivo:\*\*

Verificar se o sistema impede login com usuário inexistente ou inválido.



\*\*Pré-condições:\*\*

\- Aplicação acessível

\- Usuário NÃO está logado

\- Modal de login aberto



\*\*Dados de Teste:\*\*

```

Usuário: usuario\_invalido (não existe no dropdown)

Senha: qualquer

```



\*\*Passos para Execução:\*\*

1\. Acessar https://bstackdemo.com

2\. Clicar em "Sign In"

3\. Tentar selecionar ou digitar usuário inexistente no dropdown

4\. Tentar selecionar senha

5\. Observar comportamento do botão "Log In"

6\. Se possível clicar, observar resposta do sistema



\*\*Resultado Esperado:\*\*

✅ Dropdown não permite inserção manual de usuário

✅ Apenas usuários pré-definidos aparecem na lista

✅ Se tentar burlar via console/DevTools, sistema rejeita

✅ Mensagem de erro é exibida (se aplicável)

✅ Login não é concluído

✅ Usuário permanece deslogado

✅ Modal de login permanece aberto



\*\*Pós-condições:\*\*

\- Usuário continua deslogado

\- Nenhuma sessão criada



\*\*Critérios de Aprovação:\*\*

\- Sistema previne login com credenciais inválidas

\- Mensagem de erro clara e objetiva



\*\*Evidências Necessárias:\*\*

\- Screenshot do dropdown de usuários

\- Screenshot de tentativa de login inválido

\- Screenshot de mensagem de erro (se houver)



