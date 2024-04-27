import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Paragraph = ({
                       paragraph,
                       showActions,
                       id,
                       setSelectedIndex,
                       setDeleteParagraphSelected,
                       setEditParagraphSelected
                   }) => {

    const handleRemoveClicked = () => {
        setSelectedIndex(id);
        setDeleteParagraphSelected(true);
    }

    const handleEditClicked = () => {
        setSelectedIndex(id);
        setEditParagraphSelected(true);
    }


    return (
        <Card variant="outlined">
            <CardContent>
                <Typography align="left" variant="body2" sx={{color: "text.secondary", mb: 1}}>
                    {paragraph}
                </Typography>
                {showActions && (
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button
                            sx={{textTransform: "none"}}
                            onClick={handleRemoveClicked}
                            color="error"
                            size="small"
                            variant="outlined">
                            Remove
                        </Button>
                        <Button
                            sx={{textTransform: "none"}}
                            onClick={handleEditClicked}
                            color="secondary"
                            size="small"
                            variant="outlined">
                            Edit
                        </Button>
                    </Stack>
                )}
            </CardContent>
        </Card>
    )
}

export default Paragraph;

Paragraph.propTypes = {
    paragraph: PropTypes.string.isRequired,
    handleEdit: PropTypes.func,
    showActions: PropTypes.bool.isRequired,
    id: PropTypes.number,
    setSelectedIndex: PropTypes.func,
    setDeleteParagraphSelected: PropTypes.func,
    setEditParagraphSelected: PropTypes.func,
}