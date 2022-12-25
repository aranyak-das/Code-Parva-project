import React, { useState, useEffect } from "react";
import "./ShowPets.css";
import axios from "axios";

function ShowPets() {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div style={{ marginTop: "150px" }}>
      <h2 id="tableHead">What Pets do we have?</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "centre" }}>No.</th>
            <th style={{ textAlign: "centre" }}>Name</th>
            <th style={{ textAlign: "centre" }}>Breed</th>
            <th style={{ textAlign: "centre" }}>Age (in months)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.breed}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowPets;
