//card du nbr des consultants

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchConsultantCount = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/consultants/count');
                setCount(response.data);
            } catch (error) {
                console.error('Failed to fetch consultant count', error);
            }
        };

        fetchConsultantCount();
    }, []);

    return (
        <div className="card">
            <h3>Consultants</h3>
            <label>{count}</label>
        </div>
    );
};

export default CardC;
