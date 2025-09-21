import {useAtomValue, useSetAtom} from "jotai"
import {useTranslation} from "react-i18next"
import {Box, CircularProgress, Typography} from "@mui/joy"

import {CustomTable} from "../../../utils/components/CustomTable.tsx"
import {EntityType} from "../../filemanager/entities/entities.ts";
import {FileUpload} from "../../filemanager/components/FileUpload.tsx";
import CityManagerState from "../state/CityManagerState.ts";

export const CityManager = () => {
    const {t} = useTranslation()

    const setPage = useSetAtom(CityManagerState.Page)
    const cityAtom = useAtomValue(CityManagerState.List)

    const cities = cityAtom.state === 'hasData' ? cityAtom.data : null

    if (cityAtom.state === 'loading') {
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
                    {t("cities")}
                </Typography>
                <FileUpload entityType={EntityType.CITY}/>
            </Box>

            <CustomTable
                page={cities?.page ?? 0}
                count={cities?.totalCount ?? 0}
                onChangePagination={(value) => {
                    setPage(value)
                }}
                sx={{
                    "& thead th:nth-child(1)": {
                        width: 100,
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
                    <th>{t("quantity_patient")}</th>
                    <th>{t("quantity_doctors")}</th>
                    <th>{t("quantity_hospitals")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    cities && cities.items?.map((l, i) => (
                            <tr key={`patient_list_${i}`}>
                                <td>{l.code}</td>
                                <td>{l.name}</td>
                                <td>{l.quantityPatient}</td>
                                <td>{l.quantityDoctors}</td>
                                <td>{l.quantityHospitals}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </CustomTable>
        </Box>
    )

}