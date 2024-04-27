import Layout from "../../components/layout/layout.jsx";
import {
    Alert,
    AlertTitle, Avatar,
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {CloseOutlined, KeyboardArrowLeft} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {STORY_ACTION_CREATORS} from "../../redux/features/stories/story-slice.js";
import Empty from "../../components/shared/empty.jsx";
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
import {useNavigate} from "react-router-dom";
import EditParagraphDialog from "../../components/dialogs/edit-paragraph-dialog.jsx";
import ConfirmDeleteDialog from "../../components/dialogs/confirm-delete-dialog.jsx";

const CreateStoryPage = () => {

    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editParagraphSelected, setEditParagraphSelected] = useState(false);
    const [deleteParagraphSelected, setDeleteParagraphSelected] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            paragraph: ""
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            paragraph: Yup.string().required('Content is required'),
        }),
        onSubmit: (values, formikHelpers) => {
            setContent([...content, values.paragraph]);
            formikHelpers.resetForm();
        }
    });

    const submitStory = () => {
        setLoading(true);
        dispatch(STORY_ACTION_CREATORS.createStory({setLoading, data: content}));
    }

    const [errorOpen, setErrorOpen] = useState(false);

    const handleRemove = () => {
        setContent(content.filter((p, index) => {
            return index !== selectedIndex;
        }));
        setSelectedIndex(-1);
        setDeleteParagraphSelected(false);
    }

    const handleEdit = paragraph => {
        setContent(content.map((p, index) => {
            if (index === selectedIndex) {
                return paragraph
            }
            return p;
        }));
        setSelectedIndex(-1);
        setEditParagraphSelected(false);
    }

    const navigate = useNavigate();

    console.log(selectedIndex)
    console.log(content[selectedIndex]);

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Box sx={{py: 8}}>
                <Container>
                    <Button
                        startIcon={<KeyboardArrowLeft/>}
                        onClick={() => navigate(-1)}
                        sx={{textTransform: "none", mb: 4}}
                        size="large"
                        color="secondary"
                        variant="text">
                        Back
                    </Button>
                    <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography sx={{color: "text.primary"}} variant="h4">
                                Share your story
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                fullWidth={true}
                                onClick={submitStory}
                                sx={{textTransform: "none"}}
                                disableElevation={true}
                                disabled={loading}
                                size="large"
                                color="secondary"
                                type="submit"
                                variant="contained">
                                {loading ? "Submitting story..." : "Submit Story"}
                            </Button>
                        </Grid>
                    </Grid>
                    <AnimatePresence mode="sync">
                        {formik.errors && errorOpen && (
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
                                        {formik.errors.toString()}
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

                    <Divider sx={{my: 4}} variant="fullWidth"/>

                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{mb: 3}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel required={true} htmlFor="paragraph">
                                    Write a paragraph
                                </InputLabel>
                                <OutlinedInput
                                    type="text"
                                    id="paragraph"
                                    placeholder="Write a pragraph"
                                    name="paragraph"
                                    value={formik.values.paragraph}
                                    required={true}
                                    onChange={formik.handleChange}
                                    size="medium"
                                    error={formik.touched.paragraph && formik.errors.paragraph}
                                    color="secondary"
                                    label="Write a pragraph"
                                    fullWidth={true}
                                    autoComplete="off"
                                    spellCheck={true}
                                    multiline={true}
                                    minRows={5}
                                />
                            </FormControl>
                        </Box>
                        <Stack alignItems="center" justifyContent="flex-end" direction="row">
                            <Button
                                sx={{textTransform: "none"}}
                                disableElevation={true}
                                disabled={loading}
                                size="large"
                                color="secondary"
                                type="submit"
                                variant="outlined">
                                Add Paragraph
                            </Button>
                        </Stack>
                    </form>


                    <Box>
                        <Typography sx={{color: "text.primary", mb: 2}} variant="h4">
                            Story Timeline
                        </Typography>
                        <AnimatePresence mode="sync">
                            {content?.length === 0 && (
                                <Empty
                                    description="No paragraphs available"
                                    message="Story Paragraphs"
                                    action={null}
                                />
                            )}
                        </AnimatePresence>
                        <Timeline position="alternate">
                            {content.map((paragraph, index) => (
                                <TimelineItem key={index}>
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
                                            setEditParagraphSelected={setEditParagraphSelected}
                                            setDeleteParagraphSelected={setDeleteParagraphSelected}
                                            setSelectedIndex={setSelectedIndex}
                                            id={index}
                                            showActions={true}
                                            paragraph={paragraph}
                                        />
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Box>

                    <EditParagraphDialog
                        onClose={() => setEditParagraphSelected(false)}
                        handleSubmit={handleEdit}
                        open={editParagraphSelected}
                        paragraph={content[selectedIndex]}
                    />

                    <ConfirmDeleteDialog
                        index={selectedIndex}
                        content={content}
                        onClose={() => setDeleteParagraphSelected(false)}
                        handleSubmit={() => handleEdit(selectedIndex)}
                        open={deleteParagraphSelected}
                        handleDelete={handleRemove}
                    />

                </Container>
            </Box>
        </Layout>
    )
}

export default CreateStoryPage;