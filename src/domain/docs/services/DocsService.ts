import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { serve, setup } from 'swagger-ui-express';
import YAML from 'yamljs';
import { join } from 'path';

@injectable()
export class DocsService {
    public initDocs = serve;

    public makeDocs =
        setup(
            YAML.load(join(__dirname, '..', '..', '..', '..', '..', 'docs', 'index.yaml'))
        );
}