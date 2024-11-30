export const userFetchRequest = (value) => ({
    type:'USER_FETCH_REQUEST',
    payload:value
})

export const userFetchRequestOk = (users) => ({
    type:'USER_FETCH_REQUEST_OK',
    payload:users
})

export const userFetchRequestError = (error) => ({
    type:'USER_FETCH_REQUEST_ERROR',
    payload:error
})