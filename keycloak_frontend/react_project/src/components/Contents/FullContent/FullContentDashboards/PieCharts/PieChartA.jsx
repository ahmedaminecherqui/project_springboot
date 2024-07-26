import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChartA = ({ numberOfConsultants = 0, numberOfValidators = 0 }) => {
    const data = {
        labels: ['Consultants', 'Validators'],
        datasets: [{
            data: [numberOfConsultants, numberOfValidators],
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
PieChartA.propTypes = {
    numberOfConsultants: PropTypes.number,
    numberOfValidators: PropTypes.number
};

export default PieChartA;
