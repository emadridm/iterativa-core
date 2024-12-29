export interface Database {
    countDocuments: () => Promise<number>;
}

export interface IPDB {}

export function createDatabase(): IPDB {
    return {};
}
