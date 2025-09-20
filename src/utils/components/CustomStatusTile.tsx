import {getColorContrast} from "../functions/getColorContrast.ts";
import {Box, Typography} from "@mui/joy";

interface CustomStatusTileProps {
    label: string,
    color: string
}

export const CustomStatusTile = (props: CustomStatusTileProps) => {
    const colors = getColorContrast(props.color)

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
                sx={{
                    backgroundColor: colors.transparent,
                    p: 0.5,
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 0.5,
                }}
            >
                <Typography
                    sx={{
                        color: props.color,
                        fontWeight: "bold",
                        fontSize: "9pt",
                    }}
                >
                    {props.label}
                </Typography>
            </Box>
        </Box>
    )
}