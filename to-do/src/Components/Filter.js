import * as React from "react";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const statusData = ["Pending", "Completed", "Not Started"];

const priorityData = ["High", "Medium", "Low"];

export default function Filter({
  data,
  setData,
  dupData,
  setDupData,
  searchFilterData,
  setSearchFilterData,
  personName,
  handleChange,
  personName1,
  filter,
  setPersonName,
  setPersonName1,
  // handleChange1,
}) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          name="personName"
          value={filter.personName}
          onChange={(e) => {
            handleChange(e);
            // handleStatusChange(e);
          }}
          input={<OutlinedInput label="Status" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {statusData.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filter.personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Priority</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filter.personName1}
          name="personName1"
          onChange={(e) => {
            handleChange(e);
            // handlePriorityChange(e);
          }}
          input={<OutlinedInput label="Priority" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {priorityData.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filter.personName1.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
