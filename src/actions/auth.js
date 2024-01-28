import { BaseSetting } from "../config/setting";
import * as actionTypes from "./actionTypes";

export const onLogin = data => {
    return {
        type: actionTypes.LOGIN,
        data
    };
};

export const userData = data => {
    return {
        type: actionTypes.USERDATA,
        data
    };
};

const onRegister = data => {
    return {
        type: actionTypes.REGISTRATION,
        data
    };
};


export function registerFetching(bool) {
    return {
        type: actionTypes.REGISTRATION,
        areFetching: bool
    }
}

export function registrationError(bool) {
    return {
        type: actionTypes.REGISTRATION_ERROR,
        hasErrored: bool
    };
}

export function registrationSucess(data) {
    return {
        type: actionTypes.REGISTRATION_SUCCESS,
        data
    };
}

export const authentication = (login, callback) => dispatch => {
    //call api and dispatch action case
    return (dispatch) => {
        let url = `${BaseSetting.base_Url}/customer/login`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, body: JSON.stringify(reuqest)
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(onLogin(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(wordsFetchDataSuccess(items)))
            .catch(() => dispatch(wordsHasErrored(true)));
    }
}
export const registration = (requestData) => dispatch => {
    //call api and dispatch action case
    return (dispatch) => {
        let url = `${BaseSetting.base_Url$}/customer/registration`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, body: JSON.stringify(requestData)
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(registrationSucess(items)))
            .catch(() => dispatch(registrationError(true)));
    }
}