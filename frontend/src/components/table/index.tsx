import React, {useState} from "react";

import {
    ContainerTable,
} from "./styles";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormUsers from "../formUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};

const TableComponent = ({tableHeader, data, deleteFn}: {tableHeader: JSX.Element, data: any[], deleteFn: (id: string) => void}) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ContainerTable>
            <Table>
                <TableHead>
                    {tableHeader}
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <>
                    <TableRow key={index}>

                        <TableCell component="th" scope="row">
                            {item?.name || item?.brand}
                        </TableCell>

                        <TableCell align="right">{item?.email}</TableCell>
                        <TableCell align="right">{item?.phone}</TableCell>
                        <TableCell align="right">

                            <IconButton onClick={handleOpen}>
                                <EditIcon />
                            </IconButton>
                            <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <FormUsers users={item} handleClose={handleClose} />
                                </Box>
                            </Modal>
                            <IconButton onClick={() => deleteFn(item?.id)}>
                                <DeleteIcon />
                            </IconButton>

                        </TableCell>

                    </TableRow>
                        </>
                    ))}
                </TableBody>
            </Table>
        </ContainerTable>
    )
}

export default TableComponent;