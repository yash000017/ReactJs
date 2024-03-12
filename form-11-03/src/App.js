import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    hobbies: "",
    gender: "",
  });

  return (
    <div className="">
      <h1>Form</h1>
      {showForm && (
        <Form
          setShowForm={setShowForm}
          setShowModal={setShowModal}
          data={data}
          setData={setData}
        />
      )}
      {showModal && (
        <Modal
          setShowForm={setShowForm}
          setShowModal={setShowModal}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}

export default App;
