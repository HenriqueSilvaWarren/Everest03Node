import { customContainer } from "../di"
import { CustomerRouter } from "../presentation/routers/CustomerRouter"

describe('CustomerRouter', () => {
    it('Should return a router when setup is called', () => {
        const customerRouter = customContainer.resolve(CustomerRouter);

        const router = costumerRouter.setup();

        expect(router).toBe(costumerRouter.setup());
    })
})