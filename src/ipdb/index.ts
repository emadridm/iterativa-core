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
            this.status = { message: "fail" };
            setTimeout(() => {
                if (this.params.name) {
                    this.status.message = `The database "${this.params.name}" was created!`;
                    resolve(this.status);
                } else {
                    reject(this.status);
                }
            }, 2000);
        });
    }
}
