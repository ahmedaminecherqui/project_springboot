import React from 'react';

import "../Contents/Content.jsx"
import "../Sidebars/SidebarConsultant.jsx"
import Content from "../Contents/Content.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import SidebarConsultant from "../Sidebars/SidebarConsultant.jsx";
const MainPageConsultant = () => {
    return (
        <div className="dashboard">
            <SidebarConsultant/>
            <div className="dashboard--content">
                <Content/>
            </div>

        </div>
    );
};

export default MainPageConsultant;