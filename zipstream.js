const fs = require('fs');
const zlib = require('zlib')


const rstream = fs.createReadStream('input.txt');
const wstream = fs.createWriteStream('output.zip');


rstream.pipe(zlib.createGunzip()).pipe(wstream)

console.log('Streaming concept')

/// npm install multer to save file to server