import axios from 'axios';
import { LogsResponse } from './models';

export const AppApi = axios.create({
    baseURL: 'https://picsum.photos',
});

export async function getGlobalFeed() {
    const response = await AppApi.get('/v2/list');
    return response.data as LogsResponse;
}
