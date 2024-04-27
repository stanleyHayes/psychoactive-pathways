import Layout from "../../components/layout/layout.jsx";
import {Alert, AlertTitle, Box, Button, Container, Grid, LinearProgress, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectStories, STORY_ACTION_CREATORS} from "../../redux/features/stories/story-slice.js";
import {Link} from "react-router-dom";
import Empty from "../../components/shared/empty.jsx";
import {AnimatePresence, motion} from "framer-motion";
import {CloseOutlined} from "@mui/icons-material";
import {HELPERS} from "../../utils/helpers.js";
import Story from "../../components/shared/story.jsx";
import {useEffect, useState} from "react";

const StoriesPage = () => {
    const {stories, error, loading} = useSelector(selectStories);
    const [errorOpen, setErrorOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(STORY_ACTION_CREATORS.getStories());
    }, []);

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography
                                variant="h4"
                                sx={{color: "text.primary", mb: 4, fontWeight: 200}}>
                                Our Stories
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to="/story/new" style={{textDecoration: "none"}}>
                                <Button
                                    disableElevation={true}
                                    fullWidth={true}
                                    size="large"
                                    variant="contained"
                                    color="secondary"
                                    sx={{textTransform: "none", borderRadius: 0.25}}>
                                    Create Story
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Box sx={{mb: 4}}>
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
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                            sx={{textTransform: "none"}}>
                                            Create Story
                                        </Button>
                                    </Stack>
                                </Alert>
                            )}
                        </AnimatePresence>
                    </Box>
                    <Box>
                        <Grid container={true} justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item={true} xs={12} md={6} lg={6}>
                                <AnimatePresence mode="sync">
                                    {stories?.length === 0 && (
                                        <Empty
                                            description="No stories available"
                                            message="Stories"
                                            action={
                                                <Link to="/story/new" style={{textDecoration: "none"}}>
                                                    <Button
                                                        size="small"
                                                        variant="outlined"
                                                        color="secondary"
                                                        sx={{textTransform: "none"}}>
                                                        Create Story
                                                    </Button>
                                                </Link>
                                            }
                                        />
                                    )}
                                </AnimatePresence>
                            </Grid>
                        </Grid>

                        <Grid
                            whileInView="animate"
                            exit="exit"
                            initial="initial"
                            component={motion.div}
                            variants={HELPERS.list}
                            container={true}
                            spacing={2}>
                            {stories?.map((story) => (
                                <Grid
                                    item={true}
                                    component={motion.div}
                                    variants={HELPERS.item}
                                    key={story.id}
                                    xs={12}
                                    sm={12}
                                    md={6}
                                    lg={4}>
                                    <Story story={story}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default StoriesPage;