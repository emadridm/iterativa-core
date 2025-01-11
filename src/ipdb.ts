import { BaseDatabase, OrbitDB } from "@orbitdb/core";

export default class Database {
    public orbitdb?: OrbitDB;

    constructor() {}

    public open(): Promise<OrbitDB> {
        return null;
    }
}
