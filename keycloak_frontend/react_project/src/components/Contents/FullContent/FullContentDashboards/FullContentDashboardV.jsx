// FullContentDashboardV.jsx
import React, { useEffect, useState } from 'react';
import "../../ContentHeaders/ContentHeaderDashboard.jsx";
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css";
import CardTS from "../../Cards/CardTS.jsx";
import CardTA from "../../Cards/CardTA.jsx";
import PieChartV from './PieCharts/PieChartV.jsx';
import axios from 'axios';

const FullContentDashboardV = () => {
    const [submittedCount, setSubmittedCount] = useState(0);
    const [acceptedCount, setAcceptedCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const submittedResponse = await axios.get('http://localhost:8081/api/v1/timesheets/validated/count');
                setSubmittedCount(submittedResponse.data);

                const acceptedResponse = await axios.get('http://localhost:8081/api/v1/timesheets/accepted/count');
                setAcceptedCount(acceptedResponse.data.count);
            } catch (error) {
                console.error('There was an error fetching the counts!', error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <div>
            <div>
                <ContentHeaderDashboard />
            </div>
            <div className="card--layer">
                <CardTS />
                <CardTA />
            </div>
            <div className="piechart--container">
                <PieChartV submittedCount={submittedCount} acceptedCount={acceptedCount} />
            </div>
        </div>
    );
};

export default FullContentDashboardV;
