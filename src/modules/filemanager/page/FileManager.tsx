import {FileUpload} from "../components/FileUpload.tsx";
import {Box, Button, CircularProgress, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {CustomTable} from "../../../utils/components/CustomTable.tsx";
import {useAtomValue, useSetAtom} from "jotai";
import FileManagerState from "../state/FileManagerState.ts";
import dayjs from "dayjs";
import {convertFileStatus, FileStatus} from "../entities/entities.ts";
import {CustomStatusTile} from "../../../utils/components/CustomStatusTile.tsx";
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import {fileManagerUseCase} from "../usecase/FileManagerUseCase.ts";

export const FileManager = () => {
    const {t} = useTranslation()

    const setPage = useSetAtom(FileManagerState.Page)
    const setUpdate = useSetAtom(FileManagerState.Update)

    const filesAtom = useAtomValue(FileManagerState.List)

    const files = filesAtom.state === 'hasData' ? filesAtom.data : null

    const processFile = (fileName: string) => {
        fileManagerUseCase.processFile(fileName).then((response) => {
            if (response.error) {
                console.error(response.error)
            } else {
                setUpdate(prev => !prev)
            }
        })
    }

    if (filesAtom.state === 'loading') {
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
                    {t("import_files_title")}
                </Typography>
                <FileUpload/>
            </Box>
            <CustomTable
                page={files?.page ?? 0}
                count={files?.totalCount ?? 0}
                onChangePagination={(value) => {
                    setPage(value)
                }}
                sx={{
                    "& thead th:nth-child(1)": {
                        width: 400,
                    },
                    "& thead th:nth-child(5)": {
                        width: 170,
                    },
                    "& tbody td": {
                        overflowX: "hidden"
                    }
                }}
            >
                <thead>
                <tr>
                    <th>{t("file_name")}</th>
                    <th>{t("created_at")}</th>
                    <th>{t("started_processing_at")}</th>
                    <th>{t("processed_at")}</th>
                    <th>{t("status")}</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {
                    files && files.items?.map((l, i) => {
                        const status = convertFileStatus(l.status)

                        return (
                            <tr key={`file_list_${i}`}>
                                <td>{l.fileName}</td>
                                <td>{l.createdAt ? dayjs(l.createdAt.substring(0, 23)).format("DD/MM/YYYY HH:mm") : "-"}</td>
                                <td>{l.startedProcessingAt ? dayjs(l.startedProcessingAt.substring(0, 23)).format("DD/MM/YYYY HH:mm") : "-"}</td>
                                <td>{l.processedAt ? dayjs(l.processedAt.substring(0, 23)).format("DD/MM/YYYY HH:mm") : "-"}</td>
                                <td>
                                    {
                                        status && (
                                            <CustomStatusTile
                                                label={t(status.label)}
                                                color={status.color}
                                            />
                                        )
                                    }
                                </td>
                                <td>
                                    {
                                        l.status.toUpperCase() === FileStatus.PENDING && (
                                            <Button
                                                size={"sm"}
                                                startDecorator={
                                                    <PublishedWithChangesRoundedIcon/>
                                                }
                                                onClick={() => {
                                                    processFile(l.fileName)
                                                }}
                                            >
                                                {t("process_button")}
                                            </Button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </CustomTable>
        </Box>
    )
}