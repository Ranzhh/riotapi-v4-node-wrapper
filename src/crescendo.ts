import { MatchV4 } from "./apis/match-v4";

export default class Crescendo {
    public matchV4: MatchV4;
    private key: string;

    constructor(key: string) {
        this.key = key;
        this.matchV4 = new MatchV4(key);
    }
}
