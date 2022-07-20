const form = document.querySelector('form')
const inputEmail = document.querySelector('input[name="email"]')
const inputPassword = document.getElementsByName('password')[0]

// Essa função poderá ser utilizada em qlq
const showPopup = (err) => {
    return   Swal.fire({
      icon: 'error',
      html: `<li><b>${err}</b></li>`,
    })
}

const validationsInputs = (inputEmail, inputPassword) => {
    /* 
    1. Irei validar se o campo email e senha estão vazios.
    2. Se caso estiver vazio irei enviar um pop-up contendo a msg de erro.
    3. O que eu preciso fazer é que o pop-up o text dentro dele seja universal e esteja aberto a receber o erro de uma ou de outra validação
    */
    if(!inputEmail.value || inputEmail == '' && !inputPassword.value || inputPassword == ''){
        let msgError = 'O email e senha não podem ser vazios!'
        return showPopup(msgError)
    }
    if(!inputPassword.value || inputPassword == ''){
        let msgError = 'A senha não pode ser vazia'
        return showPopup(msgError)
    }

    if(!inputEmail.value || inputEmail == ''){
        let msgError = 'O email não pode ser vazio'
        return showPopup(msgError)
    }   

  }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validationsInputs(inputEmail, inputPassword)
})

export {showPopup}