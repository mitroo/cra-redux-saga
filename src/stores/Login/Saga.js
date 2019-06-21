import { call, put, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './Actions';
import axios, { setAxiosToken } from '../../utils/axios';

export function* login({ email, password }) {
    yield put(LoginActions.loginLoading());
    try {
        const response = yield call(() => axios.post('/login?delay=3', { email, password }));
        yield console.log(response);
        const token = response.data.token;
        const { user } = response.data;
        yield setAxiosToken(token);
        yield put(LoginActions.loginSuccess(user));
    } catch (error) {
        yield put(LoginActions.loginFail(error.response.data));
    }
}

export default function* loginSaga() {
    yield takeLatest(LoginTypes.LOGIN, login);
}
