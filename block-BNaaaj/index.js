console.log('Welcome to Nodejs');
let os = require('os');
let cpus = os.cpus().length;
let freemem = os.freemem();

let uptime = os.uptime();
console.log(cpus, freemem, uptime);

var buff1 = Buffer.alloc(12);
buff1.write('Shivender Kumar');
console.log(buff1.toString());
