import axios from "axios";
import {PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS} from "../utils/constants.js";

const getStories = () => {
    return axios({
        method: 'get',
        url: `${PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL}/stories`,
    });
}

const getStory = ( id) => {
    return axios({
        method: 'get',
        url: `${PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL}/stories/${id}`
    });
}

const createStory = (data) => {
    return axios({
        method: 'post',
        url: `${PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL}/stories`,
        data
    });
}

export const STORIES_API = {getStories, getStory, createStory};