import {EntityType} from "../entities/entities.ts";
import {Box, Button, Option, Select} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {type ChangeEvent, useRef, useState} from "react";
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import {fileManagerUseCase} from "../usecase/FileManagerUseCase.ts";

export const FileUpload = () => {
    const inputRefFile = useRef<HTMLInputElement | null>(null)

    const [type, setType] = useState(EntityType.NONE)

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

                fileManagerUseCase.sendFile({
                    contentType: file.type,
                    name: file.name,
                    type: type,
                    data: fileBase64 as string
                }).then((response) => {
                    console.log(response)
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
            <Button
                disabled={type === EntityType.NONE}
                onClick={() => {
                    submitFile()
                }}
                startDecorator={<AttachFileOutlinedIcon/>}
            >
                {t("upload_file")}
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