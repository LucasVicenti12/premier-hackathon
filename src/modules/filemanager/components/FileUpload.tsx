import {EntityType} from "../entities/entities.ts";
import {Box, Button, Option, Select, Typography} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {type ChangeEvent, useRef, useState} from "react";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import {fileManagerUseCase} from "../usecase/FileManagerUseCase.ts";
import {useSetAtom} from "jotai";
import FileManagerState from "../state/FileManagerState.ts";

interface FileUploadProps {
    entityType?: EntityType
}

export const FileUpload = (props: FileUploadProps) => {
    const inputRefFile = useRef<HTMLInputElement | null>(null)

    const [type, setType] = useState(props.entityType ? props.entityType : EntityType.NONE)
    const setUpdate = useSetAtom(FileManagerState.Update)

    const {t} = useTranslation()

    const options = Object.entries(EntityType).map(
        ([k, v]) => ({label: t(k), value: v})
    )

    const changeFile = (evt: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        if (evt?.target?.files) {
            const file = evt.target?.files[0];

            reader.readAsDataURL(file);
            reader.onload = function (event) {
                const fileBase64 = event?.target?.result;

                const extension = file.name.split(".").pop()?.toLowerCase() ?? ""

                fileManagerUseCase.sendFile({
                    contentType: file.type,
                    extension: extension,
                    type: type,
                    data: fileBase64 as string
                }).then((response) => {
                    if (response.status === 200) {
                        setUpdate(prev => !prev)
                    }
                })
            };
        }
    }

    const submitFile = () => {
        inputRefFile.current?.click()
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
                alignItems: "center"
            }}
        >
            {!props.entityType && (
                <Typography level={"body-md"} fontWeight={"normal"}>
                    {t("import_new_file")}
                </Typography>
            )}
            {!props.entityType && (
                <Select
                    value={type}
                    onChange={(_, value) => {
                        if (value) {
                            setType(value)
                        }
                    }}
                    sx={{
                        width: "200px"
                    }}
                >
                    {
                        options.map((o, i) => (
                            <Option value={o.value} key={`entity_type_${i}`}>
                                {o.label}
                            </Option>
                        ))
                    }
                </Select>
            )}
            <Button
                disabled={type === EntityType.NONE}
                onClick={() => {
                    submitFile()
                }}
                startDecorator={<AttachFileOutlinedIcon/>}
            >
                {props.entityType ? `${t("import")} ${t(props.entityType as string)}` : t("upload_file")}
            </Button>
            <input
                id={"file"}
                type="file"
                onChange={(evt) => changeFile(evt)}
                accept="images/*"
                style={{display: "none"}}
                ref={inputRefFile}
            />
        </Box>
    )
}