import axios from "axios";
import {PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS} from "../utils/constants.js";

const getStories = () => {
    return axios({
        method: 'get',
        url: `${PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL}/api/v1/user/stories`,
    });
}

const getStory = (id) => {
    return axios({
        method: 'get',
        url: `${PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL}/api/v1/user/stories/${id}`
    });
}

const createStory = (data) => {
    return axios({
        method: 'post',
        url: `${PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.BASE_URL}/api/v1/user/stories`,
        data
    });
}

export const STORIES_API = {getStories, getStory, createStory};