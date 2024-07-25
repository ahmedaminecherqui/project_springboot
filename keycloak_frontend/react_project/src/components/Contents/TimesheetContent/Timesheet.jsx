import React, { useState, useEffect } from 'react';
import '../../../styles/content.css'; // Optional: Create a CSS file for styling

const Timesheet = () => {
    const [timesheets, setTimesheets] = useState([]);
    const [currentTimesheet, setCurrentTimesheet] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchTimesheets();
    }, []);

    const fetchTimesheets = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/timesheets');
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            setTimesheets(data);
        } catch (error) {
            console.error('Error fetching timesheets:', error);
        }
    };

    const handleAddTimesheet = () => {
        setCurrentTimesheet({ rows: [], editable: true });
        setIsCreating(true);
        setIsEditing(false);
    };

    const handleEditTimesheet = (timesheet) => {
        setCurrentTimesheet(timesheet);
        setIsCreating(false);
        setIsEditing(true);
    };

    const handleAddRow = () => {
        if (currentTimesheet) {
            setCurrentTimesheet(prev => ({
                ...prev,
                rows: [...prev.rows, { matricule: '', cree_par: '', id_validateur: '', date: '', heures_travaillees: '' }]
            }));
        }
    };

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        setCurrentTimesheet(prev => {
            const updatedRows = [...prev.rows];
            updatedRows[index][name] = value;
            return { ...prev, rows: updatedRows };
        });
    };

    const handleSubmit = async () => {
        try {
            await fetch('http://localhost:8081/api/v1/timesheets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentTimesheet)
            });
            fetchTimesheets();
            setIsCreating(false);
            setCurrentTimesheet(null);
        } catch (error) {
            console.error('Error submitting timesheet:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            await fetch(`http://localhost:8081/api/v1/timesheets/${currentTimesheet.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentTimesheet)
            });
            fetchTimesheets();
            setIsEditing(false);
            setCurrentTimesheet(null);
        } catch (error) {
            console.error('Error updating timesheet:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8081/api/v1/timesheets/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchTimesheets();
            } else {
                console.error('Error deleting timesheet:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting timesheet:', error);
        }
    };

    const handleValidate = async (id) => {
        try {
            const response = await fetch(`http://localhost:8081/api/v1/timesheets/${id}/validate`, {
                method: 'PATCH'
            });
            if (response.ok) {
                fetchTimesheets();
            } else {
                console.error('Error validating timesheet:', response.statusText);
            }
        } catch (error) {
            console.error('Error validating timesheet:', error);
        }
    };

    const renderTimesheets = () => {
        if (timesheets.length === 0) {
            return <p>No timesheets available</p>;
        }
        return timesheets.map(timesheet => (
            <div key={timesheet.id} className="timesheet">
                <h3>Timesheet ID: {timesheet.id}</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Matricule (Id)</th>
                        <th>Crée_par</th>
                        <th>Id_validateur</th>
                        <th>Date</th>
                        <th>Heures_travaillées</th>
                    </tr>
                    </thead>
                    <tbody>
                    {timesheet.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.matricule}</td>
                            <td>{row.cree_par}</td>
                            <td>{row.id_validateur}</td>
                            <td>{row.date}</td>
                            <td>{row.heures_travaillees}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="btn--layer">
                    {!timesheet.validated && (
                        <>
                            <button onClick={() => handleEditTimesheet(timesheet)} className="editbtn">Modifier</button>
                            <button onClick={() => handleDelete(timesheet.id)} className="stopbtn">Supprimer</button>
                            <button onClick={() => handleValidate(timesheet.id)} className="validatebtn">Valider</button>
                        </>
                    )}
                </div>
            </div>
        ));
    };

    return (
        <div>
            <button onClick={handleAddTimesheet} className="createbtn">Create Timesheet</button>
            {(isCreating || isEditing) && currentTimesheet && (
                <div className="timesheet-form">
                    <button onClick={handleAddRow} className="addbtn">Add Row</button>
                    <table>
                        <thead>
                        <tr>
                            <th>Matricule (Id)</th>
                            <th>Crée_par</th>
                            <th>Id_validateur</th>
                            <th>Date</th>
                            <th>Heures_travaillées</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentTimesheet.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <input
                                        type="number"
                                        name="matricule"
                                        value={row.matricule}
                                        onChange={(e) => handleChange(rowIndex, e)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cree_par"
                                        value={row.cree_par}
                                        onChange={(e) => handleChange(rowIndex, e)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="id_validateur"
                                        value={row.id_validateur}
                                        onChange={(e) => handleChange(rowIndex, e)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name="date"
                                        value={row.date}
                                        onChange={(e) => handleChange(rowIndex, e)}
                                    />
                                </td>
                                <td>
                                    <select
                                        name="heures_travaillees"
                                        value={row.heures_travaillees}
                                        onChange={(e) => handleChange(rowIndex, e)}
                                    >
                                        {Array.from({ length: 9 }, (_, i) => (
                                            <option key={i} value={i}>
                                                {i}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button onClick={isCreating ? handleSubmit : handleUpdate} className="submitbtn">
                        {isCreating ? 'Ajouter' : 'Mettre à jour'}
                    </button>
                </div>
            )}
            {renderTimesheets()}
        </div>
    );
};

export default Timesheet;

























