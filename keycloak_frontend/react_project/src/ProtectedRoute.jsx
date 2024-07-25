import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = Boolean(localStorage.getItem('token')); // or however you determine if a user is logged in

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Component {...rest} />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;


