import {useParams} from "react-router-dom";
import {useEffect, useState, useTransition} from "react";
import {Hospital} from "../entities/entities.ts";
import {hospitalsUseCase} from "../usecase/HospitalsUseCase.ts";
import {Box, CircularProgress, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";

export const HospitalDetail = () => {
    const hospitalCode = useParams()?.hospitalCode ?? ""

    const {t} = useTranslation()

    const [hospital, setHospital] = useState<Hospital | null>()
    const [pending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            const response = await hospitalsUseCase.getHospitalByCode(hospitalCode)
            if (response.hospital) {
                setHospital(response.hospital)
            }
        })
    }, [hospitalCode]);

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
                    #{hospital?.code}
                </Typography>
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {hospital?.name}
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
                    {t("hospital_information")}
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
                        {hospital?.code}
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
                        {hospital?.name}
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
                        {hospital?.badCapacity}
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
                        flex: 0.5
                    }}
                >
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {t("specialities")}
                    </Typography>
                    {
                        hospital?.specialities?.map((s, i) => (
                            <Box key={`specialities_list_${i}`}>
                                <Typography level={"body-md"}>{s}</Typography>
                            </Box>
                        ))
                    }
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
                            {hospital?.city.name} {hospital?.city.state.codeUF}
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
                            {hospital?.neighborhood}
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
                            {hospital?.city.latitude}/{hospital?.city.longitude}
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
                            {hospital?.city.codeIBGE}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}