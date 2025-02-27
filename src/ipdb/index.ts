import { Action, ActionParams, ActionStatus } from "../maupertuis/index.js";
import { createLibp2p } from "libp2p";
import { createHelia, DefaultLibp2pServices } from "helia";
import { createOrbitDB, OrbitDB } from "@orbitdb/core";
import { LevelBlockstore } from "blockstore-level";
import { IPDBLibp2pOptions } from "./libp2poptions.js";

export interface CreateDatabaseParams extends ActionParams {
    dbName: string;
}

export interface CreateDatabaseStatus extends ActionStatus {
    dbAddress: string;
}

export interface StartOrbitDBStatus extends ActionStatus {
    orbitdb: OrbitDB;
}

export class StartOrbitDB extends Action<ActionParams, StartOrbitDBStatus> {
    public async run(): Promise<StartOrbitDBStatus> {
        // Create an IPFS instance.
        const blockstore = new LevelBlockstore("./ipfs/blocks");
        const libp2p =
            await createLibp2p<DefaultLibp2pServices>(IPDBLibp2pOptions);
        const ipfs = await createHelia({ libp2p, blockstore });

        this.status.orbitdb = await createOrbitDB({ ipfs });
        this.status.actionStatus = "The IPDB OrbitDB was instanted";
        return this.status;
    }
}

export class StopOrbitDB extends Action<ActionParams & StartOrbitDBStatus> {
    public async run(): Promise<ActionStatus> {
        await this.params.orbitdb.ipfs.stop();
        await this.params.orbitdb.stop();
        this.status.actionStatus = "done";
        return this.status;
    }
}

export class CreateDatabase extends Action<
    CreateDatabaseParams,
    CreateDatabaseStatus
> {
    constructor(params: CreateDatabaseParams) {
        super(params);
    }

    public async run(): Promise<CreateDatabaseStatus> {
        // start Iterplanetary Database
        const actionStartIPDB = new StartOrbitDB();
        const statusStartIPDB = await actionStartIPDB.run();
        // create the database
        const db = await statusStartIPDB.orbitdb.open(this.params.dbName);
        this.status = {
            dbAddress: db.address,
            actionStatus: `Database ${this.params.dbName} created at ${db.address} address`,
        };
        await db.close();
        // stop the Interplanetary Database
        const actionStopIPDB = new StopOrbitDB(statusStartIPDB);
        await actionStopIPDB.run();
        // return action status
        return this.status;
    }

    public async run2(): Promise<CreateDatabaseStatus> {
        const ipdb = new StartOrbitDB();
        const me = this.status;
        ipdb.run().then((status) => {
            const db = status.orbitdb.open("jajaj")
        })
    }
}
