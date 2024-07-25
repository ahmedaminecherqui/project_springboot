import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddC = () => {
    const [nom, setNom] = useState('');
    const [tel, setTel] = useState('');
    const [duree, setDuree] = useState('');
    const [validateurs, setValidateurs] = useState([]);
    const [selectedValidateur, setSelectedValidateur] = useState('');

    useEffect(() => {
        const fetchValidateurs = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/validators');
                setValidateurs(response.data);
            } catch (error) {
                console.error('Failed to fetch validateurs', error);
            }
        };

        fetchValidateurs();
    }, []);

    const handleAjouter = async () => {
        try {
            const newConsultant = {
                nom,
                tel,
                duree: parseInt(duree),  // Ensure it is sent as a number
                validateurId: selectedValidateur,
            };
            await axios.post('http://localhost:8081/api/v1/addConsultant', newConsultant);
            // Clear the form fields
            setNom('');
            setTel('');
            setDuree('');
            setSelectedValidateur('');
        } catch (error) {
            console.error('Failed to add consultant', error);
        }
    };

    const handleAnnuler = () => {
        // Clear the form fields
        setNom('');
        setTel('');
        setDuree('');
        setSelectedValidateur('');
    };

    return (
        <div className="add-consultant">
            <h2>Ajouter Consultant</h2>
            <form>
                <div>
                    <label>Nom:</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </div>
                <div>
                    <label>Tel:</label>
                    <input
                        type="text"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>
                <div>
                    <label>Durée Mission (en mois):</label>
                    <input
                        type="number"
                        value={duree}
                        onChange={(e) => setDuree(e.target.value)}
                    />
                </div>
                <div>
                    <label>Assigner Validateur:</label>
                    <select
                        value={selectedValidateur}
                        onChange={(e) => setSelectedValidateur(e.target.value)}
                    >
                        <option value="">Select Validateur</option>
                        {validateurs.map((validateur) => (
                            <option key={validateur.id} value={validateur.id}>
                                {validateur.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button type="button" onClick={handleAjouter}>Ajouter</button>
                    <button type="button" onClick={handleAnnuler}>Annuler</button>
                </div>
            </form>
        </div>
    );
};

export default AddC;
