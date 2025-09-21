import { Box, Typography, Grid } from "@mui/joy";
import { useTranslation } from "react-i18next";
import CustomBarCharts from "../../../utils/components/CustomBarChars";
import CustomPieChart from "../../../utils/components/CustomPieChart";
import CustomLineChart from "../../../utils/components/CustomLineChart";

export const Home = () => {
    const { t } = useTranslation();

    const hospitais = [
        { category: "Hospital Santa Cruz", pacientes: 1245, medicos: 215 },
        { category: "Hospital Santo João", pacientes: 982, medicos: 150 },
        { category: "Hospital Central", pacientes: 865, medicos: 120 },
        { category: "Hospital Vida Nova", pacientes: 765, medicos: 100 },
        { category: "Hospital Esperança", pacientes: 654, medicos: 80 },
    ];

    const formatGraphData = (data: any[], key: string) => {
        return data.map((item) => ({
            category: item.category,
            value: item[key],
        }));
    };

    const hospitalMaisPacientes = hospitais.reduce((a, b) => (a.pacientes > b.pacientes ? a : b));
    const hospitalMenosPacientes = hospitais.reduce((a, b) => (a.pacientes < b.pacientes ? a : b));
    const hospitalMaisMedicos = hospitais.reduce((a, b) => (a.medicos > b.medicos ? a : b));
    const hospitalMenosMedicos = hospitais.reduce((a, b) => (a.medicos < b.medicos ? a : b));

    return (
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography level="h4" fontWeight="bold">
                {t("Dashboard Hospitais")}
            </Typography>

            <Grid container spacing={2}>
                <Grid xs={12} md={3}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Hospital com mais pacientes")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            {hospitalMaisPacientes.category} ({hospitalMaisPacientes.pacientes})
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Hospital com menos pacientes")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            {hospitalMenosPacientes.category} ({hospitalMenosPacientes.pacientes})
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Hospital com mais médicos")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            {hospitalMaisMedicos.category} ({hospitalMaisMedicos.medicos})
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={3}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Hospital com menos médicos")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            {hospitalMenosMedicos.category} ({hospitalMenosMedicos.medicos})
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="title-md" mb={2}>
                            {t("Pacientes por Hospital")}
                        </Typography>
                        <CustomBarCharts data={formatGraphData(hospitais, "pacientes")} />
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="title-md" mb={2}>
                            {t("Médicos por Hospital")}
                        </Typography>
                        <CustomBarCharts data={formatGraphData(hospitais, "medicos")} />
                    </Box>
                </Grid>
            </Grid>

            {/* SEGUNDA PARTE DOS GRAFICOS ---------------------------------------------------------------- */}

            <Grid container spacing={2} mt={3}>
                <Grid xs={12} md={4}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Estado com mais pacientes")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            São Paulo (3200)
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} md={4}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Estado com mais médicos")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            São Paulo (550)
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} md={4}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="body-sm">{t("Estado com mais hospitais")}</Typography>
                        <Typography level="title-lg" fontWeight="bold">
                            São Paulo (58)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="title-md" mb={2}>
                            {t("Pacientes por Estado")}
                        </Typography>
                        <CustomPieChart data={[
                            { category: "São Paulo", value: 3200 },
                            { category: "Minas Gerais", value: 1800 },
                            { category: "Rio de Janeiro", value: 1500 },
                            { category: "Paraná", value: 1200 },
                            { category: "Bahia", value: 900 },
                        ]} />
                    </Box>
                </Grid>

                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body" }}>
                        <Typography level="title-md" mb={2}>
                            {t("Médicos por Estado")}
                        </Typography>
                        <CustomLineChart data={[
                            { category: "São Paulo", value: 550 },
                            { category: "Minas Gerais", value: 300 },
                            { category: "Rio de Janeiro", value: 250 },
                            { category: "Paraná", value: 200 },
                            { category: "Bahia", value: 150 },
                        ]} />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ p: 2, borderRadius: "md", boxShadow: 3, bgcolor: "background.body", mt: 2 }}>
                <Typography level="title-md" mb={2}>
                    {t("Hospitais por Estado")}
                </Typography>
                <CustomBarCharts data={[
                    { category: "São Paulo", value: 58 },
                    { category: "Minas Gerais", value: 32 },
                    { category: "Rio de Janeiro", value: 28 },
                    { category: "Paraná", value: 20 },
                    { category: "Bahia", value: 15 },
                ]} />
            </Box>
        </Box>
    );
};
