const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o seu nome? ', (nome) => {
  rl.question('Qual o seu ano de nascimento? ', (ano) => {
    const idade = 2026 - parseInt(ano);
    console.log(`Olá, ${nome}! Você tem aproximadamente ${idade} anos.`);
    rl.close();
  });
});