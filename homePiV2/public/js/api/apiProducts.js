const getApi = async () => {
    let url = '/api'


    // Listar os produtos que vem da API
    try {
        let response = await fetch(url);
        if(response.ok){
            let json = await response.json();
            console.log(json)
        }
    }
    catch {
        console.log('Algo de errado não está certo!')
    }
}

getApi()