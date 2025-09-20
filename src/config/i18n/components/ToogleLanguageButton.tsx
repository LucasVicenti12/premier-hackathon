import {IconButton} from "@mui/joy";
import {useTranslation} from "react-i18next";

import GTranslateRounded from '@mui/icons-material/GTranslateRounded';

export const ToggleLanguageButton = () => {
    const {i18n} = useTranslation()

    return (
        <IconButton
            sx={{
                ":hover": {
                    "& .MuiSvgIcon-root": {
                        color: "#033e8c"
                    }
                }
            }}
            onClick={() => {
                if (i18n.language === "pt") {
                    i18n.changeLanguage("en")
                } else {
                    i18n.changeLanguage("pt")
                }
            }}
        >
            <GTranslateRounded sx={{color: "#ffffff"}}/>
        </IconButton>
    );
}