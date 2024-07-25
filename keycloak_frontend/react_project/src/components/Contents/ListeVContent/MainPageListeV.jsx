import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../../styles/content.css';
import { BiPlusCircle } from "react-icons/bi";

const MainPageListeV = () => {
    const [validators, setValidators] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchValidators = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/validators');
                console.log('Validators data:', response.data); // Debugging line
                setValidators(response.data);
            } catch (error) {
                console.error('Failed to fetch validators', error);
                setError('Failed to fetch validators. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchValidators();
    }, []);

    if (loading) {
        return <p>Loading validators...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="main-page-liste-v">
            {validators.length > 0 ? (
                <table className="static-table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Tel</th>
                        <th>Consultants</th>
                    </tr>
                    </thead>
                    <tbody>
                    {validators.map((validator) => (
                        <tr key={validator.id}>
                            <td>
                                <a href={`/admin/liste_validateur/modifier_validateur/${validator.id}`}>
                                    {validator.id}
                                </a>
                            </td>
                            <td>{validator.nom}</td>
                            <td>{validator.tel}</td>
                            <td>
                                {validator.consultants && validator.consultants.length > 0 ? (
                                    validator.consultants.map((consultant, index) => (
                                        <span key={consultant.id}>
                                            {consultant.nom}
                                            {index < validator.consultants.length - 1 ? ', ' : ''}
                                        </span>
                                    ))
                                ) : (
                                    <span>No consultants assigned</span>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No validators available.</p>
            )}
            <a href="/admin/liste_validateur/ajouter_validateur" className="addbtn">
                <BiPlusCircle className="icon"/>
                Ajouter
            </a>
        </div>
    );
};

MainPageListeV.propTypes = {
    validators: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nom: PropTypes.string.isRequired,
            tel: PropTypes.string.isRequired,
            consultants: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    nom: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ),
};

export default MainPageListeV;






