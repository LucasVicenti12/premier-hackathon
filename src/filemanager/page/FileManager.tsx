import {FileUpload} from "../components/FileUpload.tsx";
import {Box, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {CustomTable} from "../../utils/components/CustomTable.tsx";
import {useState} from "react";

export const FileManager = () => {
    const {t} = useTranslation()

    const [page, setPage] = useState(0)

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
                <Typography level={"body-md"} fontWeight={"bold"}>
                    {t("import_files_title")}
                </Typography>
                <FileUpload/>
            </Box>
            <CustomTable
                page={page}
                count={10}
                onChangePagination={(value) => {
                    setPage(value)
                }}
            >
                <thead>
                <tr>
                    <th>Row</th>
                    <th>Calories</th>
                    <th>Fat&nbsp;(g)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>{1}</td>
                    <td>{2}</td>
                    <td>{3}</td>
                </tr>
                </tbody>
            </CustomTable>
        </Box>
    )
}