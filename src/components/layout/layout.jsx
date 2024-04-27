import {Box} from "@mui/material";
import PropTypes from "prop-types";
import Header from "../shared/header.jsx";
import {motion} from "framer-motion";


const Layout = ({children}) => {
    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                maxWidth: '100vw',
                maxHeight: '100vh',
            }}>
            <Box
                component={motion.div}
                layout={true}>
                <Header/>
                <Box sx={{
                    maxHeight: "100vh",
                    overflowY: "auto",
                    overflowX: 'hidden',
                    mt: {xs: 6.1, md: 6.1}
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
