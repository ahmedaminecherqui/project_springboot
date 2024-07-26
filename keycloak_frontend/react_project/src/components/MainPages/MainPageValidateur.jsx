import React from 'react';

import "../Contents/Content.jsx"
import "../Sidebars/SidebarValidateur.jsx"
import Content from "../Contents/Content.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import SidebarValidateur from "../Sidebars/SidebarValidateur.jsx";

const MainPageValidateur = () => {
    return (
        <div className="dashboard">
            <SidebarValidateur/>
            <div className="dashboard--content">
                <Content/>
            </div>

        </div>
    );
};

export default MainPageValidateur;