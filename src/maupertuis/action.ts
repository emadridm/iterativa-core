export type ActionParams = {
    [key: string]: any;
};

export type ActionStatus = {
    message: string;
};

export abstract class Action<TP extends ActionParams, TS extends ActionStatus> {
    status: ActionStatus;

    constructor(public params: TP) {
        this.status = { message: "" };
    }

    public abstract run(): Promise<TS>;
}
