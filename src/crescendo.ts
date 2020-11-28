import { ChampionMasteryV4 } from "./apis/champion-mastery-v4";
import { MatchV4 } from "./apis/match-v4";
import { SpectatorV4 } from "./apis/spectator-v4";
import { StatusV4 } from "./apis/status-v4";
import { SummonerV4 } from "./apis/summoner-v4";
import { LeagueV4 } from "./apis/league-v4"

export default class Crescendo {
    public matchV4: MatchV4;
    public summonerV4: SummonerV4;
    public statusV4: StatusV4;
    public championMasteryV4: ChampionMasteryV4;
    public spectatorV4: SpectatorV4;
    public leagueV4: LeagueV4;

    private key: string;

    constructor(key: string) {
        this.key = key;
        this.matchV4 = new MatchV4(key);
        this.summonerV4 = new SummonerV4(key);
        this.statusV4 = new StatusV4(key);
        this.championMasteryV4 = new ChampionMasteryV4(key);
        this.spectatorV4 = new SpectatorV4(key);
        this.leagueV4 = new LeagueV4(key);
    }
}
