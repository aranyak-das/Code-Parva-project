import React, { useState } from "react";
import "./GiveAwayForm.css";

const GiveAwayForm = () => {
  const [formState, setFormState] = useState({
    petType: "",
    breed: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the form data to the server or do something else with it
    console.log(formState);
  };

  return (
    <form className="adopt-form" onSubmit={handleSubmit}>
      <h2>Give Away a Pet</h2>
      <h2>What Pet do you want to give away?</h2>
      <div className="form-section">
        <label>
          Pet Type:
          <select
            name="petType"
            value={formState.petType}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </label>
      </div>
      <div className="form-section">
        <label>
          Breed:
          <select
            name="breed"
            value={formState.breed}
            onChange={handleChange}
            disabled={formState.petType === ""}
          >
            <option value="">--Please choose an option--</option>
            {formState.petType === "dog" && (
              <React.Fragment>
                <option value="lab">Lab</option>
                <option value="pug">Pug</option>
                <option value="doberman">Doberman</option>
              </React.Fragment>
            )}
            {formState.petType === "cat" && (
              <React.Fragment>
                <option value="siamese">Siamese</option>
                <option value="persian">Persian</option>
                <option value="scottish">Scottish</option>
              </React.Fragment>
            )}
          </select>
        </label>
      </div>
      <h2>Please fill your details</h2>
      <div className="form-section">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-section">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-section">
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Request for Give Away</button>
    </form>
  );
};

export default GiveAwayForm;
