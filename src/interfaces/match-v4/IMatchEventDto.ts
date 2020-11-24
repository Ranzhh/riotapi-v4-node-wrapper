interface IMatchEventDto {
    eventType: string;
    towerType: string;
    teamId: number;
    ascendedType: string;
    killerId: number;
    levelUpType: string;
    pointCaptured: string;
    assistingParticipantIds: number[];
    wardType: string;
    monsterType: string;
    type: "CHAMPION_KILL" | "WARD_PLACED" | "WARD_KILL" | "BUILDING_KILL" | "ELITE_MONSTER_KILL" | "ITEM_PURCHASED" | "ITEM_SOLD" | "ITEM_DESTROYED" | "ITEM_UNDO" | "SKILL_LEVEL_UP" | "ASCENDED_EVENT" | "CAPTURE_POINT" | "PORO_KING_SUMMON";
    skillSlot: number;
    victimId: number;
    timestamp: number;
    afterId: number;
    monsterSubType: string;
    laneType: string;
    itemId: number;
    participantId: number;
    buildingType: string;
    creatorId: number;
    position: IMatchPositionDto;
    beforeId: number;
}
