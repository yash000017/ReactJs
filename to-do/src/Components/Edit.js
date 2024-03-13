import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function Edit({ setEditCounter, data, setData, editId }) {
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

  const singleData = data.find((item) => item.id == editId);
  console.log(singleData);

  const [title, setTitle] = useState(singleData.title);
  const [description, setDescription] = useState(singleData.description);
  const [priority, setPriority] = useState(singleData.priority);
  const [status, setStatus] = useState(singleData.status);

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priorityError, setPriorityError] = useState("");
  const [statusError, setStatusError] = useState("");

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

    const updatedData = data.map((item) => {
      if (item.id === editId) {
        return {
          ...item,
          title: title,
          description: description,
          priority: priority,
          status: status,
          updatedtime: new Date().toISOString(),
        };
      }
      return item;
    });

    setData(updatedData);
    setEditCounter(false);
  }

  function handleClose() {
    setEditCounter(false);
  }
  return (
    <div className="addModal">
      <div className="flex-addModal">
        <h2>Edit Task</h2>
        <CloseIcon onClick={handleClose} sx={{ marginTop: "22px" }} />
      </div>
      <TextField
        sx={{ width: 500 }}
        placeholder="Title"
        id="outlined-select-currency"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></TextField>
      <>{titleError}</>

      <TextField
        sx={{ width: 500 }}
        placeholder="Description"
        id="outlined-select-currency"
        value={description}
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
          value={priority}
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
          value={status}
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
        Update
      </Button>
    </div>
  );
}
