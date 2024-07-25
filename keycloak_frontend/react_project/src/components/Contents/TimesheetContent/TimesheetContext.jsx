import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const TimesheetContext = createContext();

export const TimesheetProvider = ({ children }) => {
    const [submittedTables, setSubmittedTables] = useState([]);

    return (
        <TimesheetContext.Provider value={{ submittedTables, setSubmittedTables }}>
            {children}
        </TimesheetContext.Provider>
    );
};
TimesheetContext.propTypes = {
    children: PropTypes.node.isRequired,
};