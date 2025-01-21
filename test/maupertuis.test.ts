import { expect } from "chai";
import { ActionResult } from "../src/maupertuis";
import Acctions from "../src/maupertuis";

class SomeClass extends Acctions {
    constructor() {
        super();
    }

    public someAction(options: any): Promise<ActionResult> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (options.param === "success") {
                    resolve({ log: "ok" });
                } else {
                    reject({ log: "fail" });
                }
            }, 2000);
        });
    }
}

describe("Maupertuis", function () {
    describe("Actions", function () {
        describe("#execute()", function () {
            it("should execute any subclass method of type (options: ActionOptions): Promise<ActionResult>", async function () {
                const someInstance = new SomeClass();
                const result = await someInstance.execute("someAction", {
                    param: "success",
                });
                expect(result.log).to.be.equal("ok");
            });

            it('should return "the action (class method) does not exists"', async function () {
                const someInstance = new SomeClass();
                const result = await someInstance.execute(
                    "thisMethodDoesNotExist",
                );
                expect(result.message).to.be.equal(
                    "the action (class method) does not exist",
                );
            });
        });
    });
});
