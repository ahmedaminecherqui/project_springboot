import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPlusCircle } from "react-icons/bi";

const MainPageListeC = () => {
    const [consultants, setConsultants] = useState([]);

    useEffect(() => {
        const fetchConsultants = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/v1/consultants');
                setConsultants(response.data);
            } catch (error) {
                console.error('Failed to fetch consultants', error);
            }
        };

        fetchConsultants();
    }, []);

    return (
        <div className="addlist">
            <table className="styled-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Tel</th>
                    <th>Durée Mission</th>
                    <th>Id Validateur</th>
                    <th>Nom Validateur</th>
                </tr>
                </thead>
                <tbody>
                {consultants.map((consultant) => (
                    <tr key={consultant.id}>
                        <td>
                            <div className="elemnt">
                                <a href={`/admin/liste_consultant/modifier_consultant/${consultant.id}`}>{consultant.id}</a>
                            </div>
                        </td>
                        <td>{consultant.nom}</td>
                        <td>{consultant.tel}</td>
                        <td>{consultant.duree} mois</td>
                        <td>{consultant.validateurId}</td>
                        <td>{consultant.validateurNom}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <a href="/admin/liste_consultant/ajouter_consultant" className="item">
                <BiPlusCircle className="icon" />
                Ajouter
            </a>
        </div>
    );
};

export default MainPageListeC;


