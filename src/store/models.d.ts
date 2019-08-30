export interface LogsResponse {
    count: number;
    entries?: Log[] | null;
}

export interface Log {
    API: string;
    Description: string;
    Auth?: string | null;
    HTTPS: boolean;
    Cors: string;
    Link: string;
    Category: string;
}
