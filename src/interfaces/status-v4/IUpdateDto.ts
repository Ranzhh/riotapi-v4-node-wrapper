interface IUpdateDto {
    id: number;
    author: string;
    publish: boolean;
    publish_locations: "riotclient" | "riotstatus" | "game";
    translations: IContentDto[];
    created_at: string;
    updated_at: string;
}
