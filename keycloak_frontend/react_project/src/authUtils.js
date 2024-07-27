// src/authUtils.js
import keycloak from './keycloak'; // Import your Keycloak instance

export const logout = () => {
    keycloak.logout({
        redirectUri: window.location.origin,
    });
};
