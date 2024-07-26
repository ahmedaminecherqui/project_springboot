import React from 'react';
import "../ContentHeaders/ContentHeaderDashboard.jsx"
import ContentHeaderDashboard from "../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../styles/content.css"
import ContentHeaderListeV from "../ContentHeaders/ContentHeaderListeV.jsx";
import ContentHeaderReport from "../ContentHeaders/ContentHeaderReport.jsx";
import ReportPage from "../ReportContent/ReportPage.jsx";

const FullContentReport = () => {
    return(
        <div>
            <div>
                <ContentHeaderReport/>
            </div>
            <div>
                <ReportPage/>
            </div>

        </div>
    );
};
export default FullContentReport;