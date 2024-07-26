import { useState, useEffect, useRef } from 'react';
import Keycloak from 'keycloak-js';

const client = new Keycloak({
    url: "http://localhost:8080/",
    realm: "test",
    clientId: "test-rest-api",
});

const useAuth = () => {
    const isRun = useRef(false);
    const [token, setToken] = useState(null);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;

        client.init({
            onLoad: "login-required",
            checkLoginIframe: false,
        }).then(authenticated => {
            setLogin(authenticated);
            if (authenticated) {
                setToken(client.token);
                client.onTokenExpired = () => {
                    client.updateToken(30).then(refreshed => {
                        if (refreshed) {
                            setToken(client.token);
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

    return [isLogin, token, client];
};

export default useAuth;









