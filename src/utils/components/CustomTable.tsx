import {
    Sheet,
    Table, TableProps
} from '@mui/joy';
import {Fragment} from "react";
import {CustomPagination} from "./CustomPagination.tsx";

interface CustomTableProps extends TableProps {
    count: number,
    page: number,

    onChangePagination(value: number): void
}

export const CustomTable = (props: CustomTableProps) => {
    const {count, page, onChangePagination} = props

    return (
        <Fragment>
            <Sheet
                sx={{
                    height: 500,
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
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
                                    borderRadius: "none",
                                    textWrap: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                            }
                        }
                    }
                >
                    {props.children}
                </Table>
            </Sheet>
            <Sheet
                sx={{
                    borderBottomLeftRadius: "8px",
                    borderBottomRightRadius: "8px",
                    backgroundColor: "#033e8c",
                    p: 1
                }}
            >
                <CustomPagination
                    count={count}
                    onChange={(_, value) => onChangePagination(--value)}
                    page={page + 1}
                />
            </Sheet>
        </Fragment>
    )
}