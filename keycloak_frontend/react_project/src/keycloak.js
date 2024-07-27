// src/keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "test",
    clientId: "test-rest-api",
});

export default keycloak;
