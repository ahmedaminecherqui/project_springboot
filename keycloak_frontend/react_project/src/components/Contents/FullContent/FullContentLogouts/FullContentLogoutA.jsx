// src/components/FullContentLogoutA.jsx
import React from 'react';
import { BiExit, BiWindowClose } from 'react-icons/bi';
import { logout } from '../../../../authUtils.js'; // Import the logout function

const FullContentLogoutA = () => {
    return (
        <div className="logout">
            <h2>Are you sure you want to logout?</h2>
            <div className="btn--layer">
                <button
                    className="addbtn"
                    onClick={() => logout()} // Call logout function on click
                >
                    <BiExit className="icon" />
                    Logout
                </button>
                <a href="/admin" className="stopbtn">
                    <BiWindowClose className="icon" />
                    Cancel
                </a>
            </div>
        </div>
    );
};

export default FullContentLogoutA;
