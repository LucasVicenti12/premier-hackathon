import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useState, useTransition} from "react";
import {Box, CircularProgress, Typography} from "@mui/joy";
import {patientUseCase} from "../usecase/PatientUsecase.ts";
import {Patient} from "../entities/entities.ts";

export const PatientManagerDetail = () => {
    const patientCode = useParams()?.patientCode ?? ""

    const {t} = useTranslation()

    const [patient, setPatient] = useState<Patient | null>()
    const [pending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            const response = await patientUseCase.getPatientByCode(patientCode)
            if (response.patient) {
                setPatient(response.patient)
            }
        })
    }, [patientCode]);

    if (pending) {
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <CircularProgress/>
            </Box>
        )
    }

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
                    gap: 1,
                    alignItems: "center",
                    pt: 0.5,
                    pb: 0.5
                }}
            >
                <Typography
                    level={"body-lg"}
                    fontWeight={"bold"}
                    color={"neutral"}
                >
                    #{patient?.code}
                </Typography>
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {patient?.name}
                </Typography>
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
                <Typography level={"body-md"} fontWeight={"bold"}>
                    {t("patient_information")}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        level={"body-md"}
                        fontWeight={"bold"}
                        color={"neutral"}
                    >
                        {t("code")}
                    </Typography>
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {patient?.code}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        level={"body-md"}
                        fontWeight={"bold"}
                        color={"neutral"}
                    >
                        {t("name")}
                    </Typography>
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {patient?.name}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        level={"body-md"}
                        fontWeight={"bold"}
                        color={"neutral"}
                    >
                        {t("gender")}
                    </Typography>
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {patient?.gender}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        level={"body-md"}
                        fontWeight={"bold"}
                        color={"neutral"}
                    >
                        {t("bed_capacity")}
                    </Typography>
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {patient?.bedCapacity}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                }}
            >
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
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {t("address")}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography
                            level={"body-md"}
                            fontWeight={"bold"}
                            color={"neutral"}
                        >
                            {t("city")}
                        </Typography>
                        <Typography level={"body-md"} fontWeight={"bold"}>
                            {patient?.city.name} {patient?.city.state.codeUF}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography
                            level={"body-md"}
                            fontWeight={"bold"}
                            color={"neutral"}
                        >
                            {t("neighborhood")}
                        </Typography>
                        <Typography level={"body-md"} fontWeight={"bold"}>
                            {patient?.neighborhood}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography
                            level={"body-md"}
                            fontWeight={"bold"}
                            color={"neutral"}
                        >
                            {t("latitude")}/{t("longitude")}
                        </Typography>
                        <Typography level={"body-md"} fontWeight={"bold"}>
                            {patient?.city.latitude}/{patient?.city.longitude}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography
                            level={"body-md"}
                            fontWeight={"bold"}
                            color={"neutral"}
                        >
                            {t("codigo_ibge")}
                        </Typography>
                        <Typography level={"body-md"} fontWeight={"bold"}>
                            {patient?.city.codeIBGE}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}