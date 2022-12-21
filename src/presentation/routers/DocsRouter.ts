import "reflect-metadata";
import { Router } from "express";

import { inject, injectable } from "tsyringe";

import { DocsController } from "../controllers/DocsController";

@injectable()
export class DocsRouter {
    private _router: Router = Router();
    constructor(
        @inject('DocsController') private docsController: DocsController,

    ) { }
    setup(): Router {
        this._router.use("/", this.docsController.initDocs);

        this._router.get("/", this.docsController.makeDocs);

        return this._router;
    }
}