# TS002 - Experiência de Usuário Registrado

## 📋 Informações do Cenário

| Campo | Detalhes |
|-------|----------|
| **ID** | TS002 |
| **Título** | Experiência de Usuário Registrado |
| **Descrição** | Usuário logado aproveita funcionalidades personalizadas |
| **Objetivo** | Validar diferenciais para usuários autenticados |
| **Prioridade** | 🔴 ALTA |
| **Módulos Envolvidos** | Autenticação, Carrinho, Sessão |
| **Responsável** | João Santos |
| **Estimativa** | 20 minutos |

## 🎯 Objetivo de Negócio
Garantir que usuários registrados tenham uma experiência superior, com sessão persistente e funcionalidades exclusivas que incentivem o registro e fidelização.

## 📝 Casos de Teste Relacionados
- TC001 - Login com Credenciais Válidas
- TC005 - Logout do Sistema
- TC006 - Persistência de Logout
- TC015 a TC024 - Gerenciamento de Carrinho

## 🔄 Fluxo Principal

### 1. 🔐 Autenticação
- Acessar `https://bstackdemo.com`
- Clicar em "Sign In"
- Fazer login com:
  - Usuário: `demouser`
  - Senha: `testingisfun99`
- Validar login bem-sucedido

### 2. 🛍️ Navegação Autenticada
- Navegar por diferentes seções do site
- Verificar que sessão permanece ativa
- Validar que usuário logado é mostrado no header
- Testar funcionalidades disponíveis apenas para logados

### 3. 🛒 Operações no Carrinho
- Adicionar múltiplos produtos ao carrinho:
  - iPhone 12
  - Galaxy S20
  - Google Pixel 7
- Validar persistência dos itens
- Testar alterações de quantidade
- Verificar cálculos automáticos

### 4. 🚪 Logout e Segurança
- Executar logout do sistema
- Validar que sessão é encerrada
- Navegar para confirmar deslogado
- Tentar acessar funcionalidades restritas

### 5. 🔒 Persistência de Sessão
- Fazer login novamente
- Verificar se carrinho mantém itens
- Testar refresh da página (F5)
- Validar navegação entre abas

## 🎪 Fluxos Alternativos

### FA1 - Sessão Expirada
1. Deixar sessão expirar por inatividade
2. Tentar realizar ação que requer autenticação
3. Ser redirecionado para login
4. Continuar de onde parou

### FA2 - Múltiplos Dispositivos
1. Logar em dispositivo A
2. Logar em dispositivo B
3. Verificar comportamento da sessão

## 📊 Critérios de Aceitação

### Funcionais
- ✅ Login é rápido e confiável (< 3 segundos)
- ✅ Sessão persiste durante navegação
- ✅ Logout encerra sessão completamente
- ✅ Carrinho mantém itens entre sessões

### Técnicos
- ✅ Tokens de sessão são gerenciados corretamente
- ✅ Não há vazamento de informações sensíveis
- ✅ Cookies são configurados adequadamente
- ✅ Cache não interfere na autenticação

### Segurança
- ✅ Credenciais são transmitidas com segurança
- ✅ Sessão não pode ser hijackeada
- ✅ Logout remove todos os dados sensíveis
- ✅ Tentativas de acesso não autorizado são bloqueadas

## 🐛 Riscos e Possíveis Problemas
- **Crítico**: Vazamento de dados de usuário
- **Alto**: Sessão quebrada durante navegação
- **Médio**: Carrinho não persiste entre sessões
- **Baixo**: Problemas visuais no header de usuário

## 📈 Métricas de Sucesso
- **Tempo de login**: < 3 segundos
- **Taxa de sucesso de autenticação**: 100%
- **Persistência de sessão**: 100%
- **Segurança**: 0 vulnerabilidades críticas

## 🎬 Cenários de Dados de Teste

### Usuários para Teste
- `demouser` / `testingisfun99` - Usuário padrão
- `fav_user` / `testingisfun99` - Usuário com favoritos
- `existing_orders_user` / `testingisfun99` - Com histórico

### Produtos para Carrinho
- iPhone 12 - $1299
- Galaxy S20 - $849
- Quantidades variadas para teste de cálculo

## 📋 Checklist de Validação
- [ ] Login com credenciais válidas funciona
- [ ] Feedback visual de usuário logado
- [ ] Sessão persiste durante navegação
- [ ] Carrinho mantém itens entre páginas
- [ ] Logout encerra sessão completamente
- [ ] Acesso restrito após logout é bloqueado
- [ ] Refresh mantém estado da sessão
- [ ] Nenhum dado sensível exposto

---

**Status**: ✅ Ativo  
**Última Execução**: --/--/----  
**Resultado**: --  
**Próxima Execução**: Semana 1