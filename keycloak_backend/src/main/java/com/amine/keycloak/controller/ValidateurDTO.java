package com.amine.keycloak.controller;

import com.amine.keycloak.model.Validateur;
import com.amine.keycloak.model.Consultant;
import java.util.List;
import java.util.stream.Collectors;

public class ValidateurDTO {
    private Long id;
    private String nom;
    private String tel;
    private List<String> consultants;

    public ValidateurDTO(Validateur validateur) {
        this.id = validateur.getId();
        this.nom = validateur.getNom();
        this.tel = validateur.getTel();
        this.consultants = validateur.getConsultants().stream()
                .map(Consultant::getNom)
                .collect(Collectors.toList());
    }

    // Getters and setters...

}

