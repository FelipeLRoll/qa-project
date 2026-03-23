### TC007 - Filtrar Produtos por Marca (Apple)



| Campo | Valor |
|-------|-------|
| **ID** | TC007 |
| **Título** | Aplicar filtro de marca Apple |
| **Módulo** | Catálogo de Produtos |
| **Prioridade** | 🟡 Média |
| **Tipo** | Funcional - Positivo |
| **Responsável** | João Santos |
| **Estimativa** | 3 minutos |



**Objetivo:**

Verificar se o filtro por marca funciona corretamente e exibe apenas produtos da marca selecionada.



**Pré-condições:**

- Página inicial carregada

- Todos os produtos visíveis

- Filtros disponíveis na lateral esquerda



**Dados de Teste:**

```

Marca: Apple

Produtos esperados: iPhone 12, iPhone 12 Mini, iPhone 12 Pro, iPhone 11, etc.

```



**Passos para Execução:**

1. Acessar https://bstackdemo.com

2. Anotar quantidade total de produtos exibidos

3. Localizar seção "Vendors" ou "Brand" no filtro lateral

4. Clicar na checkbox ou opção "Apple"

5. Aguardar atualização da lista (2-3 segundos)

6. Contar produtos exibidos após filtro

7. Verificar se todos os produtos são da Apple

8. Verificar se contador de produtos foi atualizado



**Resultado Esperado:**

✅ Lista de produtos atualiza automaticamente

✅ Apenas produtos Apple são exibidos

✅ Filtro "Apple" aparece como selecionado (checkbox marcada)

✅ Contador mostra "Showing X products" com número correto

✅ Todos os cards de produto mostram "Apple" no nome ou descrição

✅ Nenhum produto de outras marcas (Samsung, Google, OnePlus) está visível

✅ Layout permanece consistente

✅ Imagens carregam corretamente



**Pós-condições:**

- Filtro permanece ativo

- Lista filtrada permanece ao navegar na página



**Evidências Necessárias:**

- Screenshot antes do filtro (todos os produtos)

- Screenshot do filtro sendo selecionado

- Screenshot após filtro aplicado (só produtos Apple)

- Screenshot do contador de produtos atualizado





