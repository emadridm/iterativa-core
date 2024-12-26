import { Ajv2020 } from "ajv/dist/2020.js";

export class Schema {
    private validator: Ajv2020;

    constructor(validator?: Ajv2020) {
        this.validator = validator ? validator : new Ajv2020();
    }

    public toJSONSchema(): Object {
        return {
            $schema: "https://json-schema.org/draft/2020-12/schema",
        };
    }

    public setValidator(validator: Ajv2020): void {
        this.validator = validator;
    }

    public getValidator(): Ajv2020 {
        return this.validator;
    }

    public validate(): boolean {
        this.getValidator().validateSchema(this.toJSONSchema(), false);
        return false;
    }
}
