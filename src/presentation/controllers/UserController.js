class UserController {

    handle(req, res, next) {
        res.sendFile('C:/Users/henrique.silva_warre/Desktop/Everest03Node/src/presentation/html/index.html');
    }

    postUser(req, res, next) {
        var name = req.body.name;
        var email = req.body.email;
        res.send(`User name = ${name}, email is ${email}`);
    }
}

module.exports = new UserController();