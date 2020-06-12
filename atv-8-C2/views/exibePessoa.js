
function manipulaPessoa(pessoa) {
    var tabela = document.querySelector("tbody#tabpessoa");


    var tr = document.createElement("tr");


    tr.innerHTML = `
<td style="display:none;">${pessoa.getId()}</td>
<td>${pessoa.getNome()}</td>
<td>${pessoa.getEstado()}</td>
<td>${pessoa.getCidade()}</td>
<td>${pessoa.getBairro()}</td>
<td>${pessoa.getTelefone()}</td>
<td><a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-teal modal-trigger" href="#modal1"> <i class="material-icons teal-text text-accent-2 ">edit</i></a>
<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-red modal-trigger" href="#modal2"> <i class="material-icons  red-text text-accent-2 ">delete</i></a>
<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-blue modal-trigger" href="#modal3"> <i class="material-icons blue-text text-accent-2">visibility</i></a></td>
`;

   
        tabela.insertBefore(tr, null);
   

}