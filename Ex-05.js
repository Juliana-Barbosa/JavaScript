// Ler 30 números e exibir a soma dos números que são divisíveis por 5
const prompt = require('prompt-sync')();
let x = 0;
let y = 0;
while (x < 30){
    let num = parseInt(prompt("Digite um número: "))
    if(num % 5 == 0){
        y = num + y;
    }
    x = x+1;
}
console.log(y)