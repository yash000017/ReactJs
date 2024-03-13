import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

export default function Filter() {
  const top100Films = [
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
    { label: "Not Started", value: "notstarted" },
  ];
  return (
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
        label="Filter"
        defaultValue="notstarted"
        helperText="Filter your task here"
      >
        {top100Films.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
