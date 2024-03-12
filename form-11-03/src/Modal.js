export default function Modal({ data, setData, setShowForm, setShowModal }) {
  function closeModal() {
    setShowModal(false);
    setShowForm(true);
    setData({
      name: "",
      email: "",
      contact: "",
      hobbies: "",
      gender: "",
    });
  }
  return (
    <div>
      <div>Name : {data.name}</div>
      <div>Email : {data.email}</div>
      <div>Contact : {data.contact}</div>
      <div>Hobbies : {data.hobbies}</div>
      <div>Gender : {data.gender}</div>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}
