import { Action, ActionStatus } from "../maupertuis/index.js";

export type DatabaseParams = {
    name: string;
};

export class CreateDatabase extends Action<DatabaseParams, ActionStatus> {
    constructor(params: DatabaseParams) {
        super(params);
    }

    public async run(): Promise<ActionStatus> {
        return new Promise((resolve, reject) => {
            this.status = { message: "jaja" };
            setTimeout(() => {
                if (Math.random() == 1) {
                    resolve(this.status);
                } else {
                    reject({ message: "fail" });
                }
            }, 2000);
        });
    }
}
