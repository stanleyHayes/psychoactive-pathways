import Layout from "../../components/layout/layout.jsx";
import {
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import {CloseOutlined, KeyboardArrowLeft} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectStories, STORY_ACTION_CREATORS} from "../../redux/features/stories/story-slice.js";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import Paragraph from "../../components/shared/paragraph.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {HELPERS} from "../../utils/helpers.js";

const StoryDetailPage = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const {story, error, loading} = useSelector(selectStories);

    const [errorOpen, setErrorOpen] = useState(false);

    useEffect(() => {
        dispatch(STORY_ACTION_CREATORS.getStory({id}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const navigate = useNavigate();

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 4}}>
                <Container>
                    <Button
                        startIcon={<KeyboardArrowLeft/>}
                        onClick={() => navigate(-1)}
                        sx={{textTransform: "none", mb: 4}}
                        size="small"
                        color="secondary"
                        variant="text">
                        Back
                    </Button>
                    <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography sx={{color: "text.primary"}} variant="h4">
                                Story Detail
                            </Typography>
                        </Grid>

                    </Grid>
                    <AnimatePresence mode="sync">
                        {error && errorOpen && (
                            <Alert
                                onClose={() => setErrorOpen(false)}
                                action={<CloseOutlined onClick={() => setErrorOpen(false)}/>}
                                exit={{
                                    opacity: 0,
                                    x: "-10%",
                                    y: "10%",
                                    transition: {
                                        duration: 0.5,
                                    }
                                }}
                                initial={{
                                    opacity: 0,
                                    x: "10%",
                                    y: "-10%",
                                    transition: {
                                        duration: 0.5,
                                    }
                                }}
                                component={motion.div}
                                variant="standard"
                                severity="error">
                                <Stack direction="column" spacing={2}>
                                    <AlertTitle>
                                        <Typography variant="h6" sx={{color: "colors.red"}}>
                                            Error
                                        </Typography>
                                    </AlertTitle>
                                    <Typography variant="body2" sx={{color: "colors.red"}}>
                                        {error}
                                    </Typography>
                                </Stack>
                            </Alert>
                        )}
                    </AnimatePresence>

                    <Divider sx={{my: 4}} variant="fullWidth"/>

                    <Box>
                        <Typography sx={{color: "text.primary", mb: 2}} variant="h6">
                            Story Timeline
                        </Typography>
                        <Timeline
                            animate="animate"
                            exit="exit"
                            initial="initial"
                            component={motion.div}
                            variants={HELPERS.list}
                            position="alternate">
                            {story?.content.map((paragraph, index) => (
                                <TimelineItem
                                    component={motion.div}
                                    variants={HELPERS.item}
                                    key={index}>
                                    <TimelineOppositeContent>
                                        <Avatar variant="rounded" sx={{color: "light.secondary"}}>
                                            <Typography variant="h4" sx={{color: "secondary.main"}}>
                                                {index + 1}
                                            </Typography>
                                        </Avatar>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            color={index % 2 === 0 ? "secondary" : "grey"}
                                            variant={index % 2 === 0 ? "outlined" : "filled"}
                                        />
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paragraph
                                            showActions={false}
                                            paragraph={paragraph}
                                            id={index}
                                        />
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default StoryDetailPage;