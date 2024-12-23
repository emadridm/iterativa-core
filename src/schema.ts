export class Schema {
    constructor() {}

    public toJSONSchema(): Object {
        return {
            $schema: "https://json-schema.org/draft/2020-12/schema",
        };
    }
}
