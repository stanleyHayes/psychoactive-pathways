import {Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Reaction = ({value, icon, action = null}) => {
    return (
        <Stack onClick={() => action && action} spacing={1} direction="row" alignItems="center">
            <Typography sx={{color: "text.secondary"}} variant="body2">
                {value}
            </Typography>
            {icon}
        </Stack>
    )
}

export default Reaction;

Reaction.propTypes = {
    value: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    action: PropTypes.func
}