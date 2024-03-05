const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const CharachterRoutes = require('./Routes/charachterRoutes');
const header = require('./Routes/indexRoutes');
const body_parser = require('body-parser');
const multer = require('multer');

app.use(body_parser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.set('views', 'Views/Pugs');
app.use(express.static(path.join('Public')));
app.use(express.static('node_modules/bootstrap/dist/css'))
app.use(express.static('node_modules/bootstrap/dist/js'))

app.use(header);
app.use('/character', CharachterRoutes);
app.use((req,res,next) => {
    res.send('<html><body><h1>Page not found</h1></body></html>');
});
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})