import { expect } from "chai";
import DatabaseActions from "../src/ipdb";
import _ from "lodash";

describe("ipdb", function () {
    it("should export the DatabaseActions class by default", function () {
        expect(_.isFunction(DatabaseActions)).to.be.true;
    });

    describe("DatabaseActions class", function () {
        describe("#create", function () {
            it("should create a database in the Iterativa ecosystem", async function () {
                const dba = new DatabaseActions();
                const result = await dba.execute("create", { name: "users" });
                expect(result.log).to.contain("users");
            });
        });
    });
});
