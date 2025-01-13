import { OrbitDB } from "@orbitdb/core";
import Acctions from "./maupertuis.js";

export default class DatabaseActions extends Acctions {
    private orbitdb?: OrbitDB;

    constructor() {
        super();
    }

    public execute(action: string, options: any) {
        this.create(options);
    }

    private create({ name: string }): { log: string } {
        return { log: "jajaja" };
    }
}
