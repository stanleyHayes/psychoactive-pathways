import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {STORIES_API} from "../../../api/stories.js";

const getStories = createAsyncThunk(
    'stories/getStories',
    async (arg, thunkAPI) => {
        try {
            const response = await STORIES_API.getStories();
            return response.data.data;
        } catch (e) {
            const {message} = e.response.data;
            thunkAPI.rejectWithValue(message);
        }
    });

const createStory = createAsyncThunk(
    'stories/createStory',
    async ({setLoading, data, navigate}, thunkAPI) => {
        try {
            const response = await STORIES_API.createStory(data);
            setLoading(false);
            navigate('/stories')
            return response.data.data;
        } catch (e) {
            const {message} = e.response.data;
            thunkAPI.rejectWithValue(message);
        }
    });

const getStory = createAsyncThunk(
    'stories/getStory',
    async ({id}, thunkAPI) => {
        try {
            const response = await STORIES_API.getStory(id);
            return response.data.data;
        } catch (e) {
            const {message} = e.response.data;
            thunkAPI.rejectWithValue(message);
        }
    });

const storySlice = createSlice({
    name: 'stories',
    initialState: {
        loading: false,
        error: null,
        stories: [],
        story: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getStories.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getStories.fulfilled, (state, action) => {
            state.stories = action.payload;
            state.error = null;
            state.loading = false;
        }).addCase(getStories.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }).addCase(createStory.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createStory.fulfilled, (state, action) => {
            state.stories = [action.payload, ...state.stories];
            state.error = null;
            state.loading = false;
        }).addCase(createStory.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }).addCase(getStory.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getStory.fulfilled, (state, action) => {
            state.story = action.payload;
            state.error = null;
            state.loading = false;
        }).addCase(getStory.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});


const {reducer} = storySlice;
export const STORY_ACTION_CREATORS = {getStories, createStory, getStory};
export const selectStories = state => state.stories;
export default reducer;