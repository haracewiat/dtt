import axios from 'axios';
import { LogsResponse } from './models';

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
