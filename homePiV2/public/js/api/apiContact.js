const formContact = document.querySelector('#contactConfirm')

const contact = async () => {
    formContact && formContact.addEventListener('submit', async (e) => {
        let name = document.getElementsById('textNome')[0].value
        let messege = document.getElementById('txtMensagem')[0].value
        let email = document.getElementById('txtEmail')[0].value


         e.preventDefault();
 
         const dataForm = 
         {
            name,
            messege,
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

contact()