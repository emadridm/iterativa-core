import { expect } from "chai";
import * as sinon from "sinon";
import { Schema } from "../src/schema";
import { Ajv2020 } from "ajv/dist/2020";

describe("Schema", () => {
    it("should have a method called #validate", () => {
        expect(Schema.prototype.validate).to.be.a("function");
    });

    describe("#constructor()", () => {
        it("should create a new object instance of Schema", () => {
            const schema = new Schema();
            expect(schema).to.be.an.instanceof(Schema);
        });

        it("should encapsule a JSON Schema version 2020-12 by default", () => {
            const schema = new Schema();
            expect(schema.toJSONSchema()["$schema"]).to.equal(
                "https://json-schema.org/draft/2020-12/schema",
            );
        });
    });

    describe("#validate()", () => {
        let AjvStub: sinon.SinonStubbedInstance<Ajv2020>;
        let schema: Schema;

        beforeEach(() => {
            AjvStub = sinon.createStubInstance(Ajv2020);
            schema = new Schema();
        });

        it("should call #validateSchema() on Ajv JSON Schema validator library", () => {
            schema.validate();
            expect(AjvStub.validateSchema.calledOnce).to.be.true;
        });
    });
});
