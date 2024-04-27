import {Stack, Typography} from "@mui/material";
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import {useLocation} from "react-router";

const DrawerLink = ({icon, label, path, action}) => {

    const {pathname} = useLocation();

    return (
        <Stack
            sx={{
                width: "100%",
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
            <Typography
                variant="body2"
                sx={{color: pathname === path ? "text.primary" : "text.secondary",}}>
                {label}
            </Typography>
        </Stack>
    )
}

export default DrawerLink;

DrawerLink.propTypes = {
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
}