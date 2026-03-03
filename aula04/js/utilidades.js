/*

Arquivos: 
=> utilidades.js ( arquivo com funções javascript)

*/

//Funcao para juntar nome e sobrenome .
function juntarNome(){
    let nome =  document.getElementById("nome").value //document nome generico para se referir a pagina atual
    let sobrenome = document.getElementById("sobrenome").value
    
    //1. Concatenação strings nomral.
    let nomecompleto = nome + ' ' + sobrenome

    //2. Uso de interpolacao strings 
    let nomecompleto1 = `<i>${nome} <br>${sobrenome} </i>`
    
    //3. Injetar texto da variavel nomecompleto na tag <p> cujo id é "nomecompleto" 
    document.getElementById("nomecompleto").innerText = nomecompleto;

    //3. Injetar texto da variavel nomecompleto na tag <p> cujo id é "nomecompleto1" 
    document.getElementById("nomecompleto1").innerHTML = nomecompleto1


}

