import axios from 'axios'
import appConfig from "../config";
import { SET_USERS } from "../types/users.types";

export const createUser = async (payload) => {
    let result = {};
    try {
        const res = await axios.post(`${appConfig.appUrl}/auth/signup`, payload);
        result = res.data || {};
        return { success: true, data: result };
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};

export const getUsers = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${appConfig.appUrl}/api/users`);
            const result = res.data || {};
            dispatch(setUsers(result,SET_USERS));
        } catch (err) {
            console.log("error in getting time info : ", err);
            dispatch(setUsers([],SET_USERS));
        }
    };
};

export const setUsers = (response = [],type) => {
    if (response) {
        return {
            type,
            payload: response,
        };
    }

    return {
        type,
        payload: response,
    };
};

export const updateUserDetails = async (id,payload) => {
    let result = {};
    try {
        const res = await axios.put(`${appConfig.appUrl}/api/users/updateprofiledetails/${id}`, payload);
        result = res.data || {};
        return { success: true, data: result };
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};
