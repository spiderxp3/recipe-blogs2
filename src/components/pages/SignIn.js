import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";
const SignIn = ({setIsAuth}) => {
    const navigate = useHistory();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate.push("/recipes");
            window.location.reload();
          })
          .catch((err) => console.log(err));
      };
      return (
        <div className="signIn">
          <div className="card text-center ">
            <div className="card-body">
              {/* <img src={image} className=" img img-fluid" alt="..."></img> */}
              <h3 className="card-title">Google Authentication</h3>
    
              <button className="btn btn-primary" onClick={signInWithGoogle}>
                SignIn
              </button>
            </div>
          </div>
        </div>
      );
};

export default SignIn;