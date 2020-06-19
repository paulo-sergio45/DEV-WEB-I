class ListaPessoas {

    constructor() {

        this.listaPessoas = [];

    }

    
    setPessoas(negociacao) {

        this.listaPessoas.push(negociacao);

    }

    get getPessoas() {

        return this.listaPessoas;

    }

}