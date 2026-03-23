### TC012 - Ordenar por Menor Preço



| Campo | Valor |
|-------|-------|
| **ID** | TC012 |
| **Título** | Ordenar produtos do menor para o maior preço |
| **Módulo** | Catálogo de Produtos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Responsável** | João Santos |
| **Estimativa** | 4 minutos |



**Objetivo:**

Verificar se a ordenação por preço crescente funciona corretamente.



**Pré-condições:**

- Página inicial carregada



**Passos para Execução:**

1. Localizar dropdown de ordenação (geralmente "Sort by")

2. Selecionar "Lowest to highest" ou "Price: Low to High"

3. Aguardar reordenação

4. Verificar ordem dos produtos



**Resultado Esperado:**

✅ Produtos são reordenados

✅ Primeiro produto tem o menor preço

✅ Último produto tem o maior preço

✅ Ordem crescente mantida em toda a lista

✅ Preços são comparados numericamente (não como texto)



**Validação Manual:**

- Anotar preço dos 5 primeiros produtos

- Confirmar que P1 ≤ P2 ≤ P3 ≤ P4 ≤ P5



**Evidências Necessárias:**

- Screenshot antes da ordenação

- Screenshot após ordenação (mostrando preços)

- Anotar 5-6 preços para provar ordem crescente



