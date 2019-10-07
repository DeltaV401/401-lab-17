'use strict';

const hub = require('./hub');
const fs = require('fs');
require('./logger');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      hub.emit('saved', file);
    });
  });
};

// alterFile = file => 
//   readFile(file).then(toUpper).then(write);

let file = process.argv.slice(2).shift();
alterFile(file);
