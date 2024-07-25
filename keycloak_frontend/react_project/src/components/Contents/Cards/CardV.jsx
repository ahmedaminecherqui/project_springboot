import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardV = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchValidateurCount = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/validateurs/count');
                setCount(response.data);
            } catch (error) {
                console.error('Failed to fetch validateur count', error);
            }
        };

        fetchValidateurCount();
    }, []);

    return (
        <div className="card">
            <h3>Validateurs</h3>
            <label>{count}</label>
        </div>
    );
};

export default CardV;
