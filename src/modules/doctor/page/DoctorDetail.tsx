import { useEffect, useState, useTransition } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { doctorsUseCase } from "../usecase/DoctorsUseCase"
import { Doctor } from "../entities/entities"
import { Box, CircularProgress, Typography } from "@mui/joy"

export const DoctorDetail = () => {
    const doctorCode = useParams()?.doctorCode ?? ""

    const { t } = useTranslation()

    const [doctor, setDoctor] = useState<Doctor | null>()
    const [pending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            const response = await doctorsUseCase.getDoctorByCode(doctorCode)
            if (response.doctor) {
                setDoctor(response.doctor)
            }
        })
    }, [doctorCode]);

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
                <CircularProgress />
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
                    #{doctor?.code}
                </Typography>
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {doctor?.fullName}
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
                    {t("doctor_information")}
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
                        {doctor?.code}
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
                        {doctor?.fullName}
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
                        {t("expertise")}
                    </Typography>
                    <Typography level={"body-md"} fontWeight={"bold"}>
                        {doctor?.expertise}
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
                            {doctor?.city.name} {doctor?.city.state.codeUF}
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
                            {doctor?.city.latitude}/{doctor?.city.longitude}
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
                            {doctor?.city.codeIBGE}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}