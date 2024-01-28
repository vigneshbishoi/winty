const { BASEURL, BEFORE_LOGIN_TOKEN, AFERT_LOGIN_TOKEN, PARTNER_ID } = require("src/config");

export const EXISTING_EMAIL_API = async (payload) => {
    try {
        const response = await fetch(`${BASEURL}profile/check_existing_email`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                userid: 0,
                platform: "mobile",
                auth: BEFORE_LOGIN_TOKEN
            },
            body: JSON.stringify({
                email: `${payload}`,
            }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const EMAIL_OTP_SEND_API = async (payload) => {
    try {
        const response = await fetch(`${BASEURL}profile/send_otp_email`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                userid: 0,
                platform: "mobile",
                auth: BEFORE_LOGIN_TOKEN
            },
            body: JSON.stringify({
                email: `${payload}`,
            }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const SIGNUP_API = async (payload) => {
    try {
        const response = await fetch(`${BASEURL}profile/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                userid: 0,
                platform: "mobile",
                auth: BEFORE_LOGIN_TOKEN
            },
            body: JSON.stringify({
                first_name: payload.first_name,
                last_name: payload.last_name,
                mobile: Number(payload.mobile),
                password: payload.password,
                confirm_password: payload.confirm_password,
                otp_code: payload.otp_code,
                email: payload.email,
            }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const LOGIN_API = async (payload) => {
    try {
        const response = await fetch(`${BASEURL}profile/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                userid: 0,
                platform: "mobile",
                auth: BEFORE_LOGIN_TOKEN
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password
            }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

// Accept: 'application/json',
//             'Content-Type': 'application/json',
//            userid: await (await AFERT_LOGIN_TOKEN()).display_id,
//              platform: "mobile",
//              auth: BEFORE_LOGIN_TOKEN,
//              partnerid: PARTNER_ID

export const QRCODE_API = async (payload) => {
    try {
        const response = await fetch(`${BASEURL}ecomm-fe/get-theme-config`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                userid: 0,
                platform: "mobile",
                auth: BEFORE_LOGIN_TOKEN,
                partnerid: PARTNER_ID
            },
            // body: JSON.stringify({
            //     PARTNER_ID: '48'
            // }),
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const LOGOUT_API = async (payload) => {
    try {
        const response = await fetch(`${BASEURL}profile/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                userid: await (await AFERT_LOGIN_TOKEN()).display_id,
                platform: "mobile",
                auth: await (await AFERT_LOGIN_TOKEN()).token
            },
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

// export const PRODUCT_LIST_API = async (payload) => {
//     try {
//         const url = `${BASEURL}ecomm/product`

//         const config = {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             userid: await (await AFERT_LOGIN_TOKEN()).display_id,
//             platform: "mobile",
//             auth: BEFORE_LOGIN_TOKEN,
//             partnerid: PARTNER_ID
//         }
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: config
//         });
//         const json = await response.json();
//         return json.data;
//     } catch (error) {
//         console.error(error);
//     }
// };