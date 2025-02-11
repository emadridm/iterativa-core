import { expect } from "chai";
import { CreateDatabase } from "../src/ipdb";

describe("IPDB", function () {
    describe("CreateDatabase", function () {
        it("should create a document database named test", async function () {
            const action = new CreateDatabase({ dbName: "test" });
            const status = await action.run();
            expect(status.actionStatus).includes("test");
        });
    });
});
