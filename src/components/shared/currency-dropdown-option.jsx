import {Avatar, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {HELPERS} from "../../utils/helpers.js";

const CurrencyDropdownOption = ({currency}) => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar src={HELPERS.getFlagByCode(currency.code)}/>
            <Typography variant="body1" color="text.primary">
                {currency.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                ({currency.country})
            </Typography>
        </Stack>
    )
}

export default CurrencyDropdownOption;

CurrencyDropdownOption.propTypes = {
    currency: PropTypes.object.isRequired,
}