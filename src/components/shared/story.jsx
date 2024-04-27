import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {ChevronRight} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {readingTime} from "reading-time-estimator";

const Story = ({story}) => {
    const navigate = useNavigate();
    return (
        <Card variant="outlined" sx={{height: "100%"}}>
            <CardContent>
                <Typography variant="body2" sx={{color: "text.primary", mb: 1}}>
                    {story.content[0]}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mb: 1}}>
                    {readingTime(story.content.join(" ")).text}
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
                    <Button
                        size="small"
                        sx={{textTransform: "none"}}
                        endIcon={<ChevronRight/>}
                        color="secondary"
                        onClick={() => navigate(`/stories/${story._id}`)}
                        variant="text">
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