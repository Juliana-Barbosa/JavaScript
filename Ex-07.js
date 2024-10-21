// Ler diversos números e exibir quantos foram digitados. O valor -1 é código de fim 
const prompt = require('prompt-sync')();
let v = 0;
while (true){
    let num = parseInt(prompt("Digite um número: "))
    if (num == -1){
        break
    }
    v = v+1
}
console.log(v)
