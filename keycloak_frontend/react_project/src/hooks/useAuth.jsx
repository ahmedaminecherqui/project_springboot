// src/hooks/useAuth.js
import { useState, useEffect, useRef } from 'react';
import keycloak from '../keycloak';  // Import the shared Keycloak instance

const useAuth = () => {
    const isRun = useRef(false);
    const [token, setToken] = useState(null);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;

        keycloak.init({
            onLoad: "login-required",
            checkLoginIframe: false,
        }).then(authenticated => {
            setLogin(authenticated);
            if (authenticated) {
                setToken(keycloak.token);
                keycloak.onTokenExpired = () => {
                    keycloak.updateToken(30).then(refreshed => {
                        if (refreshed) {
                            setToken(keycloak.token);
                        } else {
                            setLogin(false);
                        }
                    }).catch(() => {
                        setLogin(false);
                    });
                };
            }
        }).catch(error => {
            console.error("Keycloak initialization failed", error);
            setLogin(false);
        });
    }, []);

    return [isLogin, token, keycloak];
};

export default useAuth;










