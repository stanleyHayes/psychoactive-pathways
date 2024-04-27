import {Button, Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {ChevronRight} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {readingTime} from "reading-time-estimator";
import moment from "moment";

const Story = ({story}) => {
    const navigate = useNavigate();
    return (
        <Card variant="outlined" sx={{height: "100%"}}>
            <CardContent>
                <Typography variant="body2" sx={{color: "text.primary", mb: 1}}>
                    {story.content[0]}
                </Typography>
                <Divider variant="fullWidth" sx={{my: 1}}/>
                <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                        {readingTime(story.content.join(" ")).text}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        &middot;
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {moment(story.created_at).fromNow()}
                    </Typography>
                </Stack>
                <Divider variant="fullWidth" sx={{my: 1}}/>
                <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
                    <Button
                        size="small"
                        sx={{textTransform: "none"}}
                        endIcon={<ChevronRight/>}
                        color="secondary"
                        onClick={() => navigate(`/stories/${story._id}`)}
                        variant="outlined">
                        Read More
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Story;

Story.propTypes = {
    story: PropTypes.object.isRequired,
}