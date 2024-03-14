import Add from "./Add";
import CustomizedTables from "./Table";
import Search from "./Search";
import Filter from "./Filter";
import AddModal from "./AddModal";
import Edit from "./Edit";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(false);
  const [editCounter, setEditCounter] = useState(false);
  const [editId, setEditId] = useState("");
  const [dupData, setDupData] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [personName, setPersonName] = useState([]);
  const [personName1, setPersonName1] = useState([]);
  const [filter, setFilter] = useState({
    personName: [],
    personName1: [],
  });

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // const handleChange1 = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName1(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  const handleChange = (event) => {
    console.log(event.target, "xx");
    const { name, value } = event.target;
    setFilter(
      { ...filter, [name]: value }
      // On autofill we get a stringified value.
      // typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="App">
      <div className="nav">
        <h1 className="nav-header">ToDo List</h1>
        <Add setCounter={setCounter} />
      </div>
      {counter && (
        <AddModal
          data={data}
          setData={setData}
          setCounter={setCounter}
          dupData={dupData}
          setDupData={setDupData}
        />
      )}
      {editCounter && (
        <Edit
          data={data}
          setData={setData}
          setEditCounter={setEditCounter}
          editId={editId}
          dupData={dupData}
          setDupData={setDupData}
        />
      )}
      <div className="flex">
        <Search
          dupData={dupData}
          setDupData={setDupData}
          data={data}
          setData={setData}
          searchFilterData={searchFilterData}
          setSearchFilterData={setSearchFilterData}
        />
        <Filter
          dupData={dupData}
          setDupData={setDupData}
          data={data}
          setData={setData}
          searchFilterData={searchFilterData}
          setSearchFilterData={setSearchFilterData}
          handleChange={handleChange}
          personName={personName}
          personName1={personName1}
          filter={filter}
          setFilter={setFilter}
          setPersonName={setPersonName}
          setPersonName1={setPersonName1}
          // handleChange1={handleChange1}
        />
      </div>
      <CustomizedTables
        data={data}
        setData={setData}
        setEditCounter={setEditCounter}
        setEditId={setEditId}
        dupData={dupData}
        setDupData={setDupData}
        filter={filter}
        personName={personName}
        personName1={personName1}
      />
    </div>
  );
}

export default App;
