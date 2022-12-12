import { Routes } from "../presentation/Routes";
import { customContainer } from "../di"

describe('Routes', () => {
    it('Should return a router when setupRouter is called', () => {
        const costumerRouter = customContainer.resolve(Routes);

        const router = customerRouter.setupRouter();

        expect(router).toBe(customerRouter.setupRouter());
    })
})