// Ler 10 números e exibir a soma dos números ímpares
const prompt = require('prompt-sync')();
let x = 0;
let y = 0;
while (x < 10){
    let num = parseInt(prompt("Digite um número: ")) //determinar a variavel com o input
    if(num % 2 != 0){
        y = num + y;
    }
    x = x+1;
}
console.log(y)