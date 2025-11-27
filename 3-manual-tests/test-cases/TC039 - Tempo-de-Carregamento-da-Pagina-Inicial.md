#### **TC039 - Tempo de Carregamento da Página Inicial**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC039 |
| **Título** | Medir tempo de carregamento da home |
| **Módulo** | Performance |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Performance |
| **Técnica** | Medição |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 10 minutos |

**Ferramentas:**
- Chrome DevTools (Network tab)
- Lighthouse
- PageSpeed Insights

**Métricas a Medir:**
- ✅ First Contentful Paint (FCP)
- ✅ Largest Contentful Paint (LCP)
- ✅ Time to Interactive (TTI)
- ✅ Total Blocking Time (TBT)
- ✅ Cumulative Layout Shift (CLS)

**Critérios de Aceitação:**
- LCP < 2.5s (Bom)
- FCP < 1.8s (Bom)
- CLS < 0.1 (Bom)

**Passos:**
1. Limpar cache do navegador
2. Abrir DevTools → Network
3. Acessar https://bstackdemo.com
4. Documentar tempo de carregamento
5. Executar Lighthouse audit
6. Repetir 3 vezes e calcular média