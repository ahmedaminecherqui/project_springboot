import React from 'react';
import "../../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css"
import CardC from "../../Cards/CardC.jsx";
import CardV from "../../Cards/CardV.jsx";
import "../../../../styles/card.css"

const FullContentDashboardA = () => {
    return(
        <div>
            <div>
                <ContentHeaderDashboard/>
            </div>
            <div className="card--layer">
                <CardC/>
                <CardV/>
            </div>

        </div>
    );
};
export default FullContentDashboardA;