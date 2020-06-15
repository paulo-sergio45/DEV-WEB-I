class Pessoa {

    constructor(id, nome, cep, estado, cidade, rua, bairro, numero, telefone, peso, altura, probSaude) {
        this.id = id
        this.nome = nome
        this.cep = cep
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.telefone = telefone
        this.peso = peso
        this.altura = altura
        this.probSaude = probSaude
    }

    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getRua() {
        return this.rua;
    }
    setRua(rua) {
        this.rua = rua;
    }
    getBairro() {
        return this.bairro;
    }
    setBairro(bairro) {
        this.bairro = bairro;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    getProbSaude() {
        return this.probSaude;
    }
    setProbSaude(probSaude) {
        this.probSaude = probSaude;
    }

    criaPessoa(id, nome, cep, estado, cidade, rua, bairro, numero, telefone, peso, altura, probSaude) {

        let pessoa = new Pessoa(id, nome, cep, estado, cidade, rua, bairro, numero, telefone, peso, altura, probSaude);
        return pessoa;
    }



}