import { reject } from "bluebird";
import { key } from "./config.json";
import Crescendo from "./crescendo";

const test = async () => {
    try {
        // Initialise Crescendo object
        const crescendo = new Crescendo(key);

        // Get data for a given summoner name
        const summonerData = await crescendo.summonerV4.getSummonerByName("ascarawcas", "EUW1");

        // Get all normal games played by the summoner as Ashe in Season 2019.
        const matches = await crescendo.matchV4.getMatchlist(summonerData.accountId, "EUW1",  { champion: 22, season: 13, queue: 420 });

        return matches;
    } catch (err) {
        return err.name;
    }

};

test().then(console.log);
