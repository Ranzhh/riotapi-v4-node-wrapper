interface IPlatformDataDto {
    id: string;
    name: string;
    locales: string[];
    maintenances: IStatusDto[];
    incidents: IStatusDto[];
}
