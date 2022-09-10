import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo.svg";


function Navbar({setIsAuth}) {

  return (
    <Menu borderless fixed="top">
      <Menu.Item>
        <Menu.Header style={{ marginRight: "25px" }}>
          <img src={logo} alt="logo" />
        </Menu.Header>
      </Menu.Item>
      <Menu.Item as={Link} to="/" content="Home" />
      <Menu.Item as={NavLink} to="/recipes" content="Recipes" />
      <Menu.Item as={NavLink} to="/addrecipe" content="Add" />
      <Menu.Item as={NavLink} to="/addedrecipe" content="Blogs" />


    </Menu>
  );
}
export default Navbar;
