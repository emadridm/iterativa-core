// import { tcp } from "@libp2p/tcp";
// import { identify } from "@libp2p/identify";
// import { gossipsub } from "@chainsafe/libp2p-gossipsub";
// import { noise } from "@chainsafe/libp2p-noise";
// import { yamux } from "@chainsafe/libp2p-yamux";
// import { mdns } from "@libp2p/mdns";
// import type { Libp2pOptions } from "libp2p";
// import { DefaultLibp2pServices } from "helia";

import { libp2pDefaults } from "helia";

/*
export const IPDBLibp2pOptions: Libp2pOptions<DefaultLibp2pServices> = {
    peerDiscovery: [mdns()],
    addresses: {
        listen: ["/ip4/0.0.0.0/tcp/0"],
    },
    transports: [tcp()],
    connectionEncrypters: [noise()],
    streamMuxers: [yamux()],
    services: {
        identify: identify(),
        pubsub: gossipsub({ allowPublishToZeroTopicPeers: true }),
    },
};
*/

export const IPDBLibp2pOptions = libp2pDefaults();
