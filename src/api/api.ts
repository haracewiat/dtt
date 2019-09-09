import axios from 'axios';
import { LogsResponse, RandomResponse } from './models';

export const AppApi = axios.create({
    baseURL: 'https://picsum.photos',
});

export async function getGlobalFeed() {
    const response = await AppApi.get('/v2/list?limit=10');
    return response.data as LogsResponse;
}

export async function getRandom() {
    const response = await AppApi.get('/500/400');
    return response.request.responseURL as RandomResponse;
}
