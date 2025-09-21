import {useTranslation} from "react-i18next";
import {useAtomValue, useSetAtom} from "jotai/index";
import HospitalsState from "../state/HospitalsState.ts";
import {Box, CircularProgress, IconButton, Typography} from "@mui/joy";
import {CustomTable} from "../../../utils/components/CustomTable.tsx";
import {FileUpload} from "../../filemanager/components/FileUpload.tsx";
import {EntityType} from "../../filemanager/entities/entities.ts";
import {useNavigate} from "react-router-dom";

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

export const Hospitals = () => {
    const {t} = useTranslation()

    const navigate = useNavigate()

    const setPage = useSetAtom(HospitalsState.Page)

    const hospitalsAtom = useAtomValue(HospitalsState.List)

    const hospitals = hospitalsAtom.state === 'hasData' ? hospitalsAtom.data : null

    if (hospitalsAtom.state === 'loading') {
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
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {t("hospitals")}
                </Typography>
                <FileUpload entityType={EntityType.HOSPITAL}/>
            </Box>
            <CustomTable
                page={hospitals?.page ?? 0}
                count={hospitals?.totalCount ?? 0}
                onChangePagination={(value) => {
                    setPage(value)
                }}
                sx={{
                    "& thead th:nth-child(1)": {
                        width: 300,
                    },
                    "& thead th:nth-child(2)": {
                        width: 350,
                    },
                    "& thead th:nth-child(7)": {
                        width: 50,
                    },
                    "& tbody td": {
                        overflowX: "hidden"
                    }
                }}
            >
                <thead>
                <tr>
                    <th>{t("code")}</th>
                    <th>{t("name")}</th>
                    <th>{t("bed_capacity")}</th>
                    <th>{t("city")}</th>
                    <th>{t("neighborhood")}</th>
                    <th>{t("uf")}</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {
                    hospitals && hospitals.items?.map((h, i) => (
                        <tr key={`hospital_list_${i}`}>
                            <td>{h.code}</td>
                            <td>{h.name}</td>
                            <td>{h.badCapacity}</td>
                            <td>{h?.city?.name ?? "-"}</td>
                            <td>{h?.neighborhood ?? "-"}</td>
                            <td>{h?.city?.state?.codeUF ?? "-"}</td>
                            <td>
                                <IconButton
                                    size={"sm"}
                                    onClick={() => {
                                        navigate(`/hospital/${h.code}`)
                                    }}
                                >
                                    <MoreVertRoundedIcon/>
                                </IconButton>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </CustomTable>
        </Box>
    )
}