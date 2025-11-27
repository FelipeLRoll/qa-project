\### TC003 - Login com Senha Inválida



| Campo | Valor |

|-------|-------|

| \*\*ID\*\* | TC003 |

| \*\*Título\*\* | Login com senha inválida |

| \*\*Módulo\*\* | Autenticação |

| \*\*Prioridade\*\* | 🔴 Alta |

| \*\*Tipo\*\* | Funcional - Negativo |

| \*\*Responsável\*\* | João Santos |

| \*\*Estimativa\*\* | 2 minutos |



\*\*Objetivo:\*\*

Verificar se o sistema impede login com senha incorreta.



\*\*Pré-condições:\*\*

\- Aplicação acessível

\- Usuário NÃO está logado



\*\*Dados de Teste:\*\*

```

Usuário: demouser

Senha: senha\_invalida (não existe no dropdown)

```



\*\*Passos para Execução:\*\*

1\. Acessar https://bstackdemo.com

2\. Clicar em "Sign In"

3\. Selecionar usuário válido "demouser"

4\. Tentar selecionar senha inexistente no dropdown

5\. Observar comportamento



\*\*Resultado Esperado:\*\*

✅ Dropdown de senha limitado a opções válidas

✅ Não permite digitação manual de senha

✅ Sistema previne login com senha incorreta

✅ Mensagem de erro apropriada (se aplicável)



\*\*Pós-condições:\*\*

\- Usuário continua deslogado



\*\*Evidências Necessárias:\*\*

\- Screenshot da tentativa

\- Screenshot de validação/erro

