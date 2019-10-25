interface IMatchFrameDto {
    timestamp: number;

    participantFrames: Map<string, MatchParticipantFrameDto>;

    events: MatchEventDto[];
}
