import {
    Box,
    BoxProps,
    IconButton,
    Stack,
    Typography,
    listItemButtonClasses,
    List,
    ListItem,
    ListItemButton,
    ListItemContent,
} from "@mui/joy";
import {useState} from "react";


import HomeRounded from "@mui/icons-material/HomeRounded"
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import EmergencyRoundedIcon from '@mui/icons-material/EmergencyRounded';
import PersonalInjuryRoundedIcon from '@mui/icons-material/PersonalInjuryRounded';

import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {ToggleLanguageButton} from "../../i18n/components/ToogleLanguageButton.tsx";

const Root = (props: BoxProps) => (
    <Box
        {...props}
        sx={[
            {
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'minmax(auto, auto) minmax(450px, 1fr)',
                    md: 'minmax(auto, auto) minmax(300px, 1fr)',
                },
                gridTemplateRows: '50px 1fr',
                minHeight: '100vh',
                maxHeight: '100vh',
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
    >
        {props.children}
    </Box>
)

const Header = (props: BoxProps) => (
    <Box
        component="header"
        className="Header"
        {...props}
        sx={[
            {
                p: 1,
                gap: 2,
                bgcolor: '#033e8c',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
    >
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <LocalHospitalRoundedIcon sx={{color: "#ffffff"}}/>
                <Typography level={"title-md"} sx={{color: "#ffffff"}}>
                    Hackaton - Premiersoft
                </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={1}>
                <ToggleLanguageButton/>
            </Stack>
        </Box>
    </Box>
)

const SideNav = (props: BoxProps) => {
    const {t} = useTranslation()

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    return (
        <Box
            component="nav"
            className="Navigation"
            {...props}
            sx={[
                {
                    p: 1,
                    bgcolor: 'background.surface',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    display: {
                        xs: 'none',
                        sm: 'initial',
                    },
                    width: open ? "200px" : "50px",
                    position: "relative",
                    ":hover": {
                        ["& #menu-side-open-icon"]: {
                            transform: "scale(1, 1)"
                        }
                    },
                    transition: "width 200ms linear"
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    zIndex: 1110,
                    transform: "translate(50%, -150%)",
                }}
            >
                <IconButton
                    id={"menu-side-open-icon"}
                    variant={"plain"}
                    size={"sm"}
                    sx={{
                        p: 0,
                        borderRadius: "50%",
                        bgcolor: 'background.surface',
                        border: '1px solid',
                        borderColor: 'divider',
                        minWidth: "1.5rem !important",
                        minHeight: "1.5rem !important",
                        transform: "scale(0, 0)",
                        transition: "transform 100ms linear"
                    }}
                    onClick={() => setOpen(prev => !prev)}
                >
                    {
                        open ? (
                            <KeyboardArrowLeftRoundedIcon sx={{fontSize: "13pt"}}/>
                        ) : (
                            <KeyboardArrowRightRoundedIcon sx={{fontSize: "13pt"}}/>
                        )
                    }
                </IconButton>
            </Box>
            <Box
                sx={{
                    minHeight: "100%",
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 0,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem onClick={() => navigate("/home")}>
                        {
                            open ? (
                                <ListItemButton>
                                    <HomeRounded fontSize={"small"}/>
                                    <ListItemContent>
                                        <Typography
                                            level="title-sm"
                                            sx={{textWrap: "nowrap"}}
                                        >
                                            {t("home")}
                                        </Typography>
                                    </ListItemContent>
                                </ListItemButton>
                            ) : (
                                <ListItemButton>
                                    <HomeRounded fontSize={"small"}/>
                                </ListItemButton>
                            )
                        }
                    </ListItem>
                    <ListItem onClick={() => navigate("/hospital")}>
                        {
                            open ? (
                                <ListItemButton>
                                    <EmergencyRoundedIcon fontSize={"small"}/>
                                    <ListItemContent>
                                        <Typography
                                            level="title-sm"
                                            sx={{textWrap: "nowrap"}}
                                        >
                                            {t("hospitals")}
                                        </Typography>
                                    </ListItemContent>
                                </ListItemButton>
                            ) : (
                                <ListItemButton>
                                    <EmergencyRoundedIcon fontSize={"small"}/>
                                </ListItemButton>
                            )
                        }
                    </ListItem>
                    <ListItem onClick={() => navigate("/patientManager")}>
                        {
                            open ? (
                                <ListItemButton>
                                    <PersonalInjuryRoundedIcon fontSize={"small"}/>
                                    <ListItemContent>
                                        <Typography
                                            level="title-sm"
                                            sx={{textWrap: "nowrap"}}
                                        >
                                            {t("patient_title")}
                                        </Typography>
                                    </ListItemContent>
                                </ListItemButton>
                            ) : (
                                <ListItemButton>
                                    <PersonalInjuryRoundedIcon fontSize={"small"}/>
                                </ListItemButton>
                            )
                        }
                    </ListItem>
                    <ListItem onClick={() => navigate("/fileManager")}>
                        {
                            open ? (
                                <ListItemButton>
                                    <FileUploadRoundedIcon fontSize={"small"}/>
                                    <ListItemContent>
                                        <Typography
                                            level="title-sm"
                                            sx={{textWrap: "nowrap"}}
                                        >
                                            {t("import_files_title")}
                                        </Typography>
                                    </ListItemContent>
                                </ListItemButton>
                            ) : (
                                <ListItemButton>
                                    <FileUploadRoundedIcon fontSize={"small"}/>
                                </ListItemButton>
                            )
                        }
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

const Main = (props: BoxProps) => (
    <Box
        component="main"
        className="Main"
        {...props}
        sx={[
            {
                p: 1,
                backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
                backgroundRepeat: 'no-repeat',
                overflowY: "auto",
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ]}
    />
)

export default {
    Root,
    Header,
    Main,
    SideNav
}