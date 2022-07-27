const fs = require('fs');
const path = require('path')
// Responsável por realizar a criação de usuários dentro do futuro banco de dados
// (Modelagem do banco de dados de usuários precisa ser feita para a criação de usuários ser possível)
// Verificando a possibilidade de realizar a criação de usuários através de uma API.

const User = {
    // Indicando o caminho para a criação do usuário. (Deverá ser substituido para o banco de dados real)
    fileName: path.resolve(__dirname, 'users.json'),

    create: function(userData) {
        let allUsers = this.getUsers();
        // Criação do novo usuário, gerando ID, puxando os dados de userData, declarando a role como default
        let newUser = {
            id: this.generateId(),
            ...userData,
            role: 'default'
        }

        // Inserindo usuário novo dentro de allUsers
        allUsers.push(newUser);
        // Lendo arquivo e pondo dentro do JSON users
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;

    },

    // Gerador de ID
    generateId: function() {
        let allUsers = this.getUsers();
        let lastUser = allUsers.pop();

        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    // Buscar todos os usuários no JSON 
    getUsers: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    // Achar usuário pelo ID
    findUserById: function (id) {
        let allUsers = this.getUsers;
        let userFound = allUsers.find( oneUser => oneUser.id === id );
        return userFound;
    },
    
    // Achar usuário pelo campo (email, senha etc...)
    findUserByField: function( field, value ) {
        let allUsers = this.getUsers();
        let userFound = allUsers.find( oneUser => oneUser[field] === value);
        return userFound;
    },

}

module.exports = User;