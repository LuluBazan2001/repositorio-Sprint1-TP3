import express from 'express';

//Creamos una instancia de Express
const app = express();

//Configuramos el puerto en el que el servidor escuchará
const PORT = 3000;

//Ruta basica
app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});








//Ruteo Basico
//Ruta GET para el home
//Solicitud: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('pagina de inicio');
});

//Ruta GET para recibir datos simples
//Solicitud: http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send('datos recibidos');
});













//Ruteo con Parametros
//Ruta GET con parametro de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req,res) => {
    const userId = req.params.id;
    res.send(`Usuario con ID: ${userId}`);
});     
//Ruta GET con multiples parametros
//Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res) => {
    const category = req.params.category;
    const productId = req.params.id;
    //o bien
    /*const { category, id } = req.params; */
    res.send(`Producto de categoría ${category} con ID: ${productId}`);
});














//Ruteo con Consultas
//Ruta GET con parametro de consulta
//Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultado de Búsqueda para: ${query}`);
});

//Ruta GET con multiples parametros de consulta
//Solicitud: htpp://localhost:3000/filter?type=books&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`Filtrando productos de tipo ${type} con precio entre ${minPrice} y ${maxPrice}`);
});