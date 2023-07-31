const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/api/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = await db.Usuario.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:3000`);
});