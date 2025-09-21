import {useTranslation} from "react-i18next";
import {useAtomValue, useSetAtom} from "jotai/index";
import {Box, CircularProgress, Typography} from "@mui/joy";
import {FileUpload} from "../../filemanager/components/FileUpload.tsx";
import {EntityType} from "../../filemanager/entities/entities.ts";
import {CustomTable} from "../../../utils/components/CustomTable.tsx";
import CidTableState from "../state/CidTableState.ts";

export const CidTableManager = () => {
    const {t} = useTranslation()

    const setPage = useSetAtom(CidTableState.Page)

    const cidTableAtom = useAtomValue(CidTableState.List)

    const cidTable = cidTableAtom.state === 'hasData' ? cidTableAtom.data : null

    if (cidTableAtom.state === 'loading') {
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
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Typography level={"body-lg"} fontWeight={"bold"}>
                    {t("CID_TABLE")}
                </Typography>
                <FileUpload entityType={EntityType.CID_TABLE}/>
            </Box>
            <CustomTable
                page={cidTable?.page ?? 0}
                count={cidTable?.count ?? 0}
                onChangePagination={(value) => {
                    setPage(value)
                }}
                sx={{
                    "& thead th:nth-child(1)": {
                        width: 450,
                    },
                    "& tbody td": {
                        overflowX: "hidden"
                    }
                }}
            >
                <thead>
                <tr>
                    <th>{t("code")}</th>
                    <th>{t("description")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    cidTable && cidTable.items?.map((d, i) => (
                        <tr key={`cid_table_list_${i}`}>
                            <td>{d.code}</td>
                            <td>{d.description}</td>
                        </tr>
                    ))
                }
                </tbody>
            </CustomTable>
        </Box>
    )
}