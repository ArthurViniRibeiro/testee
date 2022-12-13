function clickentrar(event){
    let $cadastrar = document.querySelector('.caixa-cadastro')
    let $entrar = document.querySelector('.caixa-login')
    $entrar.style.display="flex";
    $cadastrar.style.display="";
}

function clickcadastro(event){
    let $entrar = document.querySelector('.caixa-login')
    let $cadastrar = document.querySelector('.caixa-cadastro')
    $cadastrar.style.display="flex";
    $entrar.style.display="";
}

function cadastrar(event){

    event.preventDefault()
    var usuariosexis = JSON.parse(localStorage.getItem('usuarios') || "[]")
    var seexisusuario = false;

    var novousuario={
        email:event.target.email.value,
        senha:event.target.senha.value
    }

    for (let i = 0; i < usuariosexis.length; i++) {
        console.log(usuariosexis[i]) 
        if(usuariosexis[i].email === novousuario.email){
            seexisusuario = true;
        }
    }

    if(!seexisusuario){
        usuariosexis.push(novousuario)
        usuariosexis = JSON.stringify(usuariosexis)
        localStorage.setItem('usuarios',usuariosexis)
        window.open('inicio.html')
    }else{
        alert('seu cadastro ja existe')
    }
}

function entrar(event){

    event.preventDefault()
    var usuariosexis = JSON.parse(localStorage.getItem('usuarios') || "[]")
    var seexisusuario = false;
    var senhausuario = false;

    var novousuario={
        email:event.target.emailSenha.value,
        senha:event.target.senha2.value
    }

    console.log(novousuario)
    for (let i = 0; i < usuariosexis.length; i++) {
        console.log(usuariosexis[i]) 
        if(usuariosexis[i].email === novousuario.email){
            seexisusuario = true;
        }
        if(usuariosexis[i].senha === novousuario.senha){
            senhausuario = true;
        }
    }

    if(seexisusuario){
        if(senhausuario){
            window.open('inicio.html')
        }
    }else{
        alert('faça um cadastro primeiro')
    }

}