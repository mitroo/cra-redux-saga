import { call, put, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './Actions';
import axios, { setAxiosToken } from '../../utils/axios';

export function* login({ username, password }) {
    yield put(LoginActions.loginLoading());
    try {
        const response = yield call(() => axios.post('/login', { username, password }));
        const token = response.data.token;
        const { user } = response.data.data;
        yield setAxiosToken(token);
        yield put(LoginActions.loginSuccess(user));
    } catch (error) {
        yield put(LoginActions.loginFail(error));
    }
}

export default function* loginSaga() {
    yield takeLatest(LoginTypes.LOGIN, login);
}
