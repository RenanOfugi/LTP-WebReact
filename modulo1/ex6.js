/* Escreva um programa que imprime todos os números primos entre 1 e 100 */

var count = 0;

for (var i = 1; i <= 100; i++) {
    
    for (var j = 1; j <= i; j++) {
        if (i % j == 0) {
            count = count + 1;
        }
    }

    if (count == 1 || count == 2) {
        console.log(i);
    }
    
    count = 0;
}
