import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddV = () => {
    const [nom, setNom] = useState('');
    const [tel, setTel] = useState('');
    const [consultants, setConsultants] = useState([]);
    const [selectedConsultants, setSelectedConsultants] = useState([]);

    useEffect(() => {
        // Fetch consultants
        axios.get('http://localhost:8081/api/v1/consultants')
            .then(response => {
                setConsultants(response.data);
            })
            .catch(error => {
                console.error('Error fetching consultants:', error);
            });
    }, []);

    const handleAdd = () => {
        const validator = {
            nom,
            tel,
            consultants: selectedConsultants.map(id => ({ id }))
        };

        axios.post('http://localhost:8081/api/v1/addValidator', validator)
            .then(response => {
                console.log('Validator added successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to add validator:', error);
            });
    };

    return (
        <div className="add-v">
            <h2>Add Validator</h2>
            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
            />
            <select multiple onChange={(e) => setSelectedConsultants([...e.target.selectedOptions].map(o => o.value))}>
                {consultants.map(consultant => (
                    <option key={consultant.id} value={consultant.id}>
                        {consultant.nom}
                    </option>
                ))}
            </select>
            <button onClick={handleAdd}>Ajouter</button>
        </div>
    );
};

export default AddV;



















