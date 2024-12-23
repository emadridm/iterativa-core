import { expect } from "chai";
import { Schema } from "../src/schema";

describe("Schema", () => {
    it("should create a new JSON schema instance of Schema", () => {
        const schema = new Schema();
        expect(schema).to.be.an.instanceof(Schema);
    });

    it("should create a new JSON schema version 2020-12 by default", () => {
        const schema = new Schema();
        expect(schema.toJSONSchema()["$schema"]).to.equal(
            "https://json-schema.org/draft/2020-12/schema",
        );
    });
});
