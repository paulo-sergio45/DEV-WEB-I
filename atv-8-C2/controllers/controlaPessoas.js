///utilizado para pegar o post usando javascript vanilla
Pessoa = new Pessoa;
var cont = 0;
var pessoas = [];

document.querySelector("#formapessoa").addEventListener("submit", function (event) {
    let saude = [];
    let vet = document.querySelectorAll("input.saude1")
    console.log(vet);
    for (let i = 0; i < vet.length; ++i) {
        if (vet[i].checked === true) {
            saude[i] = vet[i].value;

        }
    }
    saude = saude.filter(function (elem) {
        return elem != null;
    });

    console.log(saude);


    cont++;
    let pessoa = Pessoa.criaPessoa(cont,
        document.querySelector("input#nome").value,
        document.querySelector("input#cep").value,
        document.querySelector("input#estado").value,
        document.querySelector("input#cidade").value,
        document.querySelector("input#rua").value,
        document.querySelector("input#bairro").value,
        document.querySelector("input#numero").value,
        document.querySelector("input#celular").value,
        document.querySelector("input#peso").value,
        document.querySelector("input#altura").value,
        saude


    );
    pessoas.push(pessoa);
    event.preventDefault();
    manipulaPessoa(pessoa);
});

document.querySelector("#formapessoae").addEventListener("submit", function (event) {
    let saude = [];
    let vet = document.querySelectorAll("input.saude2")
    console.log(vet);

    for (let i = 0; i < vet.length; ++i) {
        if (vet[i].checked === true) {
            saude[i] = vet[i].value;
        }
    }
    saude = saude.filter(function (elem) {
        return elem != null;
    });
    let id = document.querySelector("input#ide").value - 1;
    console.log(pessoas[id]);

    pessoas[id].nome = document.querySelector("input#nomee").value;
    pessoas[id].cep = document.querySelector("input#cepe").value;
    pessoas[id].estado = document.querySelector("input#estadoe").value;
    pessoas[id].cidade = document.querySelector("input#cidadee").value;
    pessoas[id].rua = document.querySelector("input#ruae").value;
    pessoas[id].bairro = document.querySelector("input#bairroe").value;
    pessoas[id].numero = document.querySelector("input#numeroe").value;
    pessoas[id].telefone = document.querySelector("input#telefonee").value;
    pessoas[id].peso = document.querySelector("input#pesoe").value;
    pessoas[id].altura = document.querySelector("input#alturae").value;
    pessoas[id].probSaude = saude;

    console.log(pessoas[id]);
    

    event.preventDefault();

});

function editaPessoas(id) {
    editaPessoa(pessoas[id - 1])

}
function deletaPessoas(id) {
    pessoas.splice(id - 1, 1);
    deletaPessoa(pessoas[id - 1])
}
function visializarPessoas(id) {
    visializarPessoa(pessoas[id - 1])
}
///utilizado para pegar o post e get usando javascript vanilla