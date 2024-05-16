function validar(){
    if(document.formulario.elements["nome"].value.length < 10){
        alert("Nome inválido!");
        return false;
    }


    if(document.formulario.elements["email"].value.indexOf("@") == -1 || document.formulario.elements["email"].value.indexOf(".") == -1){
        alert("Digite um endereço de e-mail válido");
        return false;
    }

    if(document.getElementById("comentario").value.length < 20){
        alert("Comentário deve ter um mínimo de 20 caracteres");
        return false;
    }

    if(document.getElementById("retorno").innerText == ""){
        alert("Escolha uma alternativa para a pesquisa");
        return false
    }

    return true;
}

function addText(){
    if(document.getElementsByName("radios")[1].checked){
        document.getElementById("retorno").innerText = "Que bom que "
        + "você voltou a visitar esta página!"
    }else{
        document.getElementById("retorno").innerText = "Volte sempre à "
        + "esta página!"
    }
}