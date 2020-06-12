///utilizado para pegar o post usando javascript vanilla
Pessoa = new Pessoa;
var cont = 0;
var saude = []
document.querySelector("#formapessoa").addEventListener("submit", function (event) {

    
    let vet = document.querySelectorAll("input.saude")
    // cheked === false parti daki XD kkkkkkkk

    console.log(event);
    event.preventDefault();
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
        saude
    );
    console.log(cont);
    manipulaPessoa(pessoa)
})
///utilizado para pegar o post usando javascript vanilla


