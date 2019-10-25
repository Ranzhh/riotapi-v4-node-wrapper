interface IMatchFrameDto {
    timestamp: number;

    participantFrames: Map<string, IMatchParticipantFrameDto>;

    events: IMatchEventDto[];
}
