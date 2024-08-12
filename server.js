// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos (incluyendo HTML, CSS, JS e imágenes)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
