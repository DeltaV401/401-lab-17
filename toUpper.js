'use strict';

const hub = require('./hub');

function toUpper(text) {
  return text.toString().toUpperCase();
}

hub.on('upper', toUpper);