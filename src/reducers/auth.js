import * as actionTypes from "src/actions/actionTypes";
const initialState = {
    login: {
        success: true,
    },
    user: {
        lang: "en",
    },
    userdata: {

    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                login: action.data,
            };
        case actionTypes.USERDATA:
            return {
                userdata: action.data,
            };
        default:
            return state;
    }
};
