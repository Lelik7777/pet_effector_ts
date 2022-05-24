import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        'API-KEY': '418ccc24-66fd-40f8-b071-9bde653329c9',
    },
});

export const apiForLogin = {
    postRequest: (data: DataType) => instance.post<DataType, AxiosResponse<ResponseMyType>>('/auth/login', data),
}
export const apiForOmdb = {
    getFilms: (title:{title:string}) =>
        axios.get<ResponseOmdbDataType>(`http://www.omdbapi.com/?s=${title}&apikey=e786857c`),
}
export type DataType = {
    email: string;
    password: string;
}
export type ResponseMyType = {
    resultCode: number;
    message: string[];
    data: {
        userId: number;
    };
    fieldErrors: [],
}
export type ResponseOmdbDataType = {
    Response: string;
    Search: SearchFilmsType[];
    totalResults: string;
}
export type SearchFilmsType = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}