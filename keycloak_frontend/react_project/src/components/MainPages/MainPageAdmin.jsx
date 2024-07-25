import React from 'react';
import "../Contents/Profile.jsx"
import "../Contents/Content.jsx"
import "../Sidebars/SidebarAdmin.jsx"
import SidebarAdmin from "../Sidebars/SidebarAdmin.jsx";
import Content from "../Contents/Content.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const MainPageAdmin = () => {
    return (
        <div className="dashboard">
            <SidebarAdmin/>
            <div className="dashboard--content">
                <Content/>
            </div>

        </div>
    );
};

export default MainPageAdmin;