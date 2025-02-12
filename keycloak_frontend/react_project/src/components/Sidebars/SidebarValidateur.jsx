import React from 'react';
import {
    BiHome,
    BiTask,
    BiMessage,
    BiSolidReport,
    BiStats,
    BiHelpCircle,
    BiExit, BiSolidGridAlt,
} from 'react-icons/bi';
import "../../styles/sidebar.css";
import cih from "../../assets/cih.png";
const SidebarValidateur = () => {
    return (<div className="menu">
        <div className="logo">
            <img alt="logocih" src={cih} className="png"/>
        </div>

        <div className="menu--list">
            <a href="/validateur/dashboard" className="item">
                <BiSolidGridAlt className="icon"/>
                DASHBOARD
            </a>
            <a href="/validateur/reports" className="item">
                <BiSolidReport className="icon"/>
                REPORTS
            </a>
            <a href="/validateur/contact" className="item">
                <BiMessage className="icon"/>
                CONTACT !
            </a>
            <a href="/validateur/aide" className="item">
                <BiHelpCircle className="icon"/>
                AIDE
            </a>
            <a href="/validateur/logout" className="exit">
                <BiExit className="icon"/>
                logout
            </a>
        </div>
    </div>);
};

export default SidebarValidateur;