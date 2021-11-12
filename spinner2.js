const process = require("process");
let spinner = ["|","/","-","\\","|"];
let timer = 100;

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, timer);
  timer += 200;
}