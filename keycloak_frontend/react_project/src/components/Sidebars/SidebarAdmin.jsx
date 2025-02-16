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
import cih from '../../assets/cih.png';





const SidebarAdmin = () => {
    return (
    <div className="menu">
        <div className="logo">
            <img alt="logocih" src={cih} className="png"/>
        </div>

        <div className="menu--list">
            <a href="/admin/dashboard" className="item">
                <BiSolidGridAlt className="icon"/>
                DASHBOARD
            </a>
            <a href="/admin/liste_validateur" className="item">
                <BiSolidReport className="icon"/>
                LISTE VALIDATEURS
            </a>
            <a href="/admin/liste_consultant" className="item">
                <BiSolidReport className="icon"/>
                LISTE CONSULTANTS
            </a>
            <a href="/admin/contact" className="item">
                <BiMessage className="icon"/>
                CONTACT !
            </a>
            <a href="/admin/aide" className="item">
                <BiHelpCircle className="icon"/>
                AIDE
            </a>
            <a href="/admin/logout" className="exit">
                <BiExit className="icon"/>
                logout
            </a>
        </div>
    </div>
    );
};

export default SidebarAdmin;