import axios from "axios";
import {PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS} from "../utils/constants.js";

const getStories = (token) => {
    return axios({
        baseURL: PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL,
        method: 'get',
        path: '/stories',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const getStory = (token, id) => {
    return axios({
        baseURL: PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL,
        method: 'get',
        path: `/stories/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const createStory = (data) => {
    return axios({
        baseURL: PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL,
        method: 'post',
        path: `/stories`,
        data
    });
}

const updateStory = (token,id, data) => {
    return axios({
        baseURL: PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL,
        method: 'put',
        path: `/stories/${id}`,
        data,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const receiveStory = (token, id) => {
    return axios({
        baseURL: PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL,
        method: 'put',
        path: `/stories/${id}/receive`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export const STORIES_API = {getStories, getStory, updateStory, createStory, receiveStory};