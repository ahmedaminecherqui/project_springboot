// FullContentDashboardC.jsx
import React, { useEffect, useState } from 'react';
import "../../ContentHeaders/ContentHeaderDashboard.jsx";
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css";
import CardTC from "../../Cards/CardTC.jsx";
import CardTV from "../../Cards/CardTV.jsx";
import PieChartC from './PieCharts/PieChartC.jsx';
import axios from 'axios';

const FullContentDashboardC = () => {
    const [createdCount, setCreatedCount] = useState(0);
    const [validatedCount, setValidatedCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const createdResponse = await axios.get('http://localhost:8081/api/v1/timesheets/count');
                setCreatedCount(createdResponse.data);

                const validatedResponse = await axios.get('http://localhost:8081/api/v1/timesheets/validated/count');
                setValidatedCount(validatedResponse.data);
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
                <CardTC />
                <CardTV />
            </div>
            <div className="piechart--container">
                <PieChartC createdCount={createdCount} validatedCount={validatedCount} />
            </div>
        </div>
    );
};

export default FullContentDashboardC;
