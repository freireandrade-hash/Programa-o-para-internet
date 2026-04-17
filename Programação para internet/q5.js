const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a temperatura em Celsius: ', (celsius) => {
  const c = parseFloat(celsius);
  const f = c * 9/5 + 32;
  console.log(`${c}°C equivale a ${f}°F`);
  rl.close();
});