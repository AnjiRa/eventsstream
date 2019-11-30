const events = require('events');

let eventEmitter = new events.EventEmitter();
eventEmitter.on('Hello', ()=>{
    console.log('hello event handler....')
})


eventEmitter.addListener('ADDL', ()=>{
    console.log('hello ADD handler....')
})

eventEmitter.emit('Hello')

eventEmitter.emit('ADDL')