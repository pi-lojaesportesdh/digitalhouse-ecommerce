window.onload = function(){
    console.log("loaded page")}
    
const formulario = document.querySelector('.formUser')
const inputFullName = document.getElementById('textNome')
const inputCpf = document.getElementById('txtCPF')
const inputDate = document.getElementById('txtDateNascimento')
const inputEmail = document.getElementById('textEmail')
const inputTel = document.getElementById('textTelefone')
const inputCep = document.getElementById('txtCEP')
const inputHouseNumber = document.getElementById('textNumero')
const inputComplement = document.getElementById('textComplemento')
const inputReference = document.getElementById('txtReferencia')
const inputPassword = document.getElementById('txtSenha')
const inputPromotions = document.getElementById('chkPromocoes')




const showPopup = (err) => {
    return   Swal.fire({
      icon: 'error',
      html: `<li><b>${err}</b></li>`,
    })
}





const validationsInputs = (inputFullName,
    inputCpf,
    inputDate,
    inputEmail,
    inputTel,
    inputCep,
    inputHouseNumber,
    inputComplement,
    inputReference,
    inputPassword,
    inputPromotions) => {
        // 1 validar os campos vazios!!
    if(!inputFullName.value || inputFullName == '' && !inputCpf.value || inputCpf == '' && !inputDate.value || inputDate == '' && !inputEmail.value || inputEmail == '' && !inputTel.value || inputTel == '' && !inputCep.value || inputCep == '' && !inputHouseNumber.value || inputHouseNumber == ''  && !inputComplement.value || inputComplement == '' && !inputReference.value || inputReference == '' && !inputPassword.value || inputPassword == '' && !inputPromotions.value || inputPromotions == ''  ){
        let msgError = 'Os campos não podem estar vazios!'
        return showPopup(msgError)
    }
    //email
    if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1 || (inputEmail.value.indexOf('.') - inputEmail.value.indexOf('@') ==1)){
        let msgError = 'Email invalido'
        return showPopup(msgError)
    }
    //senha
    if(inputPassword.value.length <= 5 ) {
     let msgError = 'Senha Invalida'
     return showPopup(msgError)
    }

    //cpf 
    if(inputCpf.value.length <= 10  || inputCpf.value.length >= 12 ) {
        let msgError = 'cpf Invalido'
        return showPopup(msgError)
       }

       //telefone
       if(inputTel.value.length <11  || inputTel.value.length >= 12 ) {
        let msgError = 'Telefone Invalido'
        return showPopup(msgError)
       }
    //cep
    if(inputCep.value.length <8  || inputCep.value.length >= 9 ) {
        let msgError = 'Cep Invalido'
        return showPopup(msgError)
       }
       //numero
       if(!inputHouseNumber.value || inputHouseNumber == ''  ) {
        let msgError = 'Insira o número por favor'
        return showPopup(msgError)
       } 

}








formulario.addEventListener('submit', (e) => {
    console.log('até aqui foi')
    console.log(e)
     e.preventDefault();

    validationsInputs(
        inputFullName,
        inputCpf,
        inputDate,
        inputEmail,
        inputTel,
        inputCep,
        inputHouseNumber,
        inputComplement,
        inputReference,
        inputPassword,
        inputPromotions) 
}

)

