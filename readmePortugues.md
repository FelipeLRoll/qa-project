[![author](https://img.shields.io/badge/author-feliperoll-purple.svg)](https://www.linkedin.com/in/felipe-roll/)

# Projeto Completo de QA - Testes Manuais e Automatizados

### :us: [English Version](https://github.com/FelipeLRoll/qa-project/blob/main/readme.md)

# Visão Geral do Projeto

  - ## **Motivação:**

  A parte de QA é essencial para entregar produtos de software confiáveis. Este projeto combina testes exploratórios manuais com testes automatizados.

 - ## **Objetivos:**

O **objetivo principal** deste projeto é demonstrar habilidades profissionais de QA através de um portfólio de testes que inclui planejamento, documentação, execução e geração de relatórios.

- **Desenvolver documentação de testes** incluindo planos de teste, casos de teste e cenários de testes entre outros
- **Executar testes exploratórios manuais** para identificar problemas de usabilidade e casos extremos
- **Implementar testes automatizados** usando Cypress e Playwright
- **Gerar relatórios** com métricas e análise de cobertura de testes
- **Integração CI/CD** execução automatizada de testes a cada mudança de código

- ## **Escopo dos Testes:**

O projeto testa o site **bstackdemo.com**, uma aplicação de e-commerce de demonstração com as seguintes funcionalidades principais:

- Autenticação de usuário (login/logout)
- Catálogo de produtos com filtros e ordenação
- Gerenciamento do carrinho de compras
- Processo de checkout

# Características Principais:

- **Tipo de Teste**: *Manual e Automatizado*
- **Frameworks de Automação**: *Cypress e Playwright*
- **Processo**: Planejamento de testes, design de casos de teste, execução manual, automação de testes, relatório de bugs

# Ferramentas e Recursos Utilizados:

- **Ferramentas de Desenvolvimento**: `Visual Studio Code, Git, GitHub`
- **Frameworks de Automação**: 
  - `Cypress ^13.0.0` - Testes E2E baseados em JavaScript
  - `Playwright ^1.40.0` - Framework de testes cross-browser
- **Linguagem de Programação**: `JavaScript (Node.js)`
- **CI/CD**: `GitHub Actions` - Execução automatizada de testes a cada push
- **Gerenciamento de Testes**: Casos de teste organizados em planilhas

#  Estrutura
```
qa-project/
├── 1-planning/           # Plano de testes e escopo
├── 2-documentation/      # Documentação dos casos de teste
├── 3-manual-tests/       # Evidências e resultados de testes manuais
├── 4-automated-tests/
│   ├── cypress/e2e/
│   │   ├── auth.cy.js
│   │   ├── cart.cy.js
│   │   ├── e2e-flow.cy.js
│   │   └── filters.cy.js
│   └── playwright/
│       ├── helpers/auth.js
│       └── tests/
│           ├── auth.spec.js
│           ├── cart.spec.js
│           ├── e2e-flow.spec.js
│           └── filters.spec.js
├── 6-reports/
├── playwright-report/
├── playwright.config.js
└── package.json
```

#  Cobertura de Testes

- **11 cenários** automatizados
- **Login válido/inválido**
- **Manipulação de carrinho**
- **Validação de cálculos**
- **Filtros e ordenação**
- **Fluxo completo de compra**


# Etapas do Projeto:

  * ## 1. Planejamento de Testes

    - Definido escopo e objetivos dos testes
    - Identificados cenários de teste baseados em fluxos de usuário
    - Criado documento de estratégia de testes

  * ## 2. Documentação de Testes

    - Projetados casos de teste abrangentes cobrindo:
      - **Autenticação**: Login/logout com credenciais válidas e inválidas
      - **Navegação de Produtos**: Filtros, ordenação e seleção de produtos
      - **Carrinho de Compras**: Adicionar, remover, atualizar quantidades
      - **Checkout**: Fluxo completo de compra

  * ## 3. Execução de Testes Manuais

    - Realizados testes exploratórios para descobrir erros
    - Fluxo de testes documentados com screenshots e vídeos se necessário

  * ## 4. Automação de Testes

    ### **Implementação Cypress e Playwright**

    - Implementados 11 cenários de teste automatizados
    - Captura de screenshots e vídeos em falhas
    
    **Cobertura de Testes:**

    - Login com credenciais válidas
    - Login com credenciais inválidas
    - Funcionalidade de logout
    - Adicionar produtos ao carrinho
    - Remover produtos do carrinho
    - Atualizar quantidades no carrinho
    - Aplicar filtros de produtos
    - Ordenar produtos por preço
    - Fluxo completo de checkout

   
  * ## 5. Integração Contínua (CI/CD)

    - Configurados workflows do GitHub Actions para ambos frameworks
    - Execução automatizada de testes em:
      - Cada push para a branch main

    
    **Funcionalidades do Pipeline CI/CD:**

    - Execução automática de testes
    - Geração de relatórios HTML de testes
    - Artefatos de screenshots em falhas
    - Gravações de vídeo
    - Notificações de falhas de teste


  * ## 6. Relatórios de Testes e Métricas em uma planilha

    - Gerados relatórios de testes incluindo:

      - **Taxas de Aprovação/Reprovação**:
      - **Cobertura de Testes**: 
      - **Densidade de Defeitos**: 
      - **Tempo de Execução de Testes**: 



# Como Usar:

## Pré-requisitos:

- Node.js (v18 ou superior)
- npm ou yarn package manager
- Git

## Configuração:

1. **Clone o repositório:**
```bash
git clone https://github.com/FelipeLRoll/qa-project.git
cd qa-project
```

2. **Instale as dependências:**
```bash
npm install
```

## Executando os Testes:

### Cypress:
```bash
# Abrir Cypress Test Runner (Modo Interativo)
npm run test:cypress:open

# Executar testes Cypress em modo headless
npm run test:cypress

# Executar arquivo de teste específico
npx cypress run --spec "cypress/e2e/auth.cy.js"
```

### Playwright:
```bash
# Executar todos os testes Playwright
npm run test:playwright

# Executar testes em modo UI (Interativo)
npm run test:playwright:ui

# Executar testes em navegador específico (EX: Chrome)
npx playwright test --project=chromium

# Visualizar relatório HTML
npm run test:playwright:report
```

### Executar Todos os Testes:

```bash
npm test
```

## Local dos Relatórios:

- **Relatórios Cypress**: `cypress/reports/html/index.html`
- **Relatórios Playwright**: `playwright-report/index.html`
- **Screenshots**: `cypress/screenshots` e `test-results`
- **Vídeos**: `cypress/videos`

# Documentação do Projeto:

Documentação está disponível nos seguintes locais:

- **Plano de Testes**: `1-planning/test-plan.md`
- **Casos de Teste**: `2-documentation/test-cases/`
- **Resultados de Testes Manuais**: `3-manual-tests/`
- **Relatórios de Bugs**: `3-manual-tests/bug-reports/`
- **Relatórios de Testes**: `6-reports/`
- **Estratégia de Testes**: `1-planning/test-strategy.md`


# Desenvolvido por:

  * [Felipe Roll - LinkedIn](https://www.linkedin.com/in/felipe-roll)
  * [Felipe Roll - GitHub](https://github.com/FelipeLRoll)
  * [Felipe Roll - Email](mailto:felipelroll@gmail.com)

