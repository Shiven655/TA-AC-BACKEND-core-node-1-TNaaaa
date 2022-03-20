console.log('Welcome to Nodejs');
let os = require('os');
let cpus = os.cpus().length;
let freemem = os.freemem();

let uptime = os.uptime();
console.log(cpus, freemem, uptime);

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);

buff1.write('Shivender Kumar');
console.log(buff1.toString());

var { readFile, readFileSync, unlink } = require('fs');

var sync = readFileSync('./app.js');

readFile('./app.js', (err, content) => {
  console.log(err, content.toString);
});
