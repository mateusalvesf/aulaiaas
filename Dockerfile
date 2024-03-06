# Use a imagem oficial do Node.js como imagem pai
FROM node:18-slim

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho no container
COPY . .

# Expõe a porta que a aplicação usará
EXPOSE 80

# Comando para rodar a aplicação
CMD [ "node", "index.js" ]
