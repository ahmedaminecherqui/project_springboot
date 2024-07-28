import React, { useState, useEffect } from 'react';
import '../../../styles/content.css'; // Ensure this path is correct or create the file if it doesn't exist

const Timesheet = () => {
    const [timesheets, setTimesheets] = useState([]);
    const [filteredTimesheets, setFilteredTimesheets] = useState([]);
    const [currentTimesheet, setCurrentTimesheet] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [filterMonth, setFilterMonth] = useState('');

    useEffect(() => {
        fetchTimesheets();
    }, []);

    const fetchTimesheets = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/v1/timesheets');
            if (!response.ok) throw new Error('Network response was not ok.');
            const data = await response.json();
            console.log('Fetched timesheets:', data); // Debug: Log fetched data
            setTimesheets(data);
            setFilteredTimesheets(data);
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

    const handleFilterChange = (event) => {
        const month = event.target.value;
        setFilterMonth(month);
        filterTimesheetsByMonth(month);
    };

    const filterTimesheetsByMonth = (month) => {
        if (month === '') {
            setFilteredTimesheets(timesheets);
        } else {
            const filtered = timesheets.filter(timesheet => {
                return timesheet.rows.some(row => {
                    const date = new Date(row.date);
                    const timesheetMonth = date.getMonth() + 1; // JavaScript months are 0-based
                    return timesheetMonth === parseInt(month);
                });
            });
            setFilteredTimesheets(filtered);
        }
    };

    const getStatusStyle = (accepted) => {
        console.log('Accepted status:', accepted); // Debug: Log accepted status
        if (accepted === 1) {
            return { backgroundColor: 'lightblue', color: 'white' };
        }
        if (accepted === 0) {
            return { backgroundColor: 'darkorange', color: 'white' };
        }
        return {};
    };

    const renderTimesheets = () => {
        if (filteredTimesheets.length === 0) {
            return <p>No timesheets available</p>;
        }
        return filteredTimesheets.map(timesheet => (
            <div key={timesheet.id} className="timesheet" style={getStatusStyle(timesheet.accepted)}>
                <h3>Timesheet ID: {timesheet.id}</h3>
                <table className="static-table">
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
                            <td>{formatDate(row.date)}</td>
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
                {timesheet.accepted !== null && (
                    <p>{timesheet.accepted ? 'Accepted' : 'Refused'}</p>
                )}
                <div>
                    _________________________________________________________________________________________________________________________
                </div>
            </div>
        ));
    };

    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options).replace(/ /g, '_');
    };

    return (
        <div>
            <div className="filter-container">
                <label htmlFor="filter-month">Filter by Month:</label>
                <select id="filter-month" value={filterMonth} onChange={handleFilterChange}>
                    <option value="">All</option>
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                </select>
            </div>
            {renderTimesheets()}
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
                        {isCreating ? 'Ajouter' : 'Confirm Update'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Timesheet;

































