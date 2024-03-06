require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const port = 80;

// Rota ajustada para receber o nome da cidade como parâmetro
app.get('/previsao', async (req, res) => {
  // Obtém o nome da cidade a partir dos parâmetros da query string
  const cidade = req.query.cidade;
  
  // Verifica se o nome da cidade foi fornecido
  if (!cidade) {
    return res.status(400).json({ error: 'O nome da cidade é obrigatório.' });
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_API_KEY}&q=${cidade}&aqi=no`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    // Resposta em caso de erro na API de previsão do tempo
    res.status(500).json({ error: 'Erro ao consultar a previsão do tempo' });
  }
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
