import 'reflect-metadata';
import { DocsService } from '../../domain/docs/services/DocsService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DocsController {
    constructor(
        @inject('DocsService') private docsService: DocsService
    ) {
        
    }

    public initDocs = this.docsService.initDocs;

    public makeDocs = this.docsService.makeDocs;

}