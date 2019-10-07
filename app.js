'use strict';

const hub = require('./hub');
const fs = require('fs');
const writeFile = require('./writeFile');
require('./logger');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    hub.emit('write', writeFile(file, text));
  });
};

// alterFile = file => 
//   readFile(file).then(toUpper).then(write);

let file = process.argv.slice(2).shift();
alterFile(file);
