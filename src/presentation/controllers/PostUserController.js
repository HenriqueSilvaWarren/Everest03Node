const { Users } = require('../../domain/user/mocks/UserMock');
let service = require('../../domain/user/services/UserService');

class PostUserController {
    handle(req, res) {
        try {
            let user = req.body;
            service.checkForNull(user, res);
            service.checkForTyping(user, res)
            user.birthdate = new Date(user.birthdate);
            service.checkIfEmailsMatch(user.email, user.email_confirmation, res);
            service.checkIfCpfIsValid(user.cpf, res);

            Users.push(user);
            res.send(`Usuário criado com sucesso!`);
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
            res.status(400).send(error.message);
        }
    }
}

exports.PostUserController = new PostUserController();