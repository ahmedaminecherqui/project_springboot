import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPlusCircle } from "react-icons/bi";

const MainPageListeC = () => {
    const [consultants, setConsultants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredConsultants = consultants.filter((consultant) =>
        consultant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultant.id.toString().includes(searchTerm)
    );

    return (
        <div className="main-page-liste-v">
            <div className="searchbox">
                <input
                    type="text"
                    placeholder="Search by name or ID"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>

            <table className="static-table">
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
                {filteredConsultants.map((consultant) => (
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

                <a href="/admin/liste_consultant/ajouter_consultant" className="addbtn">
                    <BiPlusCircle className="icon"/>
                    Ajouter
                </a>


        </div>
    );
};

export default MainPageListeC;



