import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import AddModal from "./AddModal";

export default function Add({ setCounter }) {
  function handleAdd() {
    setCounter(true);
  }
  return (
    <div>
      <Button onClick={handleAdd} variant="contained" disableElevation>
        Add Task
      </Button>
    </div>
  );
}
