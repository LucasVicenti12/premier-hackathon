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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 200,
                }}>
                <CustomAmcharts data={dados}/>
            </Box>
        </Box>
    )
}