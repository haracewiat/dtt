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

export interface SimilarResponse {
    urls?: string[] | null;
}

export interface RandomResponse {
    url: string;
}

export interface LogsType {
    size: string;            // square | full
    type: string;            // grayscale | blur | normal | grayscale&blur
}
