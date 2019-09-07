export interface Log {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface LogsResponse {
    entries?: Log[] | null;
}
