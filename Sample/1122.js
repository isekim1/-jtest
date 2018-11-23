var os = require ('os');  //os 운영체제를 접근할수 있는 코드덩어리에 접근할수 있다 

console.log("Hostname: %s" , os.hostname);
console.log("Memory: %d / %d", os.freemem(), os.totalmem());
console.log("CPU Info ---");
console.log(os.cpus());
console.log("Network interface ---");
console.log (os.networkInterfaces());

var d = new Date();
console.log ("Date : %s,d);")