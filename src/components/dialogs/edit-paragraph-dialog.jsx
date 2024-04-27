import {
    Box,
    Button,
    Dialog,
    DialogContent,
    FormControl,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import {Warning} from "@mui/icons-material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useEffect} from "react";

const EditParagraphDialog = ({open, onClose, handleSubmit, paragraph}) => {

    const formik = useFormik({
        initialValues: {
            paragraph
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            paragraph: Yup.string().required('Content is required'),
        }),
        onSubmit: (values, formikHelpers) => {
            handleSubmit(values.paragraph);
            onClose();
            formikHelpers.resetForm();
        }
    });


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{mb: 2}}>
                    <Warning color="secondary"/>
                </Stack>
                <Typography variant="h6" sx={{color: "secondary.main", mb: 2}}>
                    Update paragraph
                </Typography>

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

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button
                            sx={{textTransform: "none"}}
                            onClick={onClose}
                            color="secondary"
                            size="small"
                            variant="outlined">
                            Cancel
                        </Button>

                        <Button
                            sx={{textTransform: "none"}}
                            disableElevation={true}
                            size="large"
                            color="secondary"
                            type="submit"
                            variant="outlined">
                            Update Paragraph
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditParagraphDialog;

EditParagraphDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    paragraph: PropTypes.string.isRequired
}