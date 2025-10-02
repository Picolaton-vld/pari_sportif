const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon site de paris !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
