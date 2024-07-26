// CardTS.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardTS = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/timesheets/validated/count')
            .then(response => {
                setCount(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the validated timesheet count!', error);
            });
    }, []);

    return (
        <div className="card">
            <h3>Timesheets soumis</h3>
            <p>{count}</p>
        </div>
    );
};

export default CardTS;
