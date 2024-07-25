import React from 'react';
import {BrowserRouter as Router, createBrowserRouter, Outlet, Route, RouterProvider, Routes} from 'react-router-dom';
import "../../styles/content.css";
import FullContentDashboardA from "./FullContent/FullContentDashboards/FullContentDashboardA.jsx";
import FullContentDashboardC from "./FullContent/FullContentDashboards/FullContentDashboardC.jsx";
import FullContentDashboardV from "./FullContent/FullContentDashboards/FullContentDashboardV.jsx";
import FullContentListeV from "./FullContent/FullContentListeV.jsx";
import FullContentListeC from "./FullContent/FullContentListeC.jsx";
import FullContentAideA from "./FullContent/FullContentAide/FullContentAideA.jsx";
import FullContentContact from "./FullContent/FullContentContact.jsx";
import FullContentTimesheet from "./FullContent/FullContentTimesheet.jsx";
import FullContentReport from "./FullContent/FullContentReport.jsx";

const Content = () => {
    return(
        <div className="content">
            <Outlet/>
        </div>
    );

};
export default Content;

