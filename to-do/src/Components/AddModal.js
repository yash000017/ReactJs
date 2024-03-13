import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function AddModal({ setCounter, data, setData }) {
  const objStatus = [
    { label: "Completed", value: "completed" },
    { label: "Pending", value: "pending" },
    { label: "Not Started", value: "not started" },
  ];
  const objPriority = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priorityError, setPriorityError] = useState("");
  const [statusError, setStatusError] = useState("");

  function generateID() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstThreeLetters =
      alphabets.charAt(Math.floor(Math.random() * alphabets.length)) +
      alphabets.charAt(Math.floor(Math.random() * alphabets.length)) +
      alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return firstThreeLetters + randomNumber;
  }

  function handleAddData() {
    if (!title.trim()) {
      setTitleError("Title can not be empty");
      return;
    } else {
      setTitleError("");
    }

    if (!description.trim()) {
      setDescriptionError("Description can not be empty");
      return;
    } else {
      setDescriptionError("");
    }

    if (!priority) {
      setPriorityError("Please select Priority");
      return;
    } else {
      setPriorityError("");
    }

    if (!status) {
      setStatusError("Please select Status");
      return;
    } else {
      setStatusError("");
    }

    const newData = {
      id: generateID(),
      title: title,
      description: description,
      priority: priority,
      status: status,
      createdtime: new Date().toISOString(),
      updatedtime: new Date().toISOString(),
    };
    setData([...data, newData]);
    setCounter(false);
  }

  function handleClose() {
    setCounter(false);
  }
  return (
    <div className="addModal">
      <div className="flex-addModal">
        <h2>Add Task</h2>
        <CloseIcon onClick={handleClose} sx={{ marginTop: "22px" }} />
      </div>
      <TextField
        sx={{ width: 500 }}
        placeholder="Title"
        id="outlined-select-currency"
        onChange={(e) => setTitle(e.target.value)}
      ></TextField>
      <>{titleError}</>

      <TextField
        sx={{ width: 500 }}
        placeholder="Description"
        id="outlined-select-currency"
        onChange={(e) => setDescription(e.target.value)}
      ></TextField>
      <>{descriptionError}</>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 500 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue=""
          helperText="Choose the priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          {objPriority.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <>{priorityError}</>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: 500 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue=""
          helperText="Choose the status"
          onChange={(e) => setStatus(e.target.value)}
        >
          {objStatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <>{statusError}</>

      <Button onClick={handleAddData} variant="contained" disableElevation>
        Add
      </Button>
    </div>
  );
}
