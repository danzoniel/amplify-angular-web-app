# Caso de Uso: Monitoramento e Alerta de Níveis de Água em Canais e Bueiros

## Atores:
- Usuário Final (registra-se e acessa o sistema)
- Sistema de Monitoramento (software baseado na arquitetura mostrada)

## Pré-condições:
- O usuário deve estar registrado no sistema.
- Os sensores IoT devem estar instalados e operacionais nos canais e bueiros.

## Fluxo Principal:

### Registro e Login do Usuário:
1. Usuário acessa o site e pode escolher entre registrar-se ou fazer login.
2. Para registro, usuário fornece informações necessárias e cria uma conta.
3. Para login, usuário insere credenciais que são autenticadas via Amazon Cognito.

### Visualização dos Dados pelo Usuário:
1. Após o login, o usuário é direcionado para a página inicial, onde pode visualizar os gráficos atualizados dos níveis de água.
2. O sistema utiliza AWS Amplify para gerenciar a interface do usuário e garantir uma experiência responsiva.

### Coleta de Dados dos Sensores:
1. Sensores IoT instalados nos canais e bueiros coletam dados sobre os níveis de água e enviam via MQTT.
2. O AWS IoT Core recebe e gerencia esses dados.

### Processamento de Dados:
1. Dados são enviados para o Amazon Kinesis Data Stream para processamento em tempo real.
2. Funções AWS Lambda são disparadas para processar esses dados e realizar cálculos necessários.

### Armazenamento de Dados:
1. Os dados processados são armazenados no Amazon DynamoDB para acesso rápido e eficiente.

### Geração de Alertas:
1. Se os níveis de água excederem os limites seguros, o sistema mostra de forma visual nos gráficos presentes no dashboard.
2. Os dados são atualizados em tempo real.

## Fluxo Alternativo: Falha de Sensores:
1. Se um sensor falhar, o sistema identifica o problema e notifica o administrador para inspeção e manutenção.
2. O usuário é informado sobre a área afetada e a falta de dados atualizados.

## Pós-condições:
- O usuário está informado sobre o estado atual dos níveis de água em canais e bueiros.
- Medidas preventivas podem ser tomadas em caso de alerta de inundação.

## Requisitos Especiais:
- A interface do usuário deve ser adaptável para diferentes dispositivos.
- A segurança dos dados do usuário deve ser garantida através de criptografia e outras práticas recomendadas de segurança da informação.

## Definição das Métricas

### Métricas de Processamento de Dados:
- **Latência de processamento:** O tempo que leva desde a recepção dos dados até a conclusão de seu processamento.
- **Taxa de transferência:** O número de mensagens ou quantidade de dados processados em um determinado período.
- **Carga de trabalho das funções Lambda:** Monitoramento do número de invocações, duração das execuções e erros ocorridos.

### Métricas de Armazenamento de Dados:
- **Utilização de capacidade do DynamoDB:** Espaço de armazenamento usado versus disponível.
- **Desempenho de leitura/escrita:** Tempo de resposta para operações de leitura e escrita no banco de dados.
- **Consistência de dados:** Verificação da integridade e consistência dos dados armazenados.

### Métricas de Usabilidade da Interface de Usuário:
- **Tempo de carregamento da página:** Tempo necessário para carregar completamente a interface do usuário.
- **Número de sessões e usuários únicos:** Monitoramento do engajamento e do número de usuários ativos.
- **Taxas de erro de interface:** Erros que ocorrem durante a interação do usuário com a interface.

## Aplicações da ISO

### Funcionalidade:
- **Adequação:** O sistema inclui funções específicas para monitoramento e alerta de níveis de água, atendendo a essa característica.
- **Exatidão:** A utilização de sensores IoT e processamento de dados em tempo real no sistema é projetado para fornecer dados precisos sobre níveis de água.

### Eficiência de Desempenho:
- **Comportamento Temporal:** Utilizando AWS Lambda e Amazon Kinesis, o sistema é projetado para processar dados rapidamente e eficientemente, especialmente em um cenário de tempo real.
- **Utilização de Recursos:** A arquitetura é eficiente em termos de uso de recursos computacionais, aproveitando a escalabilidade e a gestão de recursos da AWS.

### Compatibilidade:
- **Interoperabilidade:** O sistema usa padrões e serviços comuns da AWS e protocolos IoT como MQTT, o que proporciona boa interoperabilidade com outros sistemas e dispositivos IoT.

### Usabilidade:
- **Proteção contra erros do usuário:** Usando Amazon Cognito para gerenciamento de identidades e sessões, o sistema oferece alguma proteção contra erros de usuário, como autenticação falha.

### Confiabilidade:
- **Disponibilidade:** Serviços da AWS oferecem alta disponibilidade.

### Segurança:
- **Confidencialidade e Integridade:** Amazon Cognito e outras práticas de segurança na AWS ajudam a garantir a confidencialidade e a integridade dos dados do usuário.
- **Autenticidade:** Amazon Cognito também proporciona autenticidade, verificando a identidade dos usuários.

### Manutenibilidade:
- **Modularidade e Modificabilidade:** A utilização de serviços modulares da AWS (como Lambda, DynamoDB, Kinesis) permite alterações e manutenções eficientes.
- **Analisabilidade:** Ferramentas e serviços de monitoramento da AWS, como AWS CloudWatch, podem ser usados para analisar o desempenho e detectar problemas.

### Portabilidade:
- **Adaptabilidade e Instalabilidade:** O uso de serviços baseados em nuvem da AWS facilita a adaptação e instalação em diferentes ambientes e configurações.

## Estimativa de custos ##

# Estimativa de Custos da Arquitetura AWS

A seguir, apresentamos uma estimativa de custos para a arquitetura descrita, utilizando valores genéricos para o uso mensal dos serviços.

## Valores Assumidos
1. **Número de usuários mensais**: 1,000
2. **Número de autenticações por usuário**: 10
3. **Número de chamadas de API por mês**: 50,000
4. **Número de funções Lambda**: 5, com uma duração média de 200 ms, executadas 100,000 vezes por mês cada
5. **Quantidade de dados IoT publicados mensalmente**: 10 GB
6. **Número de leituras e gravações no DynamoDB**: 100,000 de cada

## Estimativa de Custos

### AWS Amplify
- Hospedagem e autenticação básica: $50 por mês

### Amazon Cognito
- Autenticações: 1,000 usuários * 10 autenticações = 10,000 autenticações
- Preço: $0.0055 por autenticação após os primeiros 50,000 autenticações gratuitas por mês
- **Custo estimado**: $0 (dentro do limite gratuito)

### Amazon API Gateway
- 50,000 chamadas de API
- Preço: $3.50 por milhão de solicitações
- **Custo estimado**: \( 50,000 / 1,000,000 \) * $3.50 = $0.175

### AWS Lambda
- 5 funções, cada uma executada 100,000 vezes por mês: 5 * 100,000 = 500,000 execuções
- Duração média: 200 ms (0.2 segundos)
- Preço: $0.20 por 1 milhão de solicitações + $0.00001667 por GB-s de computação
- Memória média assumida: 128 MB
- **Custo estimado**:
  - Solicitações: \( 500,000 / 1,000,000 \) * $0.20 = $0.10
  - GB-s de computação: \( 500,000 * 0.2 / 1000 \) * 128 / 1024 * $0.00001667 = $0.20
  - Total: $0.10 + $0.20 = $0.30

### AWS IoT Core
- 10 GB de dados publicados
- Preço: $1.00 por milhão de mensagens publicadas (assumindo 1 KB por mensagem)
- **Custo estimado**: \( 10 * 1024 \) / 1,000,000 * $1.00 = $0.01

### Amazon Kinesis Data Stream
- Supondo 1 shard, e que 10 GB de dados são divididos em mensagens de 25 KB
- Preço: $0.015 por shard-hora + $0.014 por milhão de registros (25 KB por registro)
- **Custo estimado**:
  - Shard-horas: 1 * 24 * 30 * $0.015 = $10.80
  - Registros: \( 10 * 1024 * 1024 / 25 \) / 1,000,000 * $0.014 = $5.74
  - Total: $10.80 + $5.74 = $16.54

### Amazon DynamoDB
- 100,000 leituras e 100,000 gravações
- Preço: $1.25 por unidade de capacidade de leitura e $1.25 por unidade de capacidade de gravação, ambos por segundo-mês (provisão mínima)
- Assumindo uso em modo on-demand:
  - $1.25 por milhão de solicitações de leitura/gravação
- **Custo estimado**: \( 100,000 / 1,000,000 \) * $1.25 + \( 100,000 / 1,000,000 \) * $1.25 = $0.25

## Total Estimado Mensal
1. AWS Amplify: $50.00
2. Amazon Cognito: $0.00
3. Amazon API Gateway: $0.175
4. AWS Lambda: $0.30
5. AWS IoT Core: $0.01
6. Amazon Kinesis Data Stream: $16.54
7. Amazon DynamoDB: $0.25

**Total: $67.275 por mês**

Essa é uma estimativa básica e genérica. Para um orçamento mais preciso, ajustes específicos no uso dos serviços e consulta direta à calculadora de preços da AWS seriam recomendados.

# Estimativa de Esforço para Implementação da Arquitetura AWS

A seguir, apresentamos uma estimativa de esforço para a implementação da arquitetura descrita, incluindo configuração de serviços, desenvolvimento e testes.

## Componentes da Arquitetura

1. **AWS Amplify**
2. **Amazon Cognito**
3. **Amazon API Gateway**
4. **AWS Lambda**
5. **AWS IoT Core**
6. **Amazon Kinesis Data Stream**
7. **Amazon DynamoDB**
8. **MQTT Protocol (usado no AWS IoT Core)**

## Estimativa de Esforço

### 1. AWS Amplify
- **Configuração e Deploy**: 8 horas
- **Configuração do Frontend**: 16 horas
- **Total**: 24 horas

### 2. Amazon Cognito
- **Configuração de Usuários e Grupos**: 4 horas
- **Integração com Amplify**: 4 horas
- **Total**: 8 horas

### 3. Amazon API Gateway
- **Configuração de Endpoints**: 8 horas
- **Criação de Regras e Integrations**: 8 horas
- **Total**: 16 horas

### 4. AWS Lambda
- **Desenvolvimento de Funções Lambda (5 funções)**: 5 * 8 horas = 40 horas
- **Configuração e Deploy**: 8 horas
- **Total**: 48 horas

### 5. AWS IoT Core
- **Configuração de IoT Core**: 8 horas
- **Configuração de IoT Rule**: 8 horas
- **Total**: 16 horas

### 6. Amazon Kinesis Data Stream
- **Configuração de Shards**: 4 horas
- **Configuração de Streams**: 4 horas
- **Total**: 8 horas

### 7. Amazon DynamoDB
- **Configuração de Tabelas**: 4 horas
- **Configuração de Índices e Capacidade**: 4 horas
- **Total**: 8 horas

### 8. MQTT Protocol
- **Configuração do Protocolo MQTT no IoT Core**: 4 horas
- **Teste e Validação da Comunicação**: 4 horas
- **Total**: 8 horas

## Testes e Validação
- **Testes de Integração**: 16 horas
- **Testes de Performance**: 16 horas
- **Total**: 32 horas

## Esforço Total Estimado
- **Configuração e Desenvolvimento**: 136 horas
- **Testes e Validação**: 32 horas
- **Total**: 168 horas

## Distribuição de Esforço por Semana
Assumindo uma equipe de 4 desenvolvedores, a distribuição do esforço pode ser feita da seguinte maneira:

- **Semana 1**: Configuração inicial dos serviços AWS (Amplify, Cognito, API Gateway, IoT Core)
- **Semana 2**: Desenvolvimento das funções Lambda e configuração do Kinesis Data Stream e DynamoDB
- **Semana 3**: Integração dos componentes, configuração do MQTT Protocol e testes iniciais
- **Semana 4**: Testes de Integração, Testes de Performance e ajustes finais

**Total de Tempo Estimado**: 2 semanas (considerando uma equipe de 4 desenvolvedores)

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
