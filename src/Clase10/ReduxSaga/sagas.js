import { call, put, takeLatest } from "redux-saga/effects";
import { userFetchRequestOk, userFetchRequestError } from "./actions";

function * fetchUsers() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users/');
        const data = yield call([response, response.json]);
        yield put(userFetchRequestOk(data));
    } catch (error) {        
        yield put(userFetchRequestError(error));
    }
}

function * rootSaga() {
    yield takeLatest('USER_FETCH_REQUEST', fetchUsers);
}

export default rootSaga;