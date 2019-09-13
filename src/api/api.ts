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
    const response = await AppApi.get('/500/300');
    return response.request.responseURL as RandomResponse;
}

export async function getSimilar(id: string) {
    // const response1 = await AppApi.get('/id/' + id + '/500/300?grayscale');
    // const response2 = await AppApi.get('/id/' + id + '/500/300?blur');
    // const response3 = await AppApi.get('/id/' + id + '/500/300?grayscale&blur');
    // return as an array and display images on the Random page
}
