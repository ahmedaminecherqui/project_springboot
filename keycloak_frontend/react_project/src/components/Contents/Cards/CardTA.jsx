import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardTA = () => {
    const [acceptedCount, setAcceptedCount] = useState(0);

    useEffect(() => {
        fetchAcceptedTimesheetsCount();
    }, []);

    const fetchAcceptedTimesheetsCount = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/timesheets/accepted/count');
            setAcceptedCount(response.data.count);
        } catch (error) {
            console.error('Error fetching accepted timesheets count:', error);
        }
    };

    return (
        <div className="card">
            <h3>Timesheets Acceptées</h3>
            <label>{acceptedCount}</label>
        </div>
    );
};

export default CardTA;
