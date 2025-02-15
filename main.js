function mostrarSenha(){
    var inputPass = document.getElementById ('isenha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
       inputPass.setAttribute('type','text')
       btnShowPass.classList.replace('fa-eye-slash','fa-eye')
    }
    else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('fa-eye','fa-eye-slash')
    }
}