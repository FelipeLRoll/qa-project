EM CONSTRUÇÃO

## 📖 Sobre o Projeto

Portfólio completo de QA incluindo testes manuais e automatizados do site bstackdemo.com

## 🎯 Objetivos


* Documentar processos de teste profissionais
* Executar testes manuais exploratórios e baseados em casos de teste
* Implementar automação com Cypress
* Reportar bugs e melhorias
* Gerar relatórios de qualidade



## 🛠️ Tecnologias

* Cypress
* JavaScript
* Markdown
* Git/GitHub
* 

## 🧪 Documentação de Testes



# 🧪 Testes Automatizados

Este projeto demonstra expertise em **duas principais ferramentas de automação de testes E2E**:

## 🎯 Cypress
- **Linguagem:** JavaScript
- **Localização:** `cypress/e2e/`
- **Executar:** `npm run cy:open` ou `npm run cy:run`

### Testes implementados:

- ✅ **Autenticação** - Login/Logout com validações
- ✅ **Carrinho** - Adicionar, remover e calcular totais
- ✅ **Fluxo E2E** - Compra completa do início ao fim
- ✅ **Filtros** - Filtrar por marca e ordenar por preço

## 🎭 Playwright

- **Linguagem:** JavaScript
- **Localização:** `playwright/tests/`
- **Executar:** `npx playwright test`
- **Browsers:** Chromium, Firefox, WebKit

### Testes implementados:

- ✅ **Autenticação** - Login/Logout com validações
- ✅ **Carrinho** - Adicionar, remover e calcular totais
- ✅ **Fluxo E2E** - Compra completa do início ao fim
- ✅ **Filtros** - Filtrar por marca e ordenar por preço

## 🚀 CI/CD com GitHub Actions

Ambos os frameworks executam automaticamente a cada push:
- ✅ Testes em paralelo
- ✅ Screenshots de evidências
- ✅ Relatórios HTML
- ✅ Vídeos de execução (Cypress)

## 📊 Comandos Úteis

### Cypress
```bash
npm run test:cypress          # Roda testes no terminal
npm run test:cypress:open     # Abre interface visual
```

### Playwright
```bash
npm run test:playwright       # Roda todos os testes
npm run test:playwright:ui    # Interface visual
npm run test:playwright:report # Visualiza relatório
```

## 📁 Estrutura
```
4-automated-tests/
├── cypress/
│   └── e2e/
│       ├── auth.cy.js
│       ├── cart.cy.js
│       ├── e2e-flow.cy.js
│       └── filters.cy.js
└── playwright/
    ├── helpers/
    │   └── auth.js
    └── tests/
        ├── auth.spec.js
        ├── cart.spec.js
        ├── e2e-flow.spec.js
        └── filters.spec.js
```

## 🎯 Cobertura de Testes
- **11 cenários** automatizados
- **Login válido/inválido**
- **Manipulação de carrinho**
- **Validação de cálculos**
- **Filtros e ordenação**
- **Fluxo completo de compra**

## 👤 Autor

\[Felipe Roll] - QA Tester