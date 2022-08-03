const formLogin = document.querySelector('.formLogin')

/*
Esta api deverá ser realizada para conectar com a api de usuários e verificar com o JSON retornado
se o email e senha dos inputs são compatíveis com o JSON (email e senha do usuário.)
*/

// const authLogin =  async () => {
//     const url = '/users/api'

//     formLogin.addEventListener('submit', (e) => {
//         e.preventDefault()
//         const inputEmail = document.getElementsByName('email')[0].value
//         const inputPassword = document.getElementsByName('password')[0].value

//         const settings = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//         }
//         // Preciso buscar todos os usuários utilizando fetch e comparar os valores de email e password.
//         fetch(url, settings)
//         .then(response => response.json())
//         .then(users => {
//             users.map(user => {
//                 if(user.email === inputEmail ){
                    
//                 }
//             })
//         })


//     })
// }

// authLogin()