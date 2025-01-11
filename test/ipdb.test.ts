import { expect } from "chai";
import Database from "../src/ipdb";
import _ from "lodash";
import { notStrictEqual } from "assert";

describe("ipdb", function () {
    it("should export the Database class by default", function () {
        expect(_.isFunction(Database)).to.be.true;
    });

    describe("Database class", function () {
        describe("#open", function () {
            it("should open an OrbitDB instance", function () {
                // const db = new Database();
                // await db.open();
                // notStrictEqual(db.orbitdb, undefined);
                // expect(typeof db.orbitdb).to.be.equal("object");
                // await db.close();
            });
        });
    });
});
