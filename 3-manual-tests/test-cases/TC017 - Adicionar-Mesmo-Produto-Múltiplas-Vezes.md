### TC017 - Adicionar Mesmo Produto Múltiplas Vezes



| Campo | Valor |
|-------|-------|
| **ID** | TC017 |
| **Título** | Adicionar o mesmo produto várias vezes |
| **Módulo** | Carrinho de Compras |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Responsável** | Ana Costa |
| **Estimativa** | 5 minutos |



**Objetivo:**

Verificar como o sistema trata adições repetidas do mesmo produto.



**Pré-condições:**

- Usuário logado

- Carrinho vazio



**Dados de Teste:**

```

Produto: iPhone 12

Adicionar: 3 vezes

```



**Passos para Execução:**

1. Adicionar iPhone 12 ao carrinho (1ª vez)

2. Verificar carrinho

3. Voltar à página inicial

4. Adicionar iPhone 12 novamente (2ª vez)

5. Verificar carrinho

6. Adicionar iPhone 12 mais uma vez (3ª vez)

7. Abrir carrinho e verificar



**Resultado Esperado:**



**Cenário A: Sistema incrementa quantidade**

✅ Apenas 1 item no carrinho

✅ Quantidade = 3

✅ Subtotal = $1299 × 3 = $3897



**Cenário B: Sistema cria linhas separadas**

✅ 3 itens no carrinho

✅ Cada um com quantidade = 1

✅ Total = $1299 × 3 = $3897



**📝 Nota Importante:**

Documentar qual comportamento o sistema realmente apresenta.

Ambos são válidos, mas é importante saber para orientar usuários.



**Pós-condições:**

- 3 unidades do iPhone 12 no carrinho (de uma forma ou outra)



**Evidências Necessárias:**

- Screenshot após cada adição

- Screenshot do carrinho final

- Anotar comportamento observado



