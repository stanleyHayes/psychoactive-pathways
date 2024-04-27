import {AppBar, Box} from "@mui/material";
import DesktopHeader from "./desktop-header.jsx";
import MobileHeader from "./mobile-header.jsx";

const Header = () => {
    return (
        <Box>
            <AppBar
                square={true}
                variant="elevation"
                elevation={0}
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    },
                    backgroundColor: "background.transparent",
                    backdropFilter: "blur(36px)",
                    borderBottomColor: "light.grey",
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid"
                }}>
                <DesktopHeader/>
            </AppBar>
            <AppBar
                square={true}
                variant="elevation"
                elevation={0}
                sx={{
                    display: {
                        xs: "block",
                        md: "none",
                    },
                    backgroundColor: "background.transparent",
                    backdropFilter: "blur(36px)",
                    borderBottomColor: "light.grey",
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid"
                }}>
                <MobileHeader/>
            </AppBar>
        </Box>
    )
}

export default Header;