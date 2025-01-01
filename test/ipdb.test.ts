import { expect } from "chai";
import createDatabase from "../src/ipdb";
import _ from "lodash";

describe("ipdb", function () {
    it("should export createDatabase function by default", function () {
        expect(_.isFunction(createDatabase)).to.be.true;
    });
});
