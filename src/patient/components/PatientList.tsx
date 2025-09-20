import {Box, Button, Option, Select} from "@mui/joy";
import {useTranslation} from "react-i18next";
import {type ChangeEvent, useRef, useState} from "react";
import { CustomTable } from "../../utils/components/CustomTable";

export const PatientList = () => {
    return (
        <CustomTable>
            <CustomCard/>
        </CustomTable>
    )
}