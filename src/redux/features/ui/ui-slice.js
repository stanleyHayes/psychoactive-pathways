import {createSlice} from "@reduxjs/toolkit";
import {PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS} from "../../../utils/constants.js";

const initialState = {
    theme: 'light',
    drawerOpen: false,
    sidebarOpen: true,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.sidebarOpen = action.payload
        },
        toggleDrawer: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem(PSYCHOACTIVE_PATHWAYS_CLIENT_CONSTANTS.PSYCHOACTIVE_PATHWAYS_CLIENT_THEME_VARIANT, action.payload);
        },
    }
});

const {actions: {toggleDrawer, toggleSidebar, toggleTheme}, reducer} = uiSlice;
export const UI_ACTION_CREATORS = {toggleDrawer, toggleSidebar, toggleTheme};
export const selectUI = state => state.ui;
export default reducer;