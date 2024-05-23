### Caso de Teste 4: Logout após Autenticação
**Pré-condições:**
- O usuário "user1" está autenticado e logado no sistema.

**Passos:**
1. Acesse a aplicação web hospedada no AWS Amplify e certifique-se de que está na página inicial (dashboard).
2. Clique no botão ou link de "Logout".

**Resultado Esperado:**
- O sistema desloga o usuário e redireciona para a página de login.
- O token de autenticação é removido do local storage ou session storage do navegador.
- O acesso a páginas protegidas sem reautenticação não é permitido.

## Considerações Finais
- Esses casos de teste devem ser realizados em diferentes navegadores e dispositivos para garantir a compatibilidade.
- Além disso, é importante verificar a integração com o Amazon Cognito, API Gateway, e AWS Lambda para garantir que a comunicação e a validação das credenciais estejam funcionando corretamente.
- Verifique também se a comunicação está segura (HTTPS) e se os tokens de autenticação são tratados de forma segura no frontend.
