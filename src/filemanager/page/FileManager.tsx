import {FileUpload} from "../components/FileUpload.tsx";
import {Box, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";

export const FileManager = () => {
    const {t} = useTranslation()

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography level={"body-md"} fontWeight={"bold"}>
                    {t("import_files_title")}
                </Typography>
                <FileUpload/>
            </Box>
        </Box>
    )
}