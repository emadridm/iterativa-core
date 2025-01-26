import { expect } from "chai";
import { CreateDatabase } from "../../src/ipdb";

describe("IPDB", function () {
    describe("CreateDatabase", async function () {
        const action = new CreateDatabase({ name: "test" });
        const status = await action.run();
        expect(status.message).to.equal("db test created");
    });
});
