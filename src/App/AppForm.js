import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fields, setFields] = useState({});

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    console.log(event.target.name, event.target.checked);
    setFields({
      ...fields,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", fields.userName);
  };

  console.log({ fields });
  return (
    <div className="App">
      <h1>App - Form</h1>

      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <div className="form__field">
          <label>User name</label>
          <input
            name="username"
            onChange={(event) => handleChange(event)}
            type="text"
          />
        </div>
        <div className="form__field">
          <label htmlFor="type">
            <input
              name="iWantASnack"
              onChange={(event) => handleCheckboxChange(event)}
              type="checkbox"
            />
            I want mac n cheese bites
          </label>
        </div>
        <div className="form__field">
          <select name="day" onChange={(event) => handleChange(event)}>
            <option value="Mon">Mon</option>
            <option value="Tue">Tue</option>
            <option value="Wed">Wed</option>
          </select>
        </div>
        <div className="form__field">
          <textarea name="details" onChange={(event) => handleChange(event)} />
        </div>
        <button type="submit">Done!</button>
      </form>
    </div>
  );
};

export default App;
