import Config from "config";
import Conf from "conf";
import expect from "cha";

describe("Config", () => {
    it("should be an instance of conf", () => {
        expect(Config).to.be.an.instanceOf(Conf);
    });
});
