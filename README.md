# Aplicativo de previsão de tempo para demonstração de IaaS e PaaS

Este aplicativo demonstra como utilizar serviços de infraestrutura como serviço (IaaS) e plataforma como serviço (PaaS) para implementar um aplicativo de previsão do tempo.

## Começando

Para começar a usar este aplicativo de previsão do tempo, primeiro você precisa obter uma chave de API do WeatherAPI.

### Instalando Node no Ubuntu:
Para instalar o NodeJS siga o [Tutorial](https://nodejs.org/en/download/package-manager#debian-and-ubuntu-based-linux-distributions).

### Obtenção da Chave de API

1. Cadastre-se em [WeatherAPI](https://www.weatherapi.com/signup.aspx) para obter sua chave de API gratuita.
2. Após o cadastro, acesse [sua página de chave de API](https://www.weatherapi.com/my/) e copie sua chave.

### Configuração do Aplicativo

#### Infraestrutura como Serviço (IaaS)

No cenário de IaaS, você deve criar um arquivo `.env` na raiz da aplicação com a sua chave de API no seguinte formato:

WEATHERAPI_API_KEY=SuaChaveAqui


#### Plataforma como Serviço (PaaS) na Azure

Para configurar o aplicativo na Azure:

1. Na sua aplicação web Azure, acesse a seção "Configuração".
2. Navegue até a aba "Configurações de Aplicativo" e clique em "Novo parâmetro de aplicativo".
3. No campo "Nome", insira `WEATHERAPI_API_KEY`.
4. No campo "Valor", insira a chave de API que você obteve do WeatherAPI.

Essa configuração permite que o aplicativo acesse a chave de API necessária para as chamadas de API do WeatherAPI, independentemente de estar sendo executado localmente ou hospedado na Azure.

## Uso

Após a configuração, seu aplicativo estará pronto para consultar a previsão do tempo e exibi-la. Consulte a documentação específica do seu aplicativo para detalhes sobre como executá-lo e interagir com ele.
