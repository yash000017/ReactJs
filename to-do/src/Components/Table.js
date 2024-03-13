import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Avatarr from "./Avatarr";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({
  data,
  setData,
  setEditCounter,
  setEditId,
}) {
  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }
  function handleEdit(id) {
    setEditId(id);
    setEditCounter(true);
  }
  const assignObj = [
    {
      value: "Yash",
      label: (
        <div className="flex-global">
          <Avatar>Y</Avatar>
          <p className="label-p">Yash</p>
        </div>
      ),
    },
    {
      value: "Nirmal",
      label: (
        <div className="flex-global">
          <Avatar>N</Avatar>
          <p className="label-p">Nirmal</p>
        </div>
      ),
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Priority</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">CreatedTime</StyledTableCell>
            <StyledTableCell align="right">UpdatedTime</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
            <StyledTableCell align="right">Assign to</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.title}>
              <StyledTableCell>{item.id}</StyledTableCell>
              <StyledTableCell align="right" component="th" scope="row">
                {item.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{item.priority}</StyledTableCell>
              <StyledTableCell align="right">{item.status}</StyledTableCell>
              <StyledTableCell>
                <div>{new Date(item.createdtime).toLocaleTimeString()}</div>
                <div>{new Date(item.createdtime).toLocaleDateString()}</div>
              </StyledTableCell>
              <StyledTableCell>
                <div>{new Date(item.updatedtime).toLocaleTimeString()}</div>
                <div>{new Date(item.updatedtime).toLocaleDateString()}</div>
              </StyledTableCell>
              <StyledTableCell sx={{ minWidth: 150 }} align="right">
                <Button
                  onClick={() => handleDelete(item.id)}
                  sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    backgroundColor: "#1976d2",
                    marginTop: "10px",
                    width: "30px",
                    height: "45px",
                    marginRight: "10px",
                  }}
                >
                  <DeleteIcon />
                </Button>
                <Button
                  onClick={() => handleEdit(item.id)}
                  sx={{
                    color: "rgba(0, 0, 0, 0.87)",
                    backgroundColor: "#1976d2",
                    marginTop: "10px",
                    width: "30px",
                    height: "45px",
                  }}
                >
                  <EditIcon />
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: 150 },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="Yash"
                    sx={{}}
                  >
                    {assignObj.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
