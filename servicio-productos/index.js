const express = require('express');
const app = express();
const port = 3002;

app.get('/productos', (req, res) => {
    res.json([
        { id: 1, nombre: 'Laptop Gamer' },
        { id: 2, nombre: 'Teléfono Inteligente' }
    ]);
});

app.listen(port, () => {
    console.log(`Servicio de productos ejecutándose en el puerto ${port}`);
});