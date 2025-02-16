import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ModifyC = () => {
    const { id } = useParams();
    const [nom, setNom] = useState('');
    const [tel, setTel] = useState('');
    const [duree, setDuree] = useState('');
    const [validateurs, setValidateurs] = useState([]);
    const [selectedValidateur, setSelectedValidateur] = useState('');

    useEffect(() => {
        const fetchConsultant = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/v1/consultants/${id}`);
                const { nom, tel, duree, validateurId } = response.data;
                setNom(nom);
                setTel(tel);
                setDuree(duree);
                setSelectedValidateur(validateurId);
            } catch (error) {
                console.error('Failed to fetch consultant', error);
            }
        };

        const fetchValidateurs = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/validators');
                setValidateurs(response.data);
            } catch (error) {
                console.error('Failed to fetch validateurs', error);
            }
        };

        fetchConsultant();
        fetchValidateurs();
    }, [id]);

    const handleModifier = async () => {
        try {
            const updatedConsultant = {
                nom,
                tel,
                duree,
                validateurId: selectedValidateur,
            };
            await axios.put(`http://localhost:8081/api/v1/consultants/${id}`, updatedConsultant);
        } catch (error) {
            console.error('Failed to update consultant', error);
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
        <div className="modifyform">
            <h2>Modifier Consultant</h2>

                <div>
                    <label>Nom:<input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    /> </label>

                </div>
            <div>
                <label>Tel: <input
                    type="text"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                /></label>

            </div>
            <div>
                <label>Durée: <input
                    type="number"
                    value={duree}
                    onChange={(e) => setDuree(e.target.value)}
                /></label>

            </div>
            <div>
                <label>Assigner Validateur: <select
                    value={selectedValidateur}
                    onChange={(e) => setSelectedValidateur(e.target.value)}
                >
                    <option value="">Select Validateur</option>
                    {validateurs.map((validateur) => (
                        <option key={validateur.id} value={validateur.id}>
                            {validateur.nom}
                        </option>
                    ))}
                </select></label>

            </div>
            <div className="btn--layer">
                <button type="button" onClick={handleModifier} className="modifybtn">Modifier</button>
                <button type="button" onClick={handleAnnuler} className="stopbtn">Annuler</button>
            </div>

        </div>
    );
};

export default ModifyC;




















