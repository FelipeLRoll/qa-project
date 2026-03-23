### TC006 - Persistência de Logout



| Campo | Valor |

|-------|-------|

| **ID** | TC006 |

| **Título** | Validar que logout persiste após navegação |

| **Módulo** | Autenticação |

| **Prioridade** | 🟡 Média |

| **Tipo** | Funcional - Positivo |

| **Responsável** | João Santos |

| **Estimativa** | 3 minutos |



**Objetivo:**

Garantir que após logout, o usuário permanece deslogado mesmo após refresh ou navegação.



**Pré-condições:**

- Executar TC005 (logout realizado)



**Passos para Execução:**

1. Após logout, pressionar F5 para atualizar página

2. Verificar status de login

3. Navegar para diferentes seções do site

4. Verificar se continua deslogado

5. Tentar acessar carrinho

6. Tentar fazer checkout



**Resultado Esperado:**

✅ Após F5, usuário permanece deslogado

✅ Botão "Sign In" continua visível

✅ Nome do usuário não reaparece

✅ Ao tentar adicionar produto, sistema solicita login

✅ Sessão não é restaurada automaticamente



**Pós-condições:**

- Usuário continua deslogado



**Evidências Necessárias:**

- Screenshot após refresh

- Screenshot ao tentar ação que requer login



