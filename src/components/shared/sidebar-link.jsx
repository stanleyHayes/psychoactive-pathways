import {Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice.js";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import {useLocation} from "react-router";

const SidebarLink = ({icon, label, path, action}) => {

    const {sidebarOpen} = useSelector(selectUI);
    const {pathname} = useLocation();

    return (
        <Stack
            sx={{
                backgroundColor: pathname === path && sidebarOpen ? "light.secondary" : !sidebarOpen ? false : "light.grey",
                width: "!00%",
                borderRadius: 8,
                padding: 1,
                paddingX: 2,
                cursor: "pointer",
            }}
            alignItems="center"
            direction="row"
            spacing={2}
            component={motion.div}
            layout={true}
            onClick={action}>
            {icon}
            {sidebarOpen && (
                <Typography
                    variant="body2"
                    sx={{color: pathname === path && sidebarOpen ? "text.accent" : "text.primary"}}>
                    {label}
                </Typography>
            )}
        </Stack>
    )
}

export default SidebarLink;

SidebarLink.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
}