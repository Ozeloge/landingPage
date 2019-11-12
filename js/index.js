function redirect(){
    alert("Este boton te llevaría a la web oficial pero no existe :(")
}
function sendEmail(){
    email = $("#email").val()
    if(email.toString() != '' )
        alert("Esto no aparecería, Te mandaríamos un correo a " + email)
}