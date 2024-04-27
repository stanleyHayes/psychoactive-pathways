import {Avatar, Card, CardHeader} from "@mui/material";
import PropTypes from "prop-types";

const ProfileCard = ({ initials, name }) => {
    return (
        <Card variant="outlined">
            <CardHeader title={name} subheader="View Profile" avatar={<Avatar>{initials}</Avatar>}/>
        </Card>
    )
}

export default ProfileCard;

ProfileCard.propTypes = {
    initials: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}