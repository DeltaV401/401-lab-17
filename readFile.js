// 'use strict';

// const fs = require('fs');
// const hub = require('./hub');
// const file = require('./app');
// const promisify = require('./util/promisify');

// const readFile = promisify(fs.readFile);

// function fileReader(file) {
//   return readFile(file).then(hub.emit('write', file));
// }

// hub.on('read', fileReader);
