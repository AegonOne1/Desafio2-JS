
function verifyPass(){
    const pass1 = document.getElementById('password1').value
    const pass2 = document.getElementById('password2').value
    const pass3 = document.getElementById('password3').value
    
    const key = pass1 + pass2 + pass3

    const paragraph = document.getElementById('paragraph')

    if (key == 911){
        paragraph.textContent = "Contraseña 1 Correcto"
        console.log("password 1 correct")
    } else if (key == 714){
        paragraph.textContent = "Contraseña 2 Correcto"
        console.log("password 2 correct")
    } else {
        paragraph.textContent = "Contraseña Incorrecto"
        console.log("password incorrect")
    }
}