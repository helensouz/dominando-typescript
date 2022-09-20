



type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number ) => string
} 


let funcionario2: Funcionario = {
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