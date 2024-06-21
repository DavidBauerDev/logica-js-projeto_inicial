alert ("Boas Vindas ao jogo do número secreto");
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
console.log (numeroSecreto);
// prompt para escrever algo na tela 


// enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } 
        else { 
            if (chute > numeroSecreto){
        alert (`o número secreto é menor que ${chute}`);
    }    else { 
        alert (`o número secreto é maior que ${chute}`);
       
        }
        tentativas++;
        // tentativas = tentativas +1 é o mesmo que tenativas++ pra somar 1 sempre usa ++
     } 
}
// tentativas é maior que 1 ? se for az tal coisa se nao for faz isso aqui 
let palavraTentativas = tentativas > 1 ? "tentativas" : "uma tentativa"

alert (`É isso ai você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);

//if (tentativas > 1){
 //   alert (`É isso ai você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert (`É isso ai você acertou o numero secreto ${numeroSecreto} com ${tentativas}  tentativa`);
//}