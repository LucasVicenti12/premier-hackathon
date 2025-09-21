import { Box, Typography, Grid } from "@mui/joy";
import { useTranslation } from "react-i18next";
import ChoroplethMap from "../../../utils/components/CustomChoroplethMap";
import estadosBrazilGeoJSON from "../../../utils/geojson/brazil_states.geojson?raw";
import AccessibleHospitalMap from "../../../utils/components/CustomAccessibleMap";
// import { useAtomValue } from "jotai";
// import HospitalMetricState from "../../home/state/HospitalMetricState";
// import StateMetricState from "../../home/state/StateMetricState";

interface HospitalData {
    nome: string;
    pacientes: number;
    medicos: number;
    hospitais: number;
    coordenadas: [number, number];
}

export const Maps = () => {
    const { t } = useTranslation();

    const geoJsonData = JSON.parse(estadosBrazilGeoJSON);

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
    
        // const hospitals = hospitalMetric ? hospitalMetric.items?.map(item => ({
        //     nome: item.name,
        //     pacientes: item.quantitypatient || 0,
        //     medicos: item.quantitydoctors || 0,  
        //     hospitais: 1
        // })) ?? [] : []

        // const states = statesMetric ? statesMetric.items?.map(item => ({
        //     nome: item.name,
        //     pacientes: item.quantitypatient || 0,
        //     medicos: item.quantitydoctors || 0,
        //     hospitais: item.quantityhospital || 0
        // })) ?? [] : []


    const dadosPorEstado = {
        "São Paulo": { pacientes: 3200, medicos: 1000, hospitais: 58 },
        "Minas Gerais": { pacientes: 5000, medicos: 300, hospitais: 32 },
        "Rio de Janeiro": { pacientes: 1500, medicos: 250, hospitais: 28 },
        "Paraná": { pacientes: 1200, medicos: 200, hospitais: 20 },
        "Bahia": { pacientes: 900, medicos: 150, hospitais: 15 },
        "Santa Catarina": { pacientes: 750, medicos: 120, hospitais: 10 },
        "Rio Grande do Sul": { pacientes: 820, medicos: 130, hospitais: 12 },
    };

    const hospitaisParaExibir: HospitalData[] = [
        {
            nome: "Hospital Santa Maria",
            pacientes: 450,
            medicos: 80,
            hospitais: 1,
            coordenadas: [-26.9089, -49.0743],
        },
        {
            nome: "Hospital Santo Antônio",
            pacientes: 380,
            medicos: 75,
            hospitais: 1,
            coordenadas: [-26.9140, -49.0720],
        },
    ];

    return (
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography level="h4" fontWeight="bold">
                {t("map_title")}
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                        <Typography level="title-md" mb={2}>
                            {t("map_title_state")}
                        </Typography>
                        <ChoroplethMap
                            geoJsonData={geoJsonData}
                            data={dadosPorEstado}
                            valueKey="pacientes"
                        />
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box sx={{ p: 2, borderRadius: "md", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", bgcolor: "background.body", }}>
                        <Typography level="title-md" mb={2}>
                            {t("map_title_hospital")}
                        </Typography>
                        <AccessibleHospitalMap
                            hospitalsData={hospitaisParaExibir}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};