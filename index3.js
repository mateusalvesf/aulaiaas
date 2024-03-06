require('dotenv').config();

const axios = require('axios');
const express = require('express');
const app = express();

// Modifique esta linha
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const city = 'Franca'; // Exemplo de cidade
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_API_KEY}&q=${city}&aqi=no`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar a previsão do tempo' });
  }
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
