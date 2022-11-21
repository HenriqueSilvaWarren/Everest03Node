const { Users } = require('../../domain/user/mocks/UserMock');

class GetUserController {
    handle(req, res) {
        res.send(Users);
    }
}

exports.GetUserController = new GetUserController();