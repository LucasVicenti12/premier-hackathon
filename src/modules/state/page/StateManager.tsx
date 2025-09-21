import {useAtomValue, useSetAtom} from "jotai"
import {useTranslation} from "react-i18next"
import {Box, CircularProgress, Typography} from "@mui/joy"

import {CustomTable} from "../../../utils/components/CustomTable.tsx"
import {EntityType} from "../../filemanager/entities/entities.ts";
import {FileUpload} from "../../filemanager/components/FileUpload.tsx";
import StateManagerState from "../state/StateManagerState.ts";

export const StateManager = () => {
    const {t} = useTranslation()

    const setPage = useSetAtom(StateManagerState.Page)
    const stateAtom = useAtomValue(StateManagerState.List)

    const states = stateAtom.state === 'hasData' ? stateAtom.data : null

    if (stateAtom.state === 'loading') {
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
                    {t("states")}
                </Typography>
                <FileUpload entityType={EntityType.STATE}/>
            </Box>

            <CustomTable
                page={states?.page ?? 0}
                count={states?.totalCount ?? 0}
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
                    <th>{t("latitude")}</th>
                    <th>{t("longitude")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    states && states.items?.map((l, i) => (
                            <tr key={`patient_list_${i}`}>
                                <td>{l.codeUF}</td>
                                <td>{l.name}</td>
                                <td>{l.latitude}</td>
                                <td>{l.longitude}</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </CustomTable>
        </Box>
    )

}