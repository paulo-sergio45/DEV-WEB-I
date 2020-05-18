document.querySelector(".form").addEventListener("submit",function(event){
    console.log(event);
    event.preventDefault();
    incluiNegoci();
})

function incluiNegoci() {
    var data = document.querySelector("input#data");
    var quantidade = document.querySelector("input#quantidade");
    var valor = document.querySelector("input#valor");
    var tabela = document.querySelector("tbody#tabatual");
    var total = quantidade.value*valor.value;

    var tr = document.createElement("tr");
 
 
tr.innerHTML = `
<td>${data.value}</td>
<td>${quantidade.value}</td>
<td>${valor.value}</td>
<td>${total}</td>
`;

    if (tabela.children.length === 0) {
        tabela.insertBefore(tr, null);
    } else {
        tabela.insertBefore(tr, tabela.children[0]);
    }

   

}
