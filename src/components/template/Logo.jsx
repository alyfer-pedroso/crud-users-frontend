import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import "./Logo.css";

export default (props) => (
    <aside className="logo">
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
    </aside>
);