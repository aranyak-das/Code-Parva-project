import React, { useState } from "react";
import "./AdoptForm.css";

const AdoptForm = () => {
  const [formState, setFormState] = useState({
    petType: "",
    breed: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    // const { name, value } = event.target;
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const { petType, breed, name, email, phone } = formState;
  //     const res = await fetch("api/post", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         petType,
  //         breed,
  //         name,
  //         email,
  //         phone,
  //       }),
  //     });
  //     const data = await res.json();
  //     if (data.status === 200 || !data) {
  //       window.alert("Invalid Registration");
  //     } else {
  //       window.alert("Successful Registration");
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/adopt_users", {
      method: "POST",
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form /*method="POST"*/ className="adopt-form" onSubmit={handleSubmit}>
      <h2>Adopt a Pet</h2>
      <h2>What Pet do you want to adopt?</h2>
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
            name="fullName"
            value={formState.fullName}
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
      <button type="submit" /*onClick={handleSubmit}*/>
        Request for Give Away
      </button>
    </form>
  );
};

export default AdoptForm;
