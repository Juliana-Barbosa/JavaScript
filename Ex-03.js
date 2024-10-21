// Ler 10 números e exibir o maior número
const prompt = require('prompt-sync')(); // input
let x = 0;

for (i = 0; i < 10; i++){
    let num = parseInt(prompt("Digite um numero: "))
    if(num > x){
        x = num;
    }
}
console.log(x)