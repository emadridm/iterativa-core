import { Ajv2020 } from "ajv/dist/2020.js";

export class Schema {
    private _schema: Object = {};
    private validator: Ajv2020;

    constructor(validator?: Ajv2020) {
        this.validator = validator ? validator : new Ajv2020();
        this.init();
    }

    public init(): void {
        this._schema = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
        };
    }

    public toJSONSchema(): Object {
        return this._schema;
    }

    public setValidator(validator: Ajv2020): void {
        this.validator = validator;
    }

    public getValidator(): Ajv2020 {
        return this.validator;
    }

    public validate(): boolean {
        if (this.getValidator().validateSchema(this.toJSONSchema(), false)) {
            return true;
        }
        return false;
    }
}
