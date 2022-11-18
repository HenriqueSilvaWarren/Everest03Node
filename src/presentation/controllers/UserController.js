const { Users } = require('../../domain/user/mocks/UserMock');
let service = require('../../domain/user/services/UserService');

class UserController {

    handle(res) {
        res.send('A rota para se testar o funcionamento é localhost:3000/customer');
    }

    postUser(req, res) {
        try {
            let user = req.body;

            user.birthdate = new Date(user.birthdate);

            service.checkForNull(user, res);
            service.checkForTyping(user, res)
            service.checkIfEmailsMatch(user.email, user.email_confirmation, res);
            service.checkIfCpfIsValid(user.cpf, res);

            Users.push(user);
            res.send(`Usuário criado com sucesso!`);
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }

    getUser(req, res) {
        res.send(Users);
    }
}

exports.UserController = new UserController();;