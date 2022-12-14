import 'reflect-metadata';
import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { CustomerRouter } from "./routers/CustomerRouter";

@injectable()
export class Routes {
    router: Router = Router();

    constructor(
        @inject('CustomerRouter') private customerRouter: CustomerRouter,
    ) {

    }

    public setupRouter(): Router {
        this.router.use('/customer', this.customerRouter.setup());
        return this.router;
    }
}