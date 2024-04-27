import {Button, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {Warning} from "@mui/icons-material";

const ConfirmDeleteDialog = ({open, onClose, handleDelete}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{mb: 2}}>
                    <Warning color="secondary"/>
                </Stack>
                <Typography variant="h6" sx={{color: "secondary.main", mb: 2}}>
                    Are you sure you want to delete paragraph?
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        sx={{textTransform: "none"}}
                        onClick={handleDelete}
                        color="error"
                        size="small"
                        variant="outlined">
                        Delete
                    </Button>
                    <Button
                        sx={{textTransform: "none"}}
                        onClick={onClose}
                        color="secondary"
                        size="small"
                        variant="outlined">
                        Cancel
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmDeleteDialog;

ConfirmDeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}