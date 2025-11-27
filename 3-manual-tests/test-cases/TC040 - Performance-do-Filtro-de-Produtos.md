#### **TC040 - Performance do Filtro de Produtos**

| Campo | Detalhes |
|-------|----------|
| **ID** | TC040 |
| **Título** | Medir tempo de resposta ao aplicar filtros |
| **Módulo** | Performance |
| **Prioridade** | 🟢 Baixa |
| **Tipo** | Performance |
| **Técnica** | Medição |
| **Responsável** | Pedro Oliveira |
| **Estimativa** | 8 minutos |

**Passos:**
1. Carregar página inicial
2. Cronometrar tempo ao aplicar filtro
3. Medir com Performance API do browser
4. Documentar tempo de resposta

**Resultado Esperado:**
- ✅ Filtro responde em < 500ms
- ✅ UI não congela
- ✅ Feedback visual de carregamento (se > 300ms)