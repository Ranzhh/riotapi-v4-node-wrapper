interface IStatusDto {
    id: number;

    maintenance_status: 'scheduled' | 'in_progress' | 'complete';
    incident_severity: 'info' | 'warning' | 'critical';
    titles: IContentDto[];
    updates: IUpdateDto[];
    created_at: string;
    archive_at: string;
    updated_at: string;
    platforms: 'windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch';
}