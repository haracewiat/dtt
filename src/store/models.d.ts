export interface LogsResponse {
    count: number;
    entries?: Log[] | null;
    similar?: Log[] | null;
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

export interface Category {
    category: string;
}

export interface CategoriesResponse {
    entries?: Category[] | null;
}

export interface DetailsResponse {
    entries?: Log[] | null;
}
