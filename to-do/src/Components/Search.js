import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Search({
  data,
  setData,
  dupData,
  setDupData,
  searchFilterData,
  setSearchFilterData,
}) {
  console.log(dupData, "dupData");
  function handleSearch(e) {
    const searchTerm = e.target.value.trim();
    if (searchTerm.length > 0) {
      let filteredData = [];
      // console.log(searchFilterData, "searchFilterData");
      if (searchFilterData.length > 0) {
        filteredData = searchFilterData.filter((item) => {
          return item.title.includes(searchTerm);
        });
      } else {
        filteredData = dupData.filter((item) => {
          return item.title.includes(searchTerm);
        });
      }

      setData(filteredData);
    } else {
      setData(dupData);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: 250 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ backgroundColor: "white" }}
        label="Search Task"
        onChange={(e) => handleSearch(e)}
        InputProps={{
          type: "search",
        }}
      />
    </Box>
  );
}
