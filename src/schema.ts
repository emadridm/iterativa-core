import { Ajv2020 } from "ajv/dist/2020.js";

export class Schema {
    constructor() {}

    public toJSONSchema(): Object {
        return {
            $schema: "https://json-schema.org/draft/2020-12/schema",
        };
    }

    public validate(): boolean {
        const ajv = new Ajv2020();
        ajv.validateSchema(this.toJSONSchema(), false);
        return false;
    }
}
