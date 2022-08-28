/* O QUE DEVE SER FEITO:
1. TODO: Receber dados e enviar dados para a API.
2. TODO: Excluir dados que vem da API.
*/
/* let url = '/api' */
let formulario = document.getElementById('formUser');


const resgister = async () => {
    // 1. Listar os produtos que vem da API
    try {
        let response = await fetch(url); // Buscando a URL da API.
        if(response.ok){ 
            let json = await response.json(); // Buscando os dados da api no formato JSON
            console.log(json)
        }
    }
    catch(err) {
        console.log(`Algo de errado não está certo! Erro: ${err}`)
    }
}

// 2. Criar item dentro da APi
//POST
const addUser = async () => {
   formulario && formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        let userName = document.getElementById('textNome')[0].value
        let userCpf= document.getElementById('txtCPF')[0].value
        let userDate = document.getElementById('txtDateNascimento')[0].value
        let userEmail = document.getElementById('textEmail')[0].value
        let userTel = document.getElementById('textTelefone')[0].value
        let userCep = document.getElementById('txtCEP')[0].value
        let userNumber = document.getElementById('textNumero')[0].value
        let userComplement = document.getElementById('textComplemento')[0].value
        let userReference = document.getElementById('txtReferencia')[0].value
        let userPassword = document.getElementById('txtSenha')[0].value
        let userCheckbox = document.getElementById('chkPromocoes')[0].value

        const dataForm = 
        {
            name: userName,
            cpf: userCpf,
            date: userDate,
            email: userEmail,
            tel: userTel,
            cep: userCep,
            number: userNumber,
            complement: userComplement,
            reference: userReference,
            password: userPassword,
            checkbox: userCheckbox
        }

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dataForm)
        }
    
        try {
            let response = await fetch(url, settings);
            if(response.ok){
                console.log(await response.json())
            }
        }
        catch(err) {
            console.log('O produto não foi criado no banco de dados')
        }
    })

    
}

const detailProduct = async () => {

    try {
        let response = await fetch(url);
        if(response.ok){
            console.log(await response.json())
        }
    }
    catch(err) {
        console.log('Falha ao tentar detalhar o produto!')
    }
}


/* addProduct()
getProducts() */
// 1. Quando a view estiver pronta reconfigurar essa linha para receber do body e descomentar
addUser()