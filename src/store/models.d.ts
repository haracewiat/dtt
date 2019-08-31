export interface LogsResponse {
    count: number;
    entries?: Log[] | null;
    similar?: Log[] | null;
}

export interface Log {
    API: string;
    Title: string;
    Description: string;
    Auth?: string | null;
    HTTPS: boolean;
    Cors: string;
    Link: string;
    Category: string;
}

export interface DetailsResponse {
    entries?: Log[] | null;
}
