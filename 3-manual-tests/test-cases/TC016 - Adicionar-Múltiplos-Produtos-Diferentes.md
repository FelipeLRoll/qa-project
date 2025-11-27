### TC016 - Adicionar Múltiplos Produtos Diferentes



| Campo | Valor |

|-------|-------|

| **ID** | TC016 |

| **Título** | Adicionar vários produtos diferentes ao carrinho |

| **Módulo** | Carrinho de Compras |

| **Prioridade** | 🔴 Alta |

| **Tipo** | Funcional - Positivo |

| **Responsável** | Ana Costa |

| **Estimativa** | 6 minutos |



**Objetivo:**

Verificar se o carrinho suporta múltiplos produtos diferentes.



**Pré-condições:**

- Usuário logado

- Carrinho vazio



**Dados de Teste:**

```

Produto 1: iPhone 12 - $1299

Produto 2: Samsung Galaxy S20 - $849

Produto 3: Google Pixel 7 - $599

Total esperado: $2747

```



**Passos para Execução:**

1. Adicionar iPhone 12 ao carrinho

2. Verificar contador (deve mostrar 1)

3. Voltar à página inicial ou continuar navegando

4. Adicionar Samsung Galaxy S20

5. Verificar contador (deve mostrar 2)

6. Adicionar Google Pixel 7

7. Verificar contador (deve mostrar 3)

8. Abrir carrinho

9. Verificar todos os produtos listados

10. Verificar total geral



**Resultado Esperado:**

✅ Contador do carrinho = 3

✅ Três produtos distintos listados no carrinho

✅ Cada produto com:

&nbsp;  - Nome correto

&nbsp;  - Imagem correta

&nbsp;  - Preço correto

&nbsp;  - Quantidade = 1

✅ Subtotal de cada produto correto:

&nbsp;  - iPhone 12: $1299 × 1 = $1299

&nbsp;  - Galaxy S20: $849 × 1 = $849

&nbsp;  - Pixel 7: $599 × 1 = $599

✅ Total geral = $1299 + $849 + $599 = $2747

✅ Total exibido está correto

✅ Ordem dos produtos (primeiro adicionado primeiro, ou inverso - documentar)



**Pós-condições:**

- Três produtos no carrinho

- Total calculado corretamente



**Evidências Necessárias:**

- Screenshot após adicionar cada produto

- Screenshot do carrinho com os 3 produtos

- Screenshot do total calculado



