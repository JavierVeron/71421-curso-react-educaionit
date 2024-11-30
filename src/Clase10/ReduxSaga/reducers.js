const initialState = {
    users:[],
    loading:false,
    error:false
}

export default function userReducers (state = initialState, action) {
    switch(action.type) {
        case "USER_FETCH_REQUEST":
            return {...state, loading:true, error:false};
        case "USER_FETCH_REQUEST_OK":
            return {...state, users:action.payload, loading:false};
        case "USER_FETCH_REQUEST_ERROR":
            return {...state, error:action.payload, loading:false};
        default:
            return state;
    }
}