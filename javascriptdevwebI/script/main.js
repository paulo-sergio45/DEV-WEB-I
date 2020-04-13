function incluiNegoci() {
    var datainpu= document.querySelector("input#data"); 
    var quantidadeinpu = document.querySelector("input#quantidade"); 
    var valorinpu = document.querySelector("input#valor");
    var tabela = document.querySelector("tbody#tabatual");
    console.log(tabela);
    
    console.log(quantidadeinpu.value);

    var tr = document.createElement("tr");
    var tddata = document.createElement("td");
    var tdquantidade = document.createElement("td");
    var tdvalor = document.createElement("td");


tddata.appendChild(document.createTextNode(datainpu.value))
tdquantidade.appendChild(document.createTextNode(quantidadeinpu.value))
tdvalor.appendChild(document.createTextNode(valorinpu.value))



if (tabela.children.length === 0) {
    tabela.insertBefore(tr,null);
}else{
    tabela.insertBefore(tr,tabela.children[0]);
}

tr.insertBefore(tddata,null);
tr.insertBefore(tdquantidade,null);
tr.insertBefore(tdvalor,null);
 
}
