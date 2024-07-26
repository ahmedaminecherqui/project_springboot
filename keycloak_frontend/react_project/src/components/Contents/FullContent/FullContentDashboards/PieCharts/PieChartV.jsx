// PieChartV.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChartV = ({ submittedCount, acceptedCount }) => {
    const data = {
        labels: ['Timesheets soumis', 'Timesheets acceptés'],
        datasets: [{
            data: [submittedCount, acceptedCount],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
        }]
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Pie data={data} />
        </div>
    );
};

// Define PropTypes for the component
PieChartV.propTypes = {
    submittedCount: PropTypes.number.isRequired,
    acceptedCount: PropTypes.number.isRequired
};

export default PieChartV;
