import {Avatar, AvatarGroup, Card, CardContent, Chip, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {ArrowRightAlt} from "@mui/icons-material";
import moment from "moment";
import {HELPERS} from "../../utils/helpers.js";
import {useNavigate} from "react-router-dom";

const Order = ({order}) => {
    const navigate = useNavigate();
    return (
        <Card
            onClick={() => navigate(`/orders/${order.id}`)}
            variant="elevation"
            elevation={0}
            sx={{borderRadius: 2, cursor: "pointer"}}>
            <CardContent>
                <Stack direction="column" spacing={3}>
                    <Stack alignItems="center" justifyContent="space-between" direction="row" spacing={2}>
                        <AvatarGroup
                            variant="circular"
                            spacing="small">
                            <Avatar src={HELPERS.getFlagByCode(order.rate.from_currency.code)}/>
                            <Avatar src={HELPERS.getFlagByCode(order.rate.to_currency.code)}/>
                        </AvatarGroup>

                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="h4" color="text.secondary">
                                {order.rate.from_currency.code}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                to
                            </Typography>

                            <Typography variant="h4" color="text.primary">
                                {order.rate.to_currency.code}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack justifyContent="space-between" direction="row" alignItems="center" spacing={2}>
                        <Typography variant="h4" color="text.secondary">
                            {order.amount.toFixed(2)}
                        </Typography>
                        <ArrowRightAlt/>
                        <Typography variant="h4" color="text.primary">
                            {(order.amount * order.rate.rate).toFixed(2)}
                        </Typography>
                    </Stack>

                    <Stack justifyContent="flex-start" direction="row" alignItems="center" spacing={2}>
                        <Chip
                            sx={{
                                color: `colors.${HELPERS.getColorByStatus(order.status)}`,
                                backgroundColor: `light.${HELPERS.getColorByStatus(order.status)}`,
                            }}
                            variant="filled"
                            label={order.status.toLowerCase()}
                            size="small"
                        />
                        <Typography variant="body1" color="text.secondary">
                            &middot;
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textTransform: "lowercase"}}>
                            {order.request_method}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            &middot;
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{textTransform: "lowercase"}}>
                            {order.delivery.method}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{textTransform: "lowercase"}}>
                        {moment(order.created_at).fromNow()}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Order;

Order.propTypes = {
    order: PropTypes.object.isRequired
}