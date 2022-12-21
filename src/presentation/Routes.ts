import 'reflect-metadata';
import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { CustomerRouter } from "./routers/CustomerRouter";
import { DocsRouter } from './routers/DocsRouter';

@injectable()
export class Routes {
    router: Router = Router();

    constructor(
        @inject('CustomerRouter') private customerRouter: CustomerRouter,
        @inject('DocsRouter') private docsRouter: DocsRouter,
    ) { }

    public setupRouter(): Router {
        this.router.use('/customer', this.customerRouter.setup());
        this.router.use('/', this.docsRouter.setup());

        return this.router;
    }
}