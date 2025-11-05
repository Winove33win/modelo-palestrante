const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve /public na raiz (ex.: /index.html, /imagem-modelo-palestra.jpeg)
app.use(express.static(path.join(__dirname, 'public')));

// rota raiz
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// fallback opcional (SPA) — evita 404 do Plesk em rotas desconhecidas
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
