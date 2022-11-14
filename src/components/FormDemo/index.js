import React, { useState } from "react";
import "./style.css";

const FormDemo = () => {

  const [formData, setFormData] = useState({});

  const handleFormInput = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleCheckboxInput = (target) => {
    setFormData({
      ...formData,
      [target.name]: target.checked
    })
  }


  return (
    <div className="FormDemo">
      <h1 className="demo-title">App - Form</h1>

      <form className="form">
        <div className="form__field">
          <label>What is your pet's name?</label>
          <input
            name="petName"
            onChange={(event) => {
              handleFormInput(event.target);
              console.log(formData)}
              
            }
            type="text"
          />
        </div>

        <div className="form__field">
          <label>How old is your pet (years)?</label>
          <input
            name="age"
            type="number"
            min={1}
            max={200}
            onChange={(event) => {
              handleFormInput(event.target);
              console.log(formData)}
            }
          />
        </div>

        <div className="form__field">
          <label>What is your pet's species?</label>
          <select name="species"
            onChange={(event) => {
              handleFormInput(event.target);
              console.log(formData)}
              
            }
            type="text"
          >
            <option value="Canary">Canary</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Gerbil">Gerbil</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Snake">Snake</option>
          </select>
        </div>

        <div className="form__field">
          <label>What is your pet's favourite activity?</label>
          <textarea
            name="favouriteActivity"
            onChange={(event) => {
              handleFormInput(event.target);
              console.log(formData)}
              
            }
            type="text"
            />
        </div>

        <div className="form__field">
          <label htmlFor="isLoved">
            <input
              name="isLoved"
              onChange={(event) => {
                handleCheckboxInput(event.target);
                console.log(formData)}
                
              }
              type="checkbox"
            />
            Do you love your pet?
          </label>
        </div>

        <button type="submit">Submit query</button>
      </form>
    </div>
  );
};

export default FormDemo;
