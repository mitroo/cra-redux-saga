import { all } from 'redux-saga/effects';
import loginSaga from './Login/Saga';

export default function* root() {
    yield all([loginSaga()]);
}
