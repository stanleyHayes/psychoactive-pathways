import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#F5F5F8",
            paper: "#ffffff",
            transparent: "rgba(245,245,248,0.01)",
        },
        secondary: {
            main: "#bbad0f"
        },
        text: {
            secondary: "#8F95A1",
            primary: "#000000",
            accent: "#000000",
        },
        light: {
            secondary: "rgba(255,237,2,0.3)",
            grey: "rgba(143,149,161,0.1)",
        }
    },
    typography: {
        fontFamily: '"Urbanist", "SpacevGrotesk", "Outfit", "Urbanist", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 32
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#212121",
            paper: "#323232",
            transparent: "rgba(0,0,0,0.01)"
        },
        secondary: {
            main: "#FFED02"
        },
        light: {
            secondary: "rgba(255,237,2,0.3)",
            grey: "rgba(143,149,161,0.1)",
        },
        text: {
            secondary: "#e3e3e3",
            primary: "#ffffff",
            accent: "#FFED02",
        },
    },
    typography: {
        fontFamily: '"Urbanist", "SpacevGrotesk", "Outfit",  "Roboto", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 32
    }
})

export const THEMES = {lightTheme, darkTheme};