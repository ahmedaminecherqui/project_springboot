import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportPage = () => {
    const [timesheets, setTimesheets] = useState([]);

    useEffect(() => {
        fetchValidatedTimesheets();
    }, []);

    const fetchValidatedTimesheets = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/timesheets');
            setTimesheets(response.data.filter(ts => ts.validated));
        } catch (error) {
            console.error('Error fetching timesheets:', error);
        }
    };

    const handleAccept = async (id) => {
        try {
            await axios.patch(`http://localhost:8081/api/v1/timesheets/${id}/accept`);
            setTimesheets(prevTimesheets =>
                prevTimesheets.map(ts =>
                    ts.id === id ? { ...ts, accepted: 1, message: 'Timesheet accepted successfully' } : ts
                )
            );
        } catch (error) {
            console.error('Error accepting timesheet:', error);
        }
    };

    const handleRefuse = async (id) => {
        try {
            await axios.patch(`http://localhost:8081/api/v1/timesheets/${id}/refuse`);
            setTimesheets(prevTimesheets =>
                prevTimesheets.map(ts =>
                    ts.id === id ? { ...ts, accepted: 0, message: 'Timesheet refused successfully' } : ts
                )
            );
        } catch (error) {
            console.error('Error refusing timesheet:', error);
        }
    };

    const getBackgroundColor = (accepted) => {
        if (accepted === 1) return 'lightblue';
        if (accepted === 0) return 'darkorange';
        return 'transparent';
    };

    return (
        <div>

            {timesheets.map((timesheet) => (
                <div
                    key={timesheet.id}
                    style={{
                        border: '1px solid black',
                        padding: '10px',
                        margin: '10px',
                        backgroundColor: getBackgroundColor(timesheet.accepted)
                    }}
                >
                    <h2>Timesheet ID: {timesheet.id}</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Matricule</th>
                            <th>Created By</th>
                            <th>Validator ID</th>
                            <th>Date</th>
                            <th>Hours Worked</th>
                        </tr>
                        </thead>
                        <tbody>
                        {timesheet.rows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.matricule}</td>
                                <td>{row.cree_par}</td>
                                <td>{row.id_validateur}</td>
                                <td>{row.date}</td>
                                <td>{row.heures_travaillees}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {timesheet.accepted === 1 ? (
                        <p style={{ color: 'white' }}>Accepted</p>
                    ) : timesheet.accepted === 0 ? (
                        <p style={{ color: 'white' }}>Refused</p>
                    ) : (
                        <div>
                            <button onClick={() => handleAccept(timesheet.id)}>Accepter</button>
                            <button onClick={() => handleRefuse(timesheet.id)}>Refuser</button>
                        </div>
                    )}
                    {timesheet.message && <p>{timesheet.message}</p>}
                </div>
            ))}
        </div>
    );
};

export default ReportPage;



