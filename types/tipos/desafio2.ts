


type ContaBancaria = {
    saldo: number;
    depositar: (valor: number)=> void;
    
}

type Correntista = {
    nome: string;
    contaBancaria: ContaBancaria;
    contatos: string[];
    
}

let contaBancaria: ContaBancaria = {
    saldo: 2424,
    depositar(valor: number) {
         this.saldo += valor;
    },
  
}

let correntista: Correntista = {
    nome: "ana silva",
    contaBancaria: contaBancaria,
    contatos: [ '657567657656', '5565656569']

}

correntista.contaBancaria.depositar(20)
console.log(correntista)

