import Conf from "conf";

const schema = {
    fullname: {
        type: "string",
        minLength: 1,
    },
    email: {
        type: "string",
        format: "email",
    },
};

const rootSchema = {
    type: "object",
    additionalProperties: false,
};

export default class Config extends Conf {
    constructor() {
        super({ projectName: "iterativa", schema, rootSchema });
    }
}
