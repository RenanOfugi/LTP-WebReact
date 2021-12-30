const soma  = (x,y) => x+y;
const subtracao = (x,y) => x-y;
const mult = (x,y) => x*y;
const div = (x,y) => {
    if(y != 0){
        return x/y;
    } else {
        return 'Operação impossível';
    }
}

x = 10;
y = 5;
console.log('x = ' + x + ' y = ' + y + ': soma = ' + soma(x,y) + ' subtracao = ' + subtracao(x,y) + ' multiplicação = ' + mult(x,y) + ' Divisão = ' + div(x,y));  
