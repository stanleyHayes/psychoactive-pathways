import {Box, CardMedia, Stack} from "@mui/material";
import {motion} from "framer-motion";
import SidebarLink from "./sidebar-link.jsx";
import {useLocation} from "react-router";
import {
    AccountCircleOutlined,
    DashboardOutlined,
    LogoutOutlined,
    ShoppingBagOutlined,
    SupportAgentOutlined,
    TrendingUpOutlined
} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice.js";
import logo from "./../../assets/react.svg";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const {pathname} = useLocation();
    const {sidebarOpen} = useSelector(selectUI);
    const navigate = useNavigate();

    return (
        <Stack direction="column" justifyContent="space-between" sx={{px: 2, py: 2, minHeight: "100vh"}} layout={true} component={motion.div}>
            <Box>
                {sidebarOpen ?
                    <CardMedia
                        src={logo}
                        component="img"
                        sx={{width: 30, height: 30, objectFit: "cover"
                        }}
                    />:
                    <CardMedia
                        src={logo}
                        component="img"
                        sx={{
                            width: 30, height: 30, objectFit: "cover"
                        }}
                    />
                }
            </Box>
            <Box>
                <Stack direction="column" spacing={1}>
                    <SidebarLink
                        action={() => navigate("/dashboard")}
                        icon={
                            <DashboardOutlined
                                sx={{
                                    color: pathname === "/dashboard" ? "#000000" : "text.primary",
                                    backgroundColor: pathname === "/dashboard"  ? "secondary.main" : "background.paper", borderRadius: "100%",
                                    fontSize: 32,
                                    padding: 1,
                                    cursor: "pointer"
                                }}
                            />
                        }
                        label="Dashboard"
                        path="/dashboard"
                    />

                    <SidebarLink
                        action={() => navigate("/orders")}
                        icon={
                            <ShoppingBagOutlined
                                sx={{
                                    color: pathname.includes("orders") ? "#000000" : "text.primary",
                                    backgroundColor: pathname.includes("orders") ? "secondary.main" : "background.paper",
                                    borderRadius: "100%",
                                    fontSize: 32,
                                    padding: 1,
                                    cursor: "pointer"
                                }}
                            />
                        }
                        label="Orders"
                        path="/orders"
                    />


                    <SidebarLink
                        action={() => navigate("/rates")}
                        icon={
                            <TrendingUpOutlined
                                sx={{
                                    color: pathname.includes("rates") ? "#000000" : "text.primary",
                                    backgroundColor: pathname.includes("rates") ? "secondary.main" : "background.paper",
                                    borderRadius: "100%",
                                    fontSize: 32,
                                    padding: 1,
                                    cursor: "pointer"
                                }}
                            />
                        }
                        label="Rates"
                        path="/rates"
                    />
                </Stack>
            </Box>
            <Box>
                <Stack direction="column" spacing={1}>
                    <SidebarLink
                        action={() => navigate("/account")}
                        icon={
                            <AccountCircleOutlined
                                sx={{
                                    color: pathname.includes("account") ? "#000000" : "text.primary",
                                    backgroundColor: pathname.includes("account") ? "secondary.main" : "background.paper", borderRadius: "100%",
                                    fontSize: 32,
                                    padding: 1,
                                    cursor: "pointer"
                                }}
                            />
                        }
                        label="Account"
                        path="/account"
                    />

                    <SidebarLink
                        action={() => navigate("/support")}
                        icon={
                            <SupportAgentOutlined
                                sx={{
                                    color: pathname.includes("support") ? "#000000" : "text.primary",
                                    backgroundColor: pathname.includes("support") ? "secondary.main" : "background.paper",
                                    borderRadius: "100%",
                                    fontSize: 32,
                                    padding: 1,
                                    cursor: "pointer"
                                }}
                            />
                        }
                        label="Support"
                        path="/support"
                    />


                    <SidebarLink
                        action={() => {}}
                        icon={
                            <LogoutOutlined
                                sx={{
                                    color: pathname === "/auth/login" ? "#000000" : "text.primary",
                                    backgroundColor: pathname === "/auth/login" ? "secondary.main" : "background.paper",
                                    borderRadius: "100%",
                                    fontSize: 32,
                                    padding: 1,
                                    cursor: "pointer"

                                }}
                            />
                        }
                        label="Logout"
                        path="/auth/login"
                    />
                </Stack>
            </Box>
        </Stack>
    )
}

export default Sidebar;