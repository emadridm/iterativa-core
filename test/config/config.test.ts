import assert from "assert";
import Config from "../../src/config/config.js";

describe("Config", () => {
    it("should let setting the fullname property", () => {
        const config = new Config();
        assert.doesNotThrow(() => {
            config.set("fullname", "Enrique Madrid");
        });
    });

    it("should let setting the email property", () => {
        const config = new Config();
        assert.doesNotThrow(() => {
            config.set("email", "emadridm@gmail.com");
        });
    });

    it("should not let setting any other property", () => {
        const config = new Config();
        assert.throws(() => {
            config.set("foo", "bar");
        });
    });
});
