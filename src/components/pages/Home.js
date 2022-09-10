import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Header from "../layout/Header";
import { auth, provider } from "../pages/firebase";
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";
function Home() {
  const navigate = useHistory();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate.push("/recipes");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Header bgClass="bg-image" title="Amazing Recipes">
      <Button
        as={Link}
        to={signInWithGoogle}
        color="linkedin"
        content="SignIn"
        size="big"
      />
    </Header>
  );
}
export default Home;
