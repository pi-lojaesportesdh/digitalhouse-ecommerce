/* const url = '/login/api' */
const formLogin = document.querySelector('.formLogin')


const regist = async () => {
    formLogin && formLogin.addEventListener('submit', async (e) => {
        let password = document.getElementsByName('password')[0].value
        let email = document.getElementsByName('email')[0].value

        e.preventDefault();

        const dataForm = 
        {
           password,
           email
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
            console.log('O usuário não foi criado no banco de dados')
        }
    })

    
}

regist()


