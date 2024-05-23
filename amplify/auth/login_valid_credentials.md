## Objetivo:
Verificar se o sistema autentica corretamente um usuário com credenciais válidas e impede o acesso com credenciais inválidas, conforme a arquitetura apresentada.

### Caso de Teste 1: Autenticação com Credenciais Válidas
**Pré-condições:**
- O usuário "user1" com a senha "password123" está registrado no Amazon Cognito.

**Passos:**
1. Acesse a aplicação web hospedada no AWS Amplify.
2. Navegue até a página de login.
3. Insira o nome de usuário "user1" no campo de nome de usuário.
4. Insira a senha "password123" no campo de senha.
5. Clique no botão "Login".

**Resultado Esperado:**
- O sistema autentica o usuário através do Amazon Cognito.
- O usuário é redirecionado para a página inicial (dashboard).
- Uma mensagem de boas-vindas, como "Bem-vindo, user1!", é exibida.
- O token de autenticação é recebido e armazenado no local storage ou session storage do navegador.
- Solicitações subsequentes ao API Gateway utilizam o token para autenticação e autorização.
