import { Ajv2020 } from "ajv/dist/2020.js";
import Database from "./ipdb.js";

export type SchemaOptions = {
    validator?: Ajv2020;
    ipdb?: Database;
};

const schemaDefaultOptions: SchemaOptions = {
    validator: undefined,
    ipdb: undefined,
};

export class Schema {
    private _schema: Object = {};
    private validator: Ajv2020;

    constructor(options: SchemaOptions = schemaDefaultOptions) {
        this.validator = options.validator ? options.validator : new Ajv2020();
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

    public async save(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("saved!");
            }, 10);
        }).then((data) => {
            console.log(data);
        });
    }

    public async countDocuments(): Promise<number> {
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                resolve(0);
            }, 10);
        }).then((data) => {
            return data;
        });
    }
}
