import React from 'react';
import "../../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css"
import CardTC from "../../Cards/CardTC.jsx";
import CardTV from "../../Cards/CardTV.jsx";

const FullContentDashboardC = () => {
    return(
        <div>
            <div>
                <ContentHeaderDashboard/>
            </div>
            <div className="card--layer">
                <CardTC/>
                <CardTV/>
            </div>
        </div>
    );
};
export default FullContentDashboardC;