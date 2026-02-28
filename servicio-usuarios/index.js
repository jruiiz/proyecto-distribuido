const express = require('express');
const app = express();
const port = 3001;

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan David Ruiz' },
        { id: 2, nombre: 'Ana Gómez' }
    ]);
});

app.listen(port, () => {
    console.log(`Servicio de usuarios ejecutándose en el puerto ${port}`);
});