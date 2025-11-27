 ### TC004 - Login com Campos Vazios



| Campo | Valor |

|-------|-------|

|  **ID ** | TC004 |

|  **Título ** | Tentativa de login com campos vazios |

|  **Módulo ** | Autenticação |

|  **Prioridade ** | 🔴 Alta |

|  **Tipo ** | Funcional - Negativo |

|  **Responsável ** | João Santos |

|  **Estimativa ** | 2 minutos |



 **Objetivo: **

Verificar validação de campos obrigatórios no formulário de login.



 * *Pré-condições: * *

 - Modal de login aberto

 - Campos vazios



 * *Dados de Teste: * *

```

Cenário 1: Ambos os campos vazios

Cenário 2: Apenas usuário preenchido

Cenário 3: Apenas senha preenchida

```



 * *Passos para Execução: * *

1 . Abrir modal de login

2 . Deixar ambos os campos vazios

3 . Tentar clicar em "Log In"

4 . Observar validação

5 . Preencher apenas usuário, tentar login

6 . Preencher apenas senha, tentar login



**Resultado Esperado:**

✅ Botão "Log In" desabilitado enquanto campos vazios, OU

✅ Mensagens de validação exibidas

✅ Login não processado

✅ Campos obrigatórios destacados (borda vermelha, etc)

✅ Mensagem clara indicando campos obrigatórios



**Pós-condições:**

- Usuário permanece deslogado



**Evidências Necessárias:**

- Vídeo de todos os cenários







