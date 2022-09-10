import React, { useEffect, useState } from "react";
import { getDocs, collection} from "firebase/firestore";
import {  db } from "../pages/firebase";
import { useHistory } from "react-router-dom";

const AddedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const colRef = collection(db, "recipe");
  const navigate = useHistory();


  useEffect(() => {
    const getRecipes = async () => {
      const data = await getDocs(colRef);
      setRecipes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRecipes();
  }, [colRef]);
  return (
    <div className="added">
      <h2
        style={{
          color: "#eeee",
          marginTop: "20px",
        }}
      >
        Added Recipes
      </h2>


      <div className="inner">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="card"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                margin: "10px",
                border: "3px solid orange",
                flexWrap: "wrap",
                width: "20rem",
                flex: "0 0 33.333333%",
              }}
            >
              <div className="card-body">
                <h3
                  className="card-title"
                  style={{
                    color: "#d65a31",
                  }}
                >
                  {recipe.recipename}
                </h3>
                <h5
                  className="card-subtitle"
                  style={{
                    marginTop: "2px",
                    color: "#D65A31",
                  }}
                >
                  {recipe.ingredients}
                </h5>
                <p
                  className="card-text"
                  style={{
                    wordWrap: "break-word",
                    marginTop: "5px",
                  }}
                >
                  {recipe.preparation}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddedRecipes;
