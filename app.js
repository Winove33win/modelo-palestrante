const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT; // sem || 3000 no Plesk

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// opcional (evita 404 em rotas desconhecidas)
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '127.0.0.1', () => console.log('OK na porta', PORT));
