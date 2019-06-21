import { createReducer } from 'reduxsauce';
import { LoginTypes } from './Actions';

const INITIAL_STATE = {
    user: null,
    loading: false,
    errors: null
};

export const loginLoading = (state) =>
    state.merge({
        user: null,
        loading: true,
        errors: null
    });

export const loginSuccess = (state, { user }) =>
    state.merge({
        user: user,
        loading: false,
        errors: null
    });

export const loginFail = (state, { errors }) =>
    state.merge({
        user: null,
        loading: false,
        errors: errors
    });

export const reducer = createReducer(INITIAL_STATE, {
    [LoginTypes.LOGIN_LOADING]: loginLoading,
    [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
    [LoginTypes.LOGIN_FAIL]: loginFail
});
