**Caso de Uso: Monitoramento e Alerta de Níveis de Água em Canais e Bueiros**

**Atores:**
- Usuário Final (registra-se e acessa o sistema)
- Sistema de Monitoramento (software baseado na arquitetura mostrada)

**Pré-condições:**
- O usuário deve estar registrado no sistema.
- Os sensores IoT devem estar instalados e operacionais nos canais e bueiros.

**Fluxo Principal:**
1. **Registro e Login do Usuário:**
   - Usuário acessa o site e pode escolher entre registrar-se ou fazer login.
   - Para registro, usuário fornece informações necessárias e cria uma conta.
   - Para login, usuário insere credenciais que são autenticadas via Amazon Cognito.

2. **Visualização dos Dados pelo Usuário:**
   - Após o login, o usuário é direcionado para o dashboard onde pode visualizar os gráficos atualizados dos níveis de água.
   - O sistema utiliza AWS Amplify para gerenciar a interface do usuário e garantir uma experiência responsiva.

3. **Coleta de Dados dos Sensores:**
   - Sensores IoT instalados nos canais e bueiros coletam dados sobre os níveis de água e enviam via MQTT.
   - O AWS IoT Core recebe e gerencia esses dados.

4. **Processamento de Dados:**
   - Dados são enviados para o Amazon Kinesis Data Stream para processamento em tempo real.
   - Funções AWS Lambda são disparadas para processar esses dados e realizar cálculos necessários.

5. **Armazenamento de Dados:**
   - Os dados processados são armazenados no Amazon DynamoDB para acesso rápido e eficiente.

6. **Geração de Alertas:**
   - Se os níveis de água excederem os limites seguros, o sistema gera alertas automáticos.
   - Usuários recebem notificações em tempo real através do site.

**Fluxo Alternativo: Falha de Sensores:**
- Se um sensor falhar, o sistema identifica o problema e notifica o administrador para inspeção e manutenção.
- O usuário é informado sobre a área afetada e a falta de dados atualizados.

**Pós-condições:**
- O usuário está informado sobre o estado atual dos níveis de água em canais e bueiros.
- Medidas preventivas podem ser tomadas em caso de alerta de inundação.

**Requisitos Especiais:**
- A interface do usuário deve ser adaptável para diferentes dispositivos.
- A segurança dos dados do usuário deve ser garantida através de criptografia e outras práticas recomendadas de segurança da informação.

**Pontos de Extensão:**
- Usuários podem configurar personalizações no tipo e frequência dos alertas recebidos.
- Análise histórica de dados pode ser acessada para verificar tendências ao longo do tempo.

1. **Métricas de Desempenho do Sensor:**
   - **Frequência de leitura dos sensores**: Medir quão frequentemente os sensores estão enviando dados.
   - **Tempo de resposta dos sensores**: Quanto tempo leva para os dados dos sensores serem capturados e enviados ao sistema central.
   - **Disponibilidade dos sensores**: Porcentagem de tempo que os sensores estão operacionais versus inoperantes.

2. **Métricas de Processamento de Dados:**
   - **Latência de processamento**: O tempo que leva desde a recepção dos dados até a conclusão de seu processamento.
   - **Taxa de transferência**: O número de mensagens ou quantidade de dados processados em um determinado período.
   - **Carga de trabalho das funções Lambda**: Monitoramento do número de invocações, duração das execuções e erros ocorridos.

3. **Métricas de Armazenamento de Dados:**
   - **Utilização de capacidade do DynamoDB**: Espaço de armazenamento usado versus disponível.
   - **Desempenho de leitura/escrita**: Tempo de resposta para operações de leitura e escrita no banco de dados.
   - **Consistência de dados**: Verificação da integridade e consistência dos dados armazenados.

4. **Métricas de Usabilidade da Interface de Usuário:**
   - **Tempo de carregamento da página**: Tempo necessário para carregar completamente a interface do usuário.
   - **Número de sessões e usuários únicos**: Monitoramento do engajamento e do número de usuários ativos.
   - **Taxas de erro de interface**: Erros que ocorrem durante a interação do usuário com a interface.

5. **Métricas de Segurança:**
   - **Taxa de falhas de autenticação**: Quantas vezes os usuários falham ao tentar se autenticar.
   - **Eventos de segurança**: Incidentes de segurança detectados, incluindo tentativas de acesso não autorizado ou anormalidades na rede.

6. **Métricas de Alerta:**
   - **Tempo de reação a alertas**: Quanto tempo leva desde a detecção de uma condição de alerta até a notificação do usuário.
   - **Precisão dos alertas**: Proporção de alertas verdadeiros positivos em relação a falsos positivos.
   - **Resposta do usuário aos alertas**: Como os usuários respondem ou agem com base nos alertas recebidos.
  

  1. **Funcionalidade:**
   - **Adequação:** O sistema inclui funções específicas para monitoramento e alerta de níveis de água, atendendo a essa característica.
   - **Exatidão:** A utilização de sensores IoT e processamento de dados em tempo real sugere que o sistema é projetado para fornecer dados precisos sobre níveis de água.

2. **Eficiência de Desempenho:**
   - **Comportamento Temporal:** Utilizando AWS Lambda e Amazon Kinesis, o sistema parece ser projetado para processar dados rapidamente e eficientemente, especialmente em um cenário de tempo real.
   - **Utilização de Recursos:** A arquitetura parece eficiente em termos de uso de recursos computacionais, aproveitando a escalabilidade e a gestão de recursos da AWS.

3. **Compatibilidade:**
   - **Interoperabilidade:** O sistema usa padrões e serviços comuns da AWS e protocolos IoT como MQTT, o que sugere boa interoperabilidade com outros sistemas e dispositivos IoT.

4. **Usabilidade:**
   - **Operabilidade:** Com uma interface de usuário gerida pelo AWS Amplify e autenticação através do Amazon Cognito, o sistema é provavelmente fácil de operar para o usuário final.
   - **Proteção contra erros do usuário:** Usando Amazon Cognito para gerenciamento de identidades e sessões, o sistema pode oferecer alguma proteção contra erros de usuário, como autenticação falha.

5. **Confiabilidade:**
   - **Maturidade:** Dependendo da maturidade dos componentes individuais da AWS usados, o sistema pode ser muito confiável.
   - **Disponibilidade:** Serviços da AWS geralmente oferecem alta disponibilidade.
   - **Tolerância a falhas:** A arquitetura pode ser configurada para ser tolerante a falhas, especialmente se usar recursos de redundância e failover da AWS.

6. **Segurança:**
   - **Confidencialidade e Integridade:** Amazon Cognito e outras práticas de segurança na AWS ajudam a garantir a confidencialidade e a integridade dos dados do usuário.
   - **Autenticidade:** Amazon Cognito também proporciona autenticidade, verificando a identidade dos usuários.

7. **Manutenibilidade:**
   - **Modularidade e Modificabilidade:** A utilização de serviços modulares da AWS (como Lambda, DynamoDB, Kinesis) permite alterações e manutenções eficientes.
   - **Analisabilidade:** Ferramentas e serviços de monitoramento da AWS, como AWS CloudWatch, podem ser usados para analisar o desempenho e detectar problemas.

8. **Portabilidade:**
   - **Adaptabilidade e Instalabilidade:** O uso de serviços baseados em nuvem da AWS facilita a adaptação e instalação em diferentes ambientes e configurações.

## Reference links

https://docs.amplify.aws/angular/start/account-setup/
https://docs.amplify.aws/angular/start/quickstart/

## AWS Amplify Angular.js Starter Template

This repository provides a starter template for creating applications using Angular.js and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Angular.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/angular/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
