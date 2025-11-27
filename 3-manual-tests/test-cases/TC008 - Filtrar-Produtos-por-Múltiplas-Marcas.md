### TC008 - Filtrar Produtos por Múltiplas Marcas



| Campo | Valor |

|-------|-------|

| **ID** | TC008 |

| **Título** | Aplicar filtros de múltiplas marcas simultaneamente |

| **Módulo** | Catálogo de Produtos |

| **Prioridade** | 🟡 Média |

| **Tipo** | Funcional - Positivo |

| **Responsável** | João Santos |

| **Estimativa** | 4 minutos |



**Objetivo:**

Verificar se é possível selecionar múltiplas marcas e se o resultado mostra produtos de todas as marcas selecionadas.



**Pré-condições:**

- Página inicial carregada



**Dados de Teste:**

```

Marcas: Apple + Samsung

```



**Passos para Execução:**

1. Acessar página inicial

2. Clicar no filtro "Apple"

3. Anotar quantidade de produtos Apple

4. Clicar no filtro "Samsung" (mantendo Apple selecionado)

5. Verificar se ambas as checkboxes estão marcadas

6. Verificar produtos exibidos



**Resultado Esperado:**

✅ Sistema permite múltiplas seleções

✅ Ambas as checkboxes ficam marcadas

✅ Produtos de Apple E Samsung são exibidos

✅ Nenhum produto de outras marcas aparece

✅ Contador reflete total de produtos das duas marcas

✅ Filtros ativos são visualmente destacados



**Pós-condições:**

- Ambos filtros permanecem ativos



**Evidências Necessárias:**

- Screenshot com Apple selecionado

- Screenshot com Apple + Samsung selecionados

- Screenshot dos produtos resultantes



