class UserController {

    handle(req, res, next) {
        res.send("Hello World!");
    }
}

module.exports = new UserController();