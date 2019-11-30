const fs= require('fs');
const wstream = fs.createWriteStream('message.txt');

wstream.write('hello world ')
wstream.write('hello PSL')

console.log('file created')