const fs= require('fs');
const rstream = fs.createReadStream('input.txt');
const wstream = fs.createWriteStream('message.txt');

// read file from input.txt file and replace in message.txt file by using creatReadStream and createWriteStream

rstream.pipe(wstream)

console.log('Streaming concept')