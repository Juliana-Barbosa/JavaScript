// Ler diversos números e exibir qual foi a soma. O valor -999 é código de fim da entrada
const prompt = require('prompt-sync')();
let v = 0;
while (true){
    let num = parseInt(prompt("Digite um número: "))
    if (num == -999){
        break
    }
    v = num + v;
}
console.log(v)