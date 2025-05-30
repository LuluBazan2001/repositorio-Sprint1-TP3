import express from 'express';
const app = express();
const PORT = 3000;

//Ruta GET con parametro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
    const edad = req.query.edad; //Usamos req.query para acceder a los parametros de consulta
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});