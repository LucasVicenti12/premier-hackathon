import { Box, Typography } from "@mui/joy"
import { useTranslation } from "react-i18next"
import CustomAmcharts from "../../../utils/components/CustomAmchartsComparison"

export const Home = () => {
    const {t} = useTranslation()

    const dados = [
        { category: "Research", value1: 1000, value2: 588 },
        { category: "Marketing", value1: 1200, value2: 1800 },
        { category: "Sales", value1: 850, value2: 1230 }
    ];

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
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {t("home_title")}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "raw",
                    gap: 1,
                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "8px",
                    p: 1,
                    flex: 1
                }}
            >
                {t("Mais pacientes")}
                {t("Hospital Santa Cruz")}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "8px",
                    p: 1,
                    flex: 1
                }}
            >
                {t("Menos pacientes")}
                {t("Hospital Santo João")}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "8px",
                    p: 1,
                    flex: 1
                }}
            >
                <CustomAmcharts data={dados}/>
            </Box>
        </Box>
    )
}