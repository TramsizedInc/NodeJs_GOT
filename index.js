const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const CharachterRoutes = require('./Routes/charachterRoutes');
const header = require('./Routes/indexRoutes');
const body_parser = require('body-parser');
const multer = require('multer');
const dbase = require('./Routes/db/db.standard');
const { MongoClient } = require("mongodb");
//Connect
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

/* routes */
app.use(body_parser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.set('views', 'Views/Pugs');
app.use(express.static(path.join('Public')));
app.use(express.static('node_modules/bootstrap/dist/css'))
app.use(express.static('node_modules/bootstrap/dist/js'))

await client.connect();
// const characters = await dbase.listAll(client, global.dbName, "Characters");

app.use(header);

router.get('/character/index', (req, res) => {
    res.render('index', {characters});

    
});
router.get('/character/create', (req, res, next) => {
    res.render('create');
});

router.post('/character/create', (req, res) => {
    //adding to database...
    res.redirect('/');
  });

router.use('/character/update/:id', (req, res, next) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
  if (!character) return res.status(404).send('Karakter nem található');
  res.render('update', { character });
});

router.post('/character/update/:id', (req, res) => {
    //modifying to datbase
    res.redirect('/');
  });

router.post('/character/delete/:id', (req, res, next) => {
    //delete from database
    res.redirect('/');
});
router.get('/character/show/:id', (req, res, next) => {
    const character = characters.find(c => c.id === parseInt(req.params.id));
  // if (!character) return res.status(404).send('Karakter nem található');
  res.render('show', { character });
})

// app.use('/character', CharachterRoutes);
app.use((req,res,next) => {
    res.send('<html><body><h1>Page not found</h1></body></html>');
});
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})