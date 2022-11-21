import express = require("express");

export class UserController {
    static handle(res: express.Response): void {
        res.send('A rota para se testar o funcionamento é localhost:3000/customerk tanto POST quanto GET');
    }
}
