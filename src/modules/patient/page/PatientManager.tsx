import { useAtomValue, useSetAtom } from "jotai"
import PatientManagerState from "../state/PatientManagerState.ts"
import { useTranslation } from "react-i18next"
import { Box, CircularProgress, Typography } from "@mui/joy"

import { CustomTable } from "../../../utils/components/CustomTable.tsx"

export const PatientManager = () => {

    const { t } = useTranslation()

    const setPage = useSetAtom(PatientManagerState.Page)
    const patientAtom = useAtomValue(PatientManagerState.List)

    const patients = patientAtom.state === 'hasData' ? patientAtom.data : null

    if (patientAtom.state === 'loading') {
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
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {t("patient_title")}
                </Typography>
            </Box>

            <CustomTable
                page={patients?.page ?? 0}
                count={patients?.count ?? 0}
                onChangePagination={(value) => {
                    setPage(value)
                }}
                sx={{
                    "& thead th:nth-child(1)": {
                        width: 450,
                    },
                    "& thead th:nth-child(6)": {
                        width: 150,
                    },
                    "& tbody td": {
                        overflowX: "hidden"
                    }
                }}
            >
                <thead>
                    <tr>
                        <th>{t("code")}</th>
                        <th>{t("codigo_ibge")}</th>
                        <th>{t("name")}</th>
                        <th>{t("neighborhood")}</th>
                        <th>{t("gender")}</th>
                        <th>{t("bed_capacity")}</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients && patients.items?.map((l, i) => (
                                <tr key={`patient_list_${i}`}>
                                    <td>{l.code}</td>
                                    <td>{l.name}</td>
                                    <td>{l.gender}</td>
                                    <td>{l.codigoIbge}</td>
                                    <td>{l.neighborhood}</td>
                                    <td>{l.bedCapacity}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </CustomTable>
        </Box>
    )

}