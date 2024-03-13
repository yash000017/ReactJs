import Add from "./Add";
import CustomizedTables from "./Table";
import Search from "./Search";
import Filter from "./Filter";
import AddModal from "./AddModal";
import Edit from "./Edit";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(false);
  const [editCounter, setEditCounter] = useState(false);
  const [editId, setEditId] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className="nav">
        <h1 className="nav-header">ToDo List</h1>
        <Add setCounter={setCounter} />
      </div>
      {counter && (
        <AddModal data={data} setData={setData} setCounter={setCounter} />
      )}
      <div className="flex">
        <Search />
        <Filter />
      </div>
      {editCounter && (
        <Edit
          data={data}
          setData={setData}
          setEditCounter={setEditCounter}
          editId={editId}
        />
      )}
      <CustomizedTables
        data={data}
        setData={setData}
        setEditCounter={setEditCounter}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;
