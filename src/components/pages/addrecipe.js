import { addDoc, collection } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import {db} from "../pages/firebase"
import { async } from "@firebase/util";
import { useState } from "react";
import React from "react";
const AddRecipe = () => {
  const [recipename, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const colRef = collection(db, "recipe");
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      recipename,
      ingredients,
      preparation,
    });
    navigate.push("/addedrecipe");
  };
  return (
    <div className="add-form">
      <h3
        style={{
          textAlign: "center",
          color: "#d65a31",
          marginTop: "25px",
        }}
      >
        Add Recipe
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Dish Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="dish name..."
            value={recipename}
            onChange={(e) => setRecipeName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <input
            type="text"
            className="form-control"
            placeholder="dish name..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preparation</label>
          <textarea
            required
            placeholder="Preparation Steps ..."
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
