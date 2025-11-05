const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a pasta pública onde está o HTML e a imagem
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
