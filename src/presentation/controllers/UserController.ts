import express = require("express");

export class UserController {
    static handle(req: express.Request, res: express.Response): void {
        res.send('A rota para se testar o funcionamento é localhost:3000/customer tanto POST quanto GET');
    }
}
