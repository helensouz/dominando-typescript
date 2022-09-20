//uma funcao que nao pode chegar no final bem sucedida..

function falha(msg: string): never{
    throw new Error(msg);
}

const produto = {
    nome: 'produto',
    preco: 1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('precisa ter nome')
        }
        if(this.preco <= 0){
            falha('preco invalido')
        }
    }
}

produto.validarProduto()