export interface ActionParams {
    actionID?: string;
    [key: string]: any;
}

export interface ActionStatus {
    actionStatus: string;
}

export abstract class Action<
    TP extends ActionParams = ActionParams,
    TS extends ActionStatus = ActionStatus,
> {
    status: ActionStatus;

    constructor(public params: TP) {
        if (!this.params.actionID) {
            this.params.actionID = this.constructor.name;
        }
        this.status = { actionStatus: "" };
    }

    public abstract run(): Promise<TS>;
}
