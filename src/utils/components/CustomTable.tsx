import {
    Sheet,
    Table, TableProps
} from '@mui/joy';
import {Pagination} from "@mui/material";

export const CustomTable = (props: TableProps) => (
    <Sheet
        sx={{
            height: 500,
            borderRadius: "8px",
            position: "relative",
            overflowY: "auto"
        }}
    >
        <Table
            {...props}
            aria-label="table with sticky header"
            stickyHeader
            hoverRow
            sx={
                {
                    ...props.sx,
                    ...{
                        "& thead th": {
                            backgroundColor: "#033e8c",
                            color: "#ffffff"
                        },
                        "& tbody td": {
                            borderRadius: "none"
                        }
                    }
                }
            }
        >
            {props.children}
        </Table>
        {/*<Pagination />*/}
    </Sheet>
)