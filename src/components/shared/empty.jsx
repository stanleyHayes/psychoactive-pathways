import {Card, CardContent, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Empty = ({ message, description, action }) => (
    <Card variant="outlined">
        <CardContent>
            <Stack direction="column" spacing={2}>
                <Typography variant="h6" align="center" sx={{color: "text.primary"}}>{message}</Typography>
                <Typography variant="body2" align="center" sx={{color: "text.secondary"}}>{description}</Typography>
                <Stack direction="row" justifyContent="center">
                    {action}
                </Stack>
            </Stack>
        </CardContent>
    </Card>
)

export default Empty;

Empty.propTypes = {
    message: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.elementType.isRequired
}