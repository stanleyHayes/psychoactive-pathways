import {Card, CardContent, Skeleton, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Stat = ({title, value, icon, loading}) => {
    return (
        <Card elevation={0} variant="elevation" sx={{borderWidth: 1, borderStyle: "solid", borderColor: "divider"}}>
            <CardContent>
                {loading ? (
                    <Stack direction="row" justifyContent="flex-end">
                        <Skeleton variant="rectangular" sx={{borderRadius: "25%"}} animation="wave"/>
                    </Stack>
                ) : (
                    <Stack direction="row" justifyContent="flex-end">
                        {icon}
                    </Stack>
                )}

                <Stack direction="column" spacing={1}>
                    {loading ? (
                        <Skeleton variant="text" animation="wave"/>
                    ) : (
                        <Typography variant="h4" sx={{color: "text.primary"}}>
                            {value}
                        </Typography>
                    )}
                    {loading ? (
                        <Skeleton variant="text" animation="wave"/>
                    ) : (
                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                            {title}
                        </Typography>
                    )}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Stat;

Stat.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    loading: PropTypes.bool.isRequired
}