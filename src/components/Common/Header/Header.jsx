import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { UiButton } from "../../Ui/UiButton/UiButton";
import { onSetLogout } from "../../../store/login/actions";

import "./Header.scss";

const LINKS = [
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Login",
    path: "/login",
  },
];

export const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);

  const handleLogout = () => {
    dispatch(onSetLogout());
  };

  const navLink = () => {
    return LINKS.map((link, index) => {
      return (
        <li key={link.path + index} className="nav-item">
          <Link to={link.path}>{link.name}</Link>
        </li>
      );
    });
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo">Logo</div>
        <nav className="nav">
          <ul className="nav-list">
            {isLogin ? (
              <li>
                <UiButton className="btn-primary" onClick={handleLogout}>
                  Logout
                </UiButton>
              </li>
            ) : (
              navLink()
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
