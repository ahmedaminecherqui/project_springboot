import React from 'react';
import "../../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css"
import CardTS from "../../Cards/CardTS.jsx";
import CardTA from "../../Cards/CardTA.jsx";

const FullContentDashboardV = () => {
    return(
        <div>
            <div>
                <ContentHeaderDashboard/>
            </div>
            <div className="card--layer">
                <CardTS/>
                <CardTA/>
            </div>
        </div>
    );
};
export default FullContentDashboardV;