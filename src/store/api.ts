import axios from 'axios';
import { LogsResponse, DetailsResponse } from './models';

export const AppApi = axios.create({
    baseURL: 'https://api.publicapis.org/',
});

export async function getGlobalFeed() {
    const response = await AppApi.get('/entries');
    return response.data as LogsResponse;
}
export async function getRandomFeed() {
    const response = await AppApi.get('/random');
    return response.data as LogsResponse;
}
export async function fetchDetails(description: string) {
    const response = await AppApi.get('/entries?description=' + description);
    return response.data as DetailsResponse;
}
