/**
 * 
 * Create a object with the specified properties:
 * -Array of strings with the name of the supervisores
 * -Function de bater ponto que recebe a hora e retorna uma string
 * -> ponto normal (<= 8)
 * -> Fora do horario (> 8)
 */


let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number ) => string

} = {
    supervisores: ['ana', 'maria', 'leonardo'],
    baterPonto(horario: number): string{
        if(horario <= 8){
            return 'ponto normal';
        }
        else{
            return 'fora do horario'
        }
    }
}


console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))