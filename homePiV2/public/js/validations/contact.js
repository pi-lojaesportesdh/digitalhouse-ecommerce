window.onload = function(){
    console.log("loaded page")
}
const formulario = document.querySelector('#contactConfirm')
const inputEmail = document.getElementById('txtEmail')
const inputName = document.getElementById('textNome')
const inputMessege = document.getElementById('txtMensagem')

// Essa função poderá ser utilizada em qlq
const showPopup = (err) => {
    return   Swal.fire({
      icon: 'error',
      html: `<li><b>${err}</b></li>`,
    })
}

const validationsInputs = (inputEmail, inputName, inputMessege) => {
    /* 
    1. Irei validar se o campo email e senha estão vazios.
    2. Se caso estiver vazio irei enviar um pop-up contendo a msg de erro.
    3. O que eu preciso fazer é que o pop-up o text dentro dele seja universal e esteja aberto a receber o erro de uma ou de outra validação
    */
     if(inputName == '' ){
        let msgError = 'Quem vc seria??!'
        return showPopup(msgError)
    } 

    if(!inputEmail.value || inputEmail == ''){
        let msgError = 'O email não pode ser vazio'
        return showPopup(msgError)
    }   
    if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1 || (inputEmail.value.indexOf('.') - inputEmail.value.indexOf('@') ==1)){
        let msgError = 'Email invalido'
        return showPopup(msgError)
    }
    if(inputMessege.value.length <= 15) {
     let msgError = 'Conteúdo indescrito ...'
     return showPopup(msgError)
    }

  }

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validationsInputs(
        inputEmail,
        inputMessege,
        inputName
         )
}
)

