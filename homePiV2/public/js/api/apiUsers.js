const url = '/users/api'
const formUser = document.querySelector('.formUser')

const addUser = async () => {
    formUser && formUser.addEventListener('submit', async (e) => {
        let name = document.getElementsByName('nomeCompleto')[0].value
        let senha = document.getElementsByName('password')[0].value
        let email = document.getElementsByName('email')[0].value

         e.preventDefault();
 
         const dataForm = 
         {
            name,
            senha,
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

 addUser()