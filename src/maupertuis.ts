export interface ActionResult {
    log: string;
}

export default class Acctions {
    constructor() {}

    public async execute(action: string, options: any): Promise<ActionResult> {
        if ((this as any)[action]) {
            return (this as any)[action](options);
        } else {
            return {
                log: "jaja",
            };
        }
    }
}
