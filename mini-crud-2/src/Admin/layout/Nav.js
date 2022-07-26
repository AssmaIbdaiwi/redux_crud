import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import  { useEffect, useState } from "react";
import { CheckUser } from "../../Action";



const Nav = () => {
const users = useSelector((state) => state);
 console.log(users);



 
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "rgb(135 24 24 / 97%)" }}
      >
        <a
          class="navbar-brand"
          href="/"
          style={{ marginLeft: "30px", fontWeight: "bolder", color: "white" }}
        >
          {" "}
          Booky
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink
                to="/View"
                style={({ isActive }) =>
                  isActive
                    ? { color: "white", padding: "15px", fontSize: "18px" }
                    : { color: "grey", padding: "15px", fontSize: "18px" }
                }
              >
                Home
              </NavLink>
            </li>
            {!users && (
              <li class="nav-item">
                <NavLink
                  to="/add"
                  style={({ isActive }) =>
                    isActive
                      ? { color: "white", padding: "15px", fontSize: "18px" }
                      : { color: "grey", padding: "15px", fontSize: "18px" }
                  }
                >
                  Add
                </NavLink>
              </li>
            )}
            {users && (
              <li class="nav-item dropdown">
                <NavLink
                  to="/login"
                  style={({ isActive }) =>
                    isActive
                      ? { color: "white", padding: "15px", fontSize: "18px" }
                      : { color: "grey", padding: "15px", fontSize: "18px" }
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav
