import {createEffect, createEvent, createStore} from 'effector';
import {MouseEvent} from 'react';
import {apiForOmdb, SearchFilmsType} from '../services/api';

export const sendReqFx = createEffect(async (title:string) => {
    const res = await apiForOmdb.getFilms(title);
    return res.data.Search;
});
export const clearStore = createEvent<MouseEvent<HTMLButtonElement>>();
export const onChange = createEvent<string>();
const initialState={
    Poster: '0',
    Title: '0',
    Type: '0',
    Year: '0',
    imdbID:'0',
}
export const $store = createStore<SearchFilmsType[]>([initialState])
    .on(sendReqFx.doneData, (state, data) => data)
    .reset(clearStore);
export const $input = createStore<string>('war')
    .on(onChange, (state, str) => str).reset(clearStore);
