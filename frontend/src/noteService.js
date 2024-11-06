import http from "./http";

export const getAll = () => {
    return http.get('/notes');
}

export const getOne = (id) => {
    return http.get('/notes/' + id);
}

export const create = (text) => {
    return http.post('/notes', text);
}

export const update = (data) => {
    return http.put('/notes/' + data.id, data);
}

export const remove = (id) => {
    return http.delete('/notes/' + id);
}