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
const SidebarConsultant = () => {
    return (<div className="menu">
        <div className="logo">
            <BiTask className="icon" />
            <h1> Task Master</h1>
        </div>

        <div className="menu--list">
            <a href="/consultant/dashboard" className="item">
                <BiSolidGridAlt className="icon"/>
                DASHBOARD
            </a>
            <a href="/consultant/timesheet" className="item">
                <BiSolidReport className="icon"/>
                TIMESHEET
            </a>
            <a href="/consultant/contact" className="item">
                <BiMessage className="icon"/>
                CONTACT !
            </a>
            <a href="/consultant/aide" className="item">
                <BiHelpCircle className="icon"/>
                AIDE
            </a>
            <a href="/consultant/logout" className="exit">
                <BiExit className="icon"/>
                logout
            </a>
        </div>
    </div>);
};

export default SidebarConsultant;