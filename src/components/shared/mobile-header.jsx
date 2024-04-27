import {Stack, Toolbar, Typography} from "@mui/material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice.js";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";

const MobileHeader = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector(selectUI);

    return (
        <Toolbar variant="dense">
            <Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                    variant="h6"
                    sx={{color: "text.primary", fontWeight: 700}}>
                    Psychoactive Pathways
                </Typography>
                    {theme === "dark" ? (
                        <LightModeOutlined
                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme('light'))}
                            sx={{
                                backgroundColor: "background.paper",
                                borderRadius: "100%",
                                fontSize: 32,
                                padding: 1,
                                cursor: "pointer",
                                color: "text.secondary"
                            }}
                        />
                    ) : (
                        <DarkModeOutlined
                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme('dark'))}
                            sx={{
                                backgroundColor: "background.paper",
                                borderRadius: "100%",
                                fontSize: 32,
                                padding: 1,
                                cursor: "pointer",
                                color: "text.secondary"
                            }}
                        />
                    )}
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;