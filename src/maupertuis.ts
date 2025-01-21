export interface ActionResult {
    log?: string;
    message?: string;
}

export default abstract class Acctions {
    constructor() {}

    public async execute(
        action: string,
        params: any = undefined,
    ): Promise<ActionResult> {
        if ((this as any)[action]) {
            return (this as any)[action](params);
        } else {
            return {
                message: "the action (class method) does not exist",
            };
        }
    }
}
