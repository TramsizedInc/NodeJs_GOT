const express = require('express');
const router = express.Router();
const path = require('path');
const dbase = require('db/db.standard');
//Global variables
global.dbName = "GotRpg";

// const characters = await dbase.listAll(client, dbName, collectionName);
console.log(characters);
// const characters = [
//     { id: 1, name: 'Tyrion Lannister', house: 'Lannister' },
//     { id: 2, name: 'Jon Snow', house: 'Stark' },
//     { id: 3, name: 'Daenerys Targaryen', house: 'Targaryen' }
//   ];
// const character = 



// await Start();
module.exports = router;