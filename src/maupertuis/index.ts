export interface ActionParams {
    actionID?: string | undefined;
    [key: string]: any;
}

export interface ActionStatus {
    actionStatus: string;
}

export abstract class Action<
    TP extends ActionParams = ActionParams,
    TS extends ActionStatus = ActionStatus,
> {
    public params: TP;
    public status: TS;

    constructor(params: TP = { actionID: undefined } as TP) {
        this.params = params;
        if (!this.params.actionID) {
            this.params.actionID = this.constructor.name;
        }
        this.status = { actionStatus: `Action ${this.getActionID()}` } as TS;
    }

    public getActionID(): string | undefined {
        return this.params.actionID;
    }

    public abstract run(): Promise<TS>;
}
