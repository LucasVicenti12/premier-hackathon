import {Option, Select} from "@mui/joy";
import {useTranslation} from "react-i18next";

import GTranslateRounded from '@mui/icons-material/GTranslateRounded';

export const ToggleLanguageButton = () => {
    const {t, i18n} = useTranslation()

    return (
        <Select
            startDecorator={<GTranslateRounded/>}
            value={i18n.language}
            onChange={async (_, value) => {
                await i18n.changeLanguage(value as string)
            }}
        >
            <Option value={"pt"}>
                {t("portuguese")}
            </Option>
            <Option value={"en"}>
                {t("english")}
            </Option>
            <Option value={"span"}>
                {t("spanish")}
            </Option>
        </Select>
    )
}