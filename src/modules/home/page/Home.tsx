import { Box, Typography, Grid } from "@mui/joy";
import { useTranslation } from "react-i18next";
import CustomBarCharts from "../../../utils/components/CustomBarChars";
import CustomPieChart from "../../../utils/components/CustomPieChart";
import CustomLineChart from "../../../utils/components/CustomLineChart";
// import HospitalMetricState from "../state/HospitalMetricState";
// import { useAtomValue } from "jotai";
// import StateMetricState from "../state/StateMetricState";

export const Home = () => {
    const { t } = useTranslation();


    // const hospitalsAtom = useAtomValue(HospitalMetricState.List)
    // const hospitalMetric = hospitalsAtom.state === 'hasData' ? hospitalsAtom.data : null

    // const StateAtom = useAtomValue(StateMetricState.List)
    // const statesMetric = StateAtom.state === 'hasData' ? StateAtom.data : null

    // if (hospitalsAtom.state === 'loading') {
    //     return (
    //         <Box
    //             sx={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 width: "100%",
    //                 height: "100%",
    //                 alignItems: "center",
    //                 justifyContent: "center"
    //             }}
    //         >
    //             <CircularProgress />
    //         </Box>
    //     )
    // }

    const hospitalMetric = {
        items: [
            { name: "Hospital Central", quantitydoctors: 120, quantitypatient: 850 },
            { name: "Hospital Regional", quantitydoctors: 80, quantitypatient: 600 },
            { name: "Hospital Municipal", quantitydoctors: 40, quantitypatient: 300 },
            { name: "Hospital Infantil", quantitydoctors: 65, quantitypatient: 420 },
        ]
    }

    // mock para estados
    const statesMetric = {
        items: [
            { name: "São Paulo", quantitydoctors: 1500, quantitypatient: 11000, quantityhospital: 35 },
            { name: "Rio de Janeiro", quantitydoctors: 900, quantitypatient: 7200, quantityhospital: 22 },
            { name: "Minas Gerais", quantitydoctors: 700, quantitypatient: 5000, quantityhospital: 18 },
            { name: "Santa Catarina", quantitydoctors: 400, quantitypatient: 2800, quantityhospital: 10 },
        ]
    }

    const hospitals = hospitalMetric ? hospitalMetric.items?.map(item => ({
        category: item.name,
        pacientes: item.quantitydoctors,
        medicos: item.quantitypatient
    })) ?? [] : []

    const states = statesMetric ? statesMetric.items?.map(item => ({
        category: item.name,
        pacientes: item.quantitydoctors,
        medicos: item.quantitypatient,
        hospitals: item.quantityhospital
    })) ?? [] : []


    const formatGraphData = (data: any[], key: string) => {
        return data.map((item) => ({
            category: item.category,
            value: item[key],
        }));
    };

    const findMax = <T extends Record<string, any>>(
        array: T[],
        property: keyof T,
        nameProperty: keyof T = 'category' as keyof T // <-- aqui
    ): string => {
        if (array.length === 0) return 'Nenhum dado disponível';

        const maxItem = array.reduce((max, current) =>
            current[property] > max[property] ? current : max, array[0]);

        return `${maxItem[nameProperty]} (${maxItem[property]})`;
    };

    const findMin = <T extends Record<string, any>>(
        array: T[],
        property: keyof T,
        nameProperty: keyof T = 'category' as keyof T // <-- aqui
    ): string => {
        if (array.length === 0) return 'Nenhum dado disponível';

        const minItem = array.reduce((min, current) =>
            current[property] < min[property] ? current : min, array[0]);

        return `${minItem[nameProperty]} (${minItem[property]})`;
    };


    // Hospital com mais e menos pacientes
    const hospitalWithMostPatients = findMax(hospitals, 'pacientes');
    const hospitalWithLeastPatients = findMin(hospitals, 'pacientes');

    // Hospital com mais e menos médicos
    const hospitalWithMostDoctors = findMax(hospitals, 'medicos');
    const hospitalWithLeastDoctors = findMin(hospitals, 'medicos');

    // Estado com mais pacientes, médicos e hospitais
    const stateWithMostPatients = findMax(states, 'pacientes');
    const stateWithMostDoctors = findMax(states, 'medicos');
    const stateWithMostHospitals = findMax(states, 'hospitals');

    return (
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography level="h4" fontWeight="bold">
                {t("dashboard_hospital")}
            </Typography>


            <Grid container spacing={2}>
                {hospitalWithMostPatients != "undefined (undefined)" ? (
                    <Grid xs={12} md={3}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("hospital_more_patient")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {hospitalWithMostPatients}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}
                {hospitalWithLeastPatients != "undefined (undefined)" ? (
                    <Grid xs={12} md={3}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("hospital_less_patient")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {hospitalWithLeastPatients}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}
                {hospitalWithMostDoctors != "undefined (undefined)" ? (
                    <Grid xs={12} md={3}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("hospital_more_doctor")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {hospitalWithMostDoctors}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}
                {hospitalWithLeastDoctors != "undefined (undefined)" ? (
                    <Grid xs={12} md={3}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("hospital_less_doctor")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {hospitalWithLeastDoctors}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}
            </Grid>

            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                        <Typography level="title-md" mb={2}>
                            {t("graphics_title_pacient_hospital")}
                        </Typography>
                        <CustomBarCharts data={formatGraphData(hospitals, "pacientes")} />
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                        <Typography level="title-md" mb={2}>
                            {t("graphics_title_doctor_hospital")}
                        </Typography>
                        <CustomBarCharts data={formatGraphData(hospitals, "medicos")} />
                    </Box>
                </Grid>
            </Grid>

            {/* SEGUNDA PARTE DOS GRAFICOS ---------------------------------------------------------------- */}

            <Grid container spacing={2} mt={3}>
                {stateWithMostPatients != "undefined (undefined)" ? (
                    <Grid xs={12} md={4}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("state_more_patient")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {stateWithMostPatients}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}

                {stateWithMostDoctors != "undefined (undefined)" ? (
                    <Grid xs={12} md={4}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("state_more_doctor")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {stateWithMostDoctors}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}

                {stateWithMostHospitals != "undefined (undefined)" ? (
                    <Grid xs={12} md={4}>
                        <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                            <Typography level="body-sm">{t("state_more_hospital")}</Typography>
                            <Typography level="title-lg" fontWeight="bold">
                                {stateWithMostHospitals}
                            </Typography>
                        </Box>
                    </Grid>
                ) : null}
            </Grid>

            <Grid container spacing={2} mt={2}>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                        <Typography level="title-md" mb={2}>
                            {t("graphics_title_pacient_state")}
                        </Typography>
                        <CustomPieChart data={formatGraphData(states, "medicos")} />
                    </Box>
                </Grid>

                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                        <Typography level="title-md" mb={2}>
                            {t("graphics_title_doctor_state")}
                        </Typography>
                        <CustomLineChart data={formatGraphData(states, "medicos")} />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                <Typography level="title-md" mb={2}>
                    {t("graphics_title_hospital_state")}
                </Typography>

                <CustomBarCharts data={formatGraphData(states, "hospital")} />
            </Box>
        </Box>
    );
};
