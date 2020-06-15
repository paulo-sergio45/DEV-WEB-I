
function manipulaPessoa(pessoa) {
    var tabela = document.querySelector("tbody#tabpessoa");

    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr" + pessoa.getId());

    tr.innerHTML = `
<td>${pessoa.getNome()}</td>
<td>${pessoa.getEstado()}</td>
<td>${pessoa.getCidade()}</td>
<td>${pessoa.getBairro()}</td>
<td>${pessoa.getTelefone()}</td>
<td>

<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-teal  modal-trigger" href="#modal1" id="edit"> <i class="material-icons teal-text text-accent-2 " onClick=editaPessoas(${pessoa.getId()})>edit</i></a>

<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-red  modal-trigger" href="#modal2" id="delete" > <i class="material-icons  red-text text-accent-2 " onClick=deletaPessoas(${pessoa.getId()})>delete</i></a>

<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-blue  modal-trigger" href="#modal3" id="visibility"> <i class="material-icons blue-text text-accent-2" onClick=visializarPessoas(${pessoa.getId()})>visibility</i></a></td>
`;
    tabela.insertBefore(tr, null);

}
function editaPessoa(pessoa) {
    document.querySelector("#ide").value = pessoa.id
    document.querySelector("#nomee").value = pessoa.nome
    document.querySelector("#cepe").value = pessoa.cep
    document.querySelector("#estadoe").value = pessoa.estado
    document.querySelector("#cidadee").value = pessoa.cidade
    document.querySelector("#ruae").value = pessoa.rua
    document.querySelector("#bairroe").value = pessoa.bairro
    document.querySelector("#numeroe").value = pessoa.numero
    document.querySelector("#telefonee").value = pessoa.telefone
    document.querySelector("#pesoe").value = pessoa.peso
    document.querySelector("#alturae").value = pessoa.altura

    document.querySelector("#saude1").checked = false;
    document.querySelector("#saude3").checked = false;
    document.querySelector("#saude4").checked = false;
    document.querySelector("#saude5").checked = false;
    document.querySelector("#saude6").checked = false;
    document.querySelector("#saude7").checked = false;
    document.querySelector("#saude8").checked = false;
    document.querySelector("#saude9").checked = false;
    document.querySelector("#saude10").checked = false;
    document.querySelector("#saude11").checked = false;
    document.querySelector("#saude12").checked = false;
    document.querySelector("#saude13").checked = false;
    document.querySelector("#saude14").checked = false;

    for (let i = 0; i < pessoa.probSaude.length; i++) {

        switch (pessoa.probSaude[i]) {
            case "1":
                document.querySelector("#saude1").checked = true;

                break;
            case "2":
                document.querySelector("#saude2").checked = true;

                break;
            case "3":
                document.querySelector("#saude3").checked = true;

                break;
            case "4":
                document.querySelector("#saude4").checked = true;

                break;
            case "5":
                document.querySelector("#saude5").checked = true;

                break;
            case "6":
                document.querySelector("#saude6").checked = true;

                break;
            case "7":
                document.querySelector("#saude7").checked = true;

                break;
            case "8":
                document.querySelector("#saude8").checked = true;

                break;
            case "9":
                document.querySelector("#saude9").checked = true;

                break;
            case "10":
                document.querySelector("#saude10").checked = true;

                break;
            case "11":
                document.querySelector("#saude11").checked = true;

                break;
            case "12":
                document.querySelector("#saude12").checked = true;

                break;
            case "13":
                document.querySelector("#saude13").checked = true;

                break;
            case "14":
                document.querySelector("#saude14").checked = true;

                break;

            default:

        }
    }


}
function deletaPessoa() {
    let url = new URL(window.location.href);

    let id = url.searchParams.get("id");

    document.querySelector("tr#tr" + id).remove();

    url.searchParams.delete('id');

    window.history.pushState({}, document.title, url);

    removePessoas(id)
}
function visializarPessoa(pessoa) {

    document.querySelector("P#idv").innerHTML = pessoa.id
    document.querySelector("P#nomev").innerHTML = pessoa.nome
    document.querySelector("P#cepv").innerHTML = pessoa.cep
    document.querySelector("P#estadov").innerHTML = pessoa.estado
    document.querySelector("P#cidadev").innerHTML = pessoa.cidade
    document.querySelector("P#ruav").innerHTML = pessoa.rua
    document.querySelector("P#bairrov").innerHTML = pessoa.bairro
    document.querySelector("P#numerov").innerHTML = pessoa.numero
    document.querySelector("P#telefonev").innerHTML = pessoa.telefone
    document.querySelector("P#pesov").innerHTML = pessoa.peso
    document.querySelector("P#alturav").innerHTML = pessoa.altura
    let texto = " ";
    let textos = " ";

    for (let i = 0; i < pessoa.probSaude.length; i++) {

        switch (pessoa.probSaude[i]) {
            case "1":
                textos = texto.concat("<br> Pessoas idosas");
                texto = textos;
                break;
            case "2":
                textos = texto.concat("<br> Doença cardíaca");
                texto = textos;
                break;
            case "3":
                textos = texto.concat("<br> Doença pulmonar");
                texto = textos;
                break;
            case "4":
                textos = texto.concat("<br> Neoplasias ou hipertensão arterial");
                texto = textos;
                break;
            case "5":
                textos = texto.concat("<br> Outras doenças crónicas");
                texto = textos;
                break;
            case "6":
                textos = texto.concat("<br> Tratamentos de quimioterapia");
                texto = textos;
                break;
            case "7":
                textos = texto.concat("<br> Artrite reumatoide");
                texto = textos;
                break;
            case "8":
                textos = texto.concat("<br>  Lúpus");
                texto = textos;
                break;
            case "9":
                textos = texto.concat("<br>  Esclerose múltipla");
                texto = textos;
                break;
            case "10":
                textos = texto.concat("<br>  Doenças inflamatórias do intestino");
                texto = textos;
                break;
            case "11":
                textos = texto.concat("<br>  VIH/sida");
                texto = textos;
                break;
            case "12":
                texto.concat("<br> Doentes transplantados");
                texto = textos;
                break;
            case "13":
                textos = texto.concat("<br> Imunodeficiências e doenças autoimunes");
                texto = textos;
                break;
            case "14":
                textos = texto.concat("<br> Outras");
                texto = textos;
                break;

            default:
        }
    }


    document.querySelector("P#saudev").innerHTML = texto;
}
