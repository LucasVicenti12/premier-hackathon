import { useTranslation } from "react-i18next";
import { useAtomValue, useSetAtom } from "jotai/index";
import DoctorState from "../state/DoctorState";
import { Box, CircularProgress, IconButton, Typography } from "@mui/joy";
import { CustomTable } from "../../../utils/components/CustomTable";
import { EntityType } from "../../filemanager/entities/entities.ts";
import { FileUpload } from "../../filemanager/components/FileUpload.tsx";
import { useNavigate } from "react-router-dom";

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

export const DoctorManager = () => {
    const { t } = useTranslation()

    const navigate = useNavigate()

    const setPage = useSetAtom(DoctorState.Page)

    const doctorsAtom = useAtomValue(DoctorState.List)

    const doctors = doctorsAtom.state === 'hasData' ? doctorsAtom.data : null

    if (doctorsAtom.state === 'loading') {
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
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {t("doctors")}
                </Typography>
                <FileUpload entityType={EntityType.DOCTOR} />
            </Box>
            <CustomTable
                page={doctors?.page ?? 0}
                count={doctors?.totalCount ?? 0}
                onChangePagination={(value) => {
                    setPage(value)
                }}
                sx={{
                    "& thead th:nth-child(1)": {
                        width: 450,
                    },
                    "& thead th:nth-child(5)": {
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
                        <th>{t("expertise")}</th>
                        <th>{t("city")}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors && doctors.items?.map((d, i) => (
                            <tr key={`hospital_list_${i}`}>
                                <td>{d.code}</td>
                                <td>{d.fullName}</td>
                                <td>{d.expertise}</td>
                                <td>{d.city.name}</td>
                                <td>
                                    <IconButton
                                        size={"sm"}
                                        onClick={() => {
                                            navigate(`/doctorManager/${d.code}`);
                                        }}
                                    >
                                        <MoreVertRoundedIcon />
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