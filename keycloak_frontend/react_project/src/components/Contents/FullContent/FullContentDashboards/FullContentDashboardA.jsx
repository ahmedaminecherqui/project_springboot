import React, { useState, useEffect } from 'react';
import ContentHeaderDashboard from "../../ContentHeaders/ContentHeaderDashboard.jsx";
import "../../../../styles/content.css";
import CardC from "../../Cards/CardC.jsx";
import CardV from "../../Cards/CardV.jsx";
import "../../../../styles/card.css";
import PieChartA from './PieCharts/PieChartA.jsx'; // Adjust path as needed

const FullContentDashboardA = () => {
    const [numberOfConsultants, setNumberOfConsultants] = useState(0);
    const [numberOfValidators, setNumberOfValidators] = useState(0);

    useEffect(() => {
        fetchConsultantsCount();
        fetchValidatorsCount();
    }, []);

    const fetchConsultantsCount = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/consultants/count');
            if (!response.ok) throw new Error('Network response was not ok.');
            const count = await response.json();
            setNumberOfConsultants(count);
        } catch (error) {
            console.error('Error fetching consultants count:', error);
        }
    };

    const fetchValidatorsCount = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/validateurs/count');
            if (!response.ok) {
                const errorDetails = await response.text(); // Get the error message
                throw new Error(`Network response was not ok. ${errorDetails}`);
            }
            const count = await response.json();
            setNumberOfValidators(count);
        } catch (error) {
            console.error('Error fetching validators count:', error);
        }
    };


    return (
        <div>
            <div>
                <ContentHeaderDashboard />
            </div>
            <div className="card--layer">
                <CardC />
                <CardV />
            </div>
            <div className="piechart--container">
                <PieChartA
                    numberOfConsultants={numberOfConsultants}
                    numberOfValidators={numberOfValidators}
                />
            </div>
        </div>
    );
};

export default FullContentDashboardA;

