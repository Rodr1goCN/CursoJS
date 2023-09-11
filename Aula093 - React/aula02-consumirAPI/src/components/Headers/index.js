import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../store/modules/auth/action'
import history from "../../services/history";

import { Nav } from "./styled";

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const handLogout = e => {
        e.preventDefault();

        dispatch(actions.loginFailure());
        history.push('/')
    };

    return (
        <Nav>
            <Link to="/">
                <FaHome size={25} />
            </Link>
            <Link to="/register">
                <FaUserAlt size={25} />
            </Link>

            {isLoggedIn ? (
                <Link onClick={handLogout} to="/logout">
                    <FaPowerOff size={25} />
                </Link>
            ) : (
                <Link to="/login">
                    <FaSignInAlt size={25} />
                </Link>
            )}


            {isLoggedIn && <FaCircle size={25} color="#19FA56" />}

        </Nav>
    );
}
