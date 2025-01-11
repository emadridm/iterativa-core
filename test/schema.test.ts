import { expect } from "chai";
import * as sinon from "sinon";
import { Schema } from "../src/schema";
import { Ajv2020 } from "ajv/dist/2020";
import createDatabase from "../src/ipdb";

describe("Schema", () => {
    it("should have a method called #validate", () => {
        expect(Schema.prototype.validate).to.be.a("function");
    });

    it("should have a method called #save", () => {
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

        it("should create a valid JSON Schema version 200-12 by default", () => {
            const schema = new Schema();
            expect(schema.validate()).to.be.true;
        });
    });

    describe("#validate()", () => {
        let validator: sinon.SinonStubbedInstance<Ajv2020>;

        beforeEach(() => {
            validator = sinon.createStubInstance(Ajv2020);
        });

        afterEach(() => {
            sinon.restore();
        });

        it("should call #validateSchema() on Ajv JSON Schema validator library", () => {
            const schema = new Schema({ validator });
            schema.validate();
            expect(validator.validateSchema.calledOnce).to.be.true;
        });
    });

    describe("#save()", () => {
        it("should save the JSON Schema in the Interativa database", async () => {
            const schema = new Schema();
            await schema.open();
            await schema.save();
            const count = await schema.countDocuments();
            await schema.close();
            expect(count).to.be.equal(1);
        });
    });
});
