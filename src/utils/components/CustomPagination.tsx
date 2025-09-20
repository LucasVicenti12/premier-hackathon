import usePagination from "@mui/material/usePagination";
import {ChangeEvent, memo} from "react";
import {Button, styled} from "@mui/joy";

import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: 3,
    alignItems: "center"
});

interface CustomPaginationProps {
    count: number,
    page: number,

    onChange(event: ChangeEvent<unknown>, value: number): void
}

export const CustomPagination = memo((props: CustomPaginationProps) => {
    const {items} = usePagination({
        count: Math.ceil(props.count / 10),
        onChange: props.onChange,
        page: props.page
    });

    return (
        <nav>
            <List>
                {items.map(({page, type, selected, ...item}, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = (
                            <div
                                style={{
                                    letterSpacing: "0.15em",
                                    minWidth: "32px",
                                    fontSize: "0.875rem",
                                    lineHeight: "1.43",
                                    boxSizing: "border-box",
                                    height: "auto",
                                    padding: "0 6px",
                                    textAlign: "center",
                                    fontWeight: 400,
                                    color: "#ffffff",
                                    border: "#ffffff"
                                }}
                            >
                                ...
                            </div>
                        );
                    } else if (type === 'page') {
                        children = (
                            <Button
                                size={"sm"}
                                variant={"outlined"}
                                type="button"
                                style={{
                                    letterSpacing: "0.01071em",
                                    minWidth: "32px",
                                    fontSize: "0.875rem",
                                    lineHeight: "1.43",
                                    boxSizing: "border-box",
                                    height: "32px",
                                    padding: "0 6px",
                                    backgroundColor: selected ? "#ffffff50" : undefined,
                                    color: "#ffffff",
                                    borderColor: "#ffffff"
                                }}
                                {...item}
                            >
                                {page}
                            </Button>
                        );
                    } else {
                        children = (
                            <Button
                                size={"sm"}
                                variant={"outlined"}
                                type="button"
                                style={{
                                    letterSpacing: "0.01071em",
                                    minWidth: "32px",
                                    fontSize: "0.875rem",
                                    lineHeight: "1.43",
                                    boxSizing: "border-box",
                                    height: "32px",
                                    padding: "0 6px",
                                    backgroundColor: selected ? "#1976d21f" : undefined,
                                    marginRight: type === "previous" ? "5px" : undefined,
                                    marginLeft: type !== "previous" ? "5px" : undefined
                                }}
                                {...item}
                            >
                                {type === "previous" ? (
                                    <NavigateBeforeRoundedIcon sx={{color: "#ffffff"}}/>
                                ) : (
                                    <NavigateNextRoundedIcon sx={{color: "#ffffff"}}/>
                                )}
                            </Button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    );
})