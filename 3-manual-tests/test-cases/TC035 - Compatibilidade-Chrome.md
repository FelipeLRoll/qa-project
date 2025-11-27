#### **TC035 - Compatibilidade Chrome**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC035 |
| **Título** | Validar funcionamento completo no Google Chrome |
| **Módulo** | Compatibilidade |
| **Prioridade** | 🔴 Alta |
| **Tipo** | Compatibilidade |
| **Técnica** | Smoke Test |
| **Responsável** | João Santos |
| **Estimativa** | 20 minutos |

**Pré-condições:**
- Chrome versão mais recente instalado
- Extensões desabilitadas (ou modo anônimo)

**Checklist de Validação:**
- ✅ Página carrega corretamente
- ✅ CSS aplicado sem problemas
- ✅ Imagens carregam
- ✅ Fontes renderizam corretamente
- ✅ Login funciona
- ✅ Filtros funcionam
- ✅ Adicionar ao carrinho funciona
- ✅ Checkout funciona
- ✅ Nenhum erro no console
- ✅ Performance aceitável

**Passos:**
1. Abrir Chrome
2. Acessar https://bstackdemo.com
3. Executar fluxo completo: Login → Filtrar → Adicionar ao Carrinho → Checkout
4. Verificar console (F12) para erros JavaScript
5. Documentar qualquer anomalia