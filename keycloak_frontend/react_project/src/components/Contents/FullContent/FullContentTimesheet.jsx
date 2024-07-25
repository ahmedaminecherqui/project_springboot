import React from 'react';
import "../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../styles/content.css"
import ContentHeaderListeV from "../ContentHeaders/ContentHeaderListeV.jsx";
import ContentHeaderTimesheet from "../ContentHeaders/ContentHeaderTimesheet.jsx";

import Timesheet from "../TimesheetContent/Timesheet.jsx";

const FullContentTimesheet = () => {
    return(
        <div>
            <div>
                <ContentHeaderTimesheet/>
            </div>
        <Timesheet/>

        </div>
    );
};
export default FullContentTimesheet;