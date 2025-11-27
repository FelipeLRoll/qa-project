# TS003 - Gerenciamento de Carrinho

## 📋 Informações do Cenário

| Campo | Detalhes |
|-------|----------|
| **ID** | TS003 |
| **Título** | Gerenciamento de Carrinho |
| **Descrição** | Usuário gerencia produtos no carrinho antes do checkout |
| **Objetivo** | Validar todas as operações do carrinho de compras |
| **Prioridade** | 🔴 ALTA |
| **Módulos Envolvidos** | Carrinho de Compras |
| **Responsável** | Ana Costa |
| **Estimativa** | 30 minutos |

## 🎯 Objetivo de Negócio
Garantir que os usuários possam gerenciar seus carrinhos de forma intuitiva e confiável, reduzindo a taxa de abandono por problemas técnicos e melhorando a experiência de compra.

## 📝 Casos de Teste Relacionados
- TC015 - Adicionar Produto ao Carrinho (Fluxo Completo)
- TC016 - Adicionar Múltiplos Produtos Diferentes
- TC017 - Adicionar Mesmo Produto Múltiplas Vezes
- TC018 - Remover Produto do Carrinho
- TC020 - Aumentar Quantidade de Produto
- TC021 - Diminuir Quantidade de Produto
- TC022 - Quantidade Zero ou Negativa
- TC023 - Validar Cálculo de Subtotal
- TC024 - Validar Cálculo de Total com Múltiplos Produtos

## 🔄 Fluxo Principal

### 1. 🛒 Adição de Produtos
- Fazer login no sistema
- Adicionar produto individual ao carrinho
- Verificar feedback visual e contador
- Adicionar múltiplos produtos diferentes
- Validar que todos aparecem no carrinho

### 2. 🔢 Gestão de Quantidades
- Acessar carrinho com produtos
- Aumentar quantidade de um produto
- Diminuir quantidade de um produto
- Testar limites mínimos e máximos
- Verificar recálculo automático de totais

### 3. 🗑️ Remoção de Itens
- Identificar produto para remover
- Executar remoção do carrinho
- Validar que item some da lista
- Confirmar recálculo do total
- Testar remoção do último item

### 4. 💰 Cálculos e Valores
- Adicionar produtos com preços diferentes
- Testar combinações de quantidades
- Validar subtotais por produto
- Verificar total geral
- Testar atualizações em tempo real

### 5. 💾 Persistência de Dados
- Navegar entre páginas
- Fazer refresh (F5)
- Fazer logout e login novamente
- Verificar que carrinho mantém itens

## 🎪 Fluxos Alternativos

### FA1 - Carrinho Vazio
1. Acessar carrinho vazio
2. Verificar mensagem apropriada
3. Validar que checkout está desabilitado

### FA2 - Quantidades Extremas
1. Tentar quantidade = 0
2. Tentar quantidade negativa
3. Testar quantidades muito altas
4. Verificar validações do sistema

### FA3 - Múltiplas Sessões
1. Adicionar itens em navegador A
2. Verificar em navegador B (mesmo usuário)
3. Validar sincronização

## 📊 Critérios de Aceitação

### Funcionais
- ✅ Adição de produtos é instantânea e com feedback claro
- ✅ Alterações de quantidade refletem imediatamente nos cálculos
- ✅ Remoção de itens é confirmada visualmente
- ✅ Carrinho persiste entre sessões do usuário

### Técnicos
- ✅ Cálculos matemáticos são 100% precisos
- ✅ Atualizações ocorrem em tempo real
- ✅ Dados são mantidos com integridade
- ✅ Performance não degrada com muitos itens

### Usabilidade
- ✅ Interface é intuitiva e fácil de usar
- ✅ Estados vazio/cheio são claramente diferenciados
- ✅ Ações têm feedback visual imediato
- ✅ Mensagens de erro são claras e helpful

## 🐛 Riscos e Possíveis Problemas
- **Crítico**: Cálculos incorretos de valores
- **Alto**: Perda de itens do carrinho
- **Médio**: Performance lenta com muitos itens
- **Baixo**: Problemas visuais menores

## 📈 Métricas de Sucesso
- **Precisão de cálculos**: 100%
- **Persistência de dados**: 100%
- **Tempo de resposta**: < 1 segundo
- **Satisfação do usuário**: Alta

## 🎬 Cenários de Dados de Teste

### Conjunto 1 - Produtos Variados

iPhone 12: $1299 × 2 = $2598
Galaxy S20: $849 × 1 = $849
Google Pixel 7: $799 × 3 = $2397
Total Esperado: $5844

### Conjunto 2 - Mesmo Produto

iPhone 12: $1299 × 5 = $6495

### Conjunto 3 - Mistura Complexa

Produto A: $100 × 2 = $200
Produto B: $50 × 3 = $150
Produto C: $75 × 1 = $75
Total Esperado: $425


## 📋 Checklist de Validação

- [ ] Adição de primeiro produto funciona
- [ ] Múltiplos produtos são listados corretamente
- [ ] Contador do carrinho é preciso
- [ ] Aumento de quantidade recalcula subtotal
- [ ] Diminuição de quantidade funciona
- [ ] Remoção de item remove completamente
- [ ] Cálculos totais são matematicamente corretos
- [ ] Carrinho vazio mostra mensagem apropriada
- [ ] Dados persistem após refresh
- [ ] Nenhum erro de JavaScript no console

---

**Status**: ✅ Ativo  
**Última Execução**: --/--/----  
**Resultado**: --  
**Próxima Execução**: Semana 1
