import axios from 'axios';
import { LogsResponse, RandomResponse, SimilarResponse, Log } from './models';

export const AppApi = axios.create({
    baseURL: 'https://picsum.photos',
});

export async function getGlobalFeed() {
    const response = await AppApi.get('/v2/list?limit=10');
    return response.data as LogsResponse;
}

export async function getPage(page: number) {
    const response = await AppApi.get('/v2/list?limit=10&page=' + page);
    return response.data as LogsResponse;
}

export async function getRandom() {
    const response = await AppApi.get('/500/300');
    return response.request.responseURL as RandomResponse;
}

export async function getRandomArray(elements: number) {
    const array: string[] = [];
    let id: string = '';

    for (let i = 0; i < elements; i ++) {
        const response = await AppApi.get('/500/300');
        const url = response.request.responseURL;
        id = url.replace( /\D+/g, '');
        id = id.replace( /500300/g, '');
        array[i] = id;
    }
    return array;
}

export async function getInformation(id: string) {
    const response = await AppApi.get('/id/' + id + '/info');
    return response.data as Log;
}

export async function getSimilar(id: string, type: string) {
    const allTypes: string[] = ['normal', 'blur', 'grayscale', 'grayscale&blur'];
    const similarTypes: string[] = allTypes.filter( (x)  => x !== type );
    const urls: string[] = [];
    let response;

    for (const entry of similarTypes) {
        if (entry !== 'normal') {
            response = await AppApi.get('/id/' + id + '/500/300?' + entry);
        } else {
            response = await AppApi.get('/id/' + id + '/500/300');
        }

        if (response.config.url) {
            urls.push(response.config.url);
        }
    }
    return urls as SimilarResponse;
}
