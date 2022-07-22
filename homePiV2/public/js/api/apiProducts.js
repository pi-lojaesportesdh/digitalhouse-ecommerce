/* O QUE DEVE SER FEITO:
1. TODO: Receber dados e enviar dados para a API.
2. TODO: Excluir dados que vem da API.
*/
let url = '/api'

let objTeste = {
    nome: 'Teste de consumo API',
    descricao: 'Produto 10x mais chave',
    valor: '90'

}

const getApi = async () => {
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
const addItemApi = async () => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(objTeste)
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
}


getApi()
addItemApi()