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
        <div className="add-v">
            <h2>Ajouter Consultant</h2>



                    <input
                        type="text"
                        value={nom}
                        placeholder="Entrer nom consultant"
                        onChange={(e) => setNom(e.target.value)}
                    />



                    <input
                        type="text"
                        value={tel}
                        placeholder="Entrer tel du consultant"
                        onChange={(e) => setTel(e.target.value)}
                    />



                    <input
                        type="number"
                        value={duree}
                        placeholder="Entrer duree de mission du consultant"
                        onChange={(e) => setDuree(e.target.value)}
                    />


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

                <div className="btn--layer">
                    <button type="button" onClick={handleAjouter} className="addbtn">Ajouter</button>
                    <button type="button" onClick={handleAnnuler} className="stopbtn">Annuler</button>
                </div>

        </div>
    );
};

export default AddC;
