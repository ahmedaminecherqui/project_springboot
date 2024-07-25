import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";


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
            redirectUri: 'http://localhost:5173',
        }).then((authenticated) => {
            setLogin(authenticated);
            if (authenticated) {
                setToken(client.token);
            }
        }).catch(error => {
            console.error("Keycloak initialization failed", error);
        });
    }, []);

    return [isLogin, token];
};

export default useAuth;





