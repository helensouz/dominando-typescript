function retornarMeuNome(idade: number): number {
    return  idade
}
console.log(retornarMeuNome(20))




// Exemplo 2

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}


let calculo: (numeroA: number, numberoB: number) => number


calculo = multiplicar
console.log(calculo(5, 6))