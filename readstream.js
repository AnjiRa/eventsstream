const fs  = require('fs');
 const rstream = fs.createReadStream('input.txt',{ highWaterMark:1000})

let fsize = fs.readFileSync('input.txt').length;
console.log('file size: '+ fsize);


rstream.on('data',(chunk)=>{
    console.log(chunk.toString())
    console.log('-----------------------------------------------')
    console.log(chunk.toString())
})

// rstream.on('end',(chunk)=>{
//     console.log('--------end--------------------')
// })