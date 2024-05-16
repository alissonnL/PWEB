function validar(){
    if((document.forms.elements[3].contains("@") && document.forms.elements[3].contains("."))){
    }else{
        alert("Digite um endereço de e-mail válido");
    }
    if(document.getElementById("comentario").value.length() < 20){
        alert("Comentário deve um mínimo de 20 caracteres");
    }
    
    if(document.getElementById("radioNao").checked){
        document.getElementById("retorno").value = "Que bom que "
        + "você voltou a visitar esta página!"
    }else{
        document.getElementById("retorno").value = "Volte sempre à "
        + "esta página!"
    }
}