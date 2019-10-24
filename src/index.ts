import { key } from "./config.json";
import Crescendo from "./crescendo";

const test = async () => {
    const crescendo = new Crescendo(key);
    const matchData = await crescendo.matchV4.getMatch("matchid", "region").then(console.log).catch(console.log);
};

test();
