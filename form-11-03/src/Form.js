export default function Form({ setShowForm, setShowModal, data, setData }) {
  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true);
    setShowForm(false);
  }

  function closeModal() {
    setShowModal(false);
    setShowForm(false);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <span>Name* :</span>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
        </div>

        <div className="input">
          <span>email* :</span>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
        </div>

        <div className="input">
          <span>Contact* :</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            onChange={handleInput}
          />
        </div>

        <div className="input">
          <span>Hobbies :</span>
          <input
            type="text"
            name="hobbies"
            value={data.hobbies}
            onChange={handleInput}
          />
        </div>

        <div className="input">
          <span>Gender* :</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === "male"}
              onChange={handleInput}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === "female"}
              onChange={handleInput}
            />
            Female
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
