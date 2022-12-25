import React, { useState } from "react";
import "./GiveAwayForm.css";

const GiveAwayForm = () => {
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    setPetType({ ...petType, [event.target.name]: event.target.value });
    setBreed({ ...breed, [event.target.name]: event.target.value });
    setFullName({ ...fullName, [event.target.name]: event.target.value });
    setEmail({ ...email, [event.target.name]: event.target.value });
    setPhone({ ...phone, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/give_away_users", {
        petType: petType,
        breed: breed,
        fullName: fullName,
        email: email,
        phone: phone,
      })
      .then(() => {
        alert("Registered");
      });
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
            value={petType.petType}
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
            value={breed.breed}
            onChange={handleChange}
            disabled={petType.petType === ""}
          >
            <option value="">--Please choose an option--</option>
            {petType.petType === "dog" && (
              <React.Fragment>
                <option value="lab">Lab</option>
                <option value="pug">Pug</option>
                <option value="doberman">Doberman</option>
              </React.Fragment>
            )}
            {petType.petType === "cat" && (
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
            value={fullName.fullName}
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
            value={email.email}
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
            value={phone.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Request for Give Away</button>
    </form>
  );
};

export default GiveAwayForm;
