### Caso de Teste 2: Autenticação com Credenciais Inválidas
**Pré-condições:**
- O usuário "user1" está registrado no Amazon Cognito.

**Passos:**
1. Acesse a aplicação web hospedada no AWS Amplify.
2. Navegue até a página de login.
3. Insira o nome de usuário "user1" no campo de nome de usuário.
4. Insira uma senha incorreta, por exemplo, "wrongpassword".
5. Clique no botão "Login".

**Resultado Esperado:**
- O sistema não autentica o usuário através do Amazon Cognito.
- Uma mensagem de erro, como "Nome de usuário ou senha incorretos", é exibida.
- O usuário permanece na página de login e não é redirecionado.
- Nenhum token de autenticação é armazenado no navegador.
