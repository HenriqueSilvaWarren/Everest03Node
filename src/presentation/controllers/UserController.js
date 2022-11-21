class UserController {
    handle(res) {
        res.send('A rota para se testar o funcionamento é localhost:3000/customer');
    }
}

exports.UserController = new UserController();;