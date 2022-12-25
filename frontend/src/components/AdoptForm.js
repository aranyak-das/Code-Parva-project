import React, { useState } from "react";
import "./AdoptForm.css";
import axios from "axios";

const AdoptForm = () => {
  const [formState, setFormState] = useState({
    petType: "",
    breed: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    // const { name, value } = event.target;
    setPetType({ ...petType, [event.target.name]: event.target.value });
    setBreed({ ...breed, [event.target.name]: event.target.value });
    setFullName({ ...fullName, [event.target.name]: event.target.value });
    setEmail({ ...email, [event.target.name]: event.target.value });
    setPhone({ ...phone, [event.target.name]: event.target.value });
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch("http://localhost:5000/adopt_users", {
  //     method: "POST",
  //     body: JSON.stringify(formState),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => console.log("Success:", JSON.stringify(response)))
  //     .catch((error) => console.error("Error:", error));
  // };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/adopt_users", {
        petType: petType,
        breed: breed,
        fullName: fullName,
        email: email,
        phone: phone,
      })
      .then(() => {
        alert("successful insert");
      });
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
      <button type="submit" /*onClick={handleSubmit}*/>Request to Adopt</button>
    </form>
  );
};

export default AdoptForm;
