import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice.js";
import storiesReducer from "./../features/stories/story-slice.js";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        stories: storiesReducer,
    }
});

export default store;