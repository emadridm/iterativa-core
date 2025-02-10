import { Action, ActionParams, ActionStatus } from "../maupertuis/index.js";
import { createLibp2p } from "libp2p";
import { createHelia } from "helia";
import { createOrbitDB } from "@orbitdb/core";
import { LevelBlockstore } from "blockstore-level";
import { IPDBLibp2pOptions } from "./libp2poptions.js";

export interface CreateDatabaseParams extends ActionParams {
    dbName: string;
}

export interface CreateDatabaseStatus extends ActionStatus {
    dbAddress: string;
}

export class CreateDatabase extends Action<
    CreateDatabaseParams,
    CreateDatabaseStatus
> {
    constructor(params: CreateDatabaseParams) {
        params.actionID = "CreateDatabase";
        super(params);
    }

    public async run(): Promise<CreateDatabaseStatus> {
        // Create an IPFS instance.
        const blockstore = new LevelBlockstore("./ipfs/blocks");
        const libp2p = await createLibp2p(IPDBLibp2pOptions);
        const ipfs = await createHelia({ libp2p, blockstore });

        const orbit = await createOrbitDB({ ipfs });
        const db = await orbit.open(this.params.dbName);

        const status: CreateDatabaseStatus = {
            dbAddress: db.address,
            actionStatus: "jaja",
        };

        await db.close();
        await ipfs.stop();
        await orbit.stop();

        return status;
    }
}
