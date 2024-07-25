package com.amine.keycloak.controller;

import com.amine.keycloak.model.Consultant;

// DTO class
public class ConsultantDTO {
    private Long id;
    private String nom;
    private String tel;
    private Integer duree;
    private Long validateurId;
    private String validateurNom;

    // Default constructor
    public ConsultantDTO() {}

    // Constructor using Consultant entity
    public ConsultantDTO(Consultant consultant) {
        this.id = Long.valueOf(consultant.getId());
        this.nom = consultant.getNom();
        this.tel = consultant.getTel();
        this.duree = consultant.getDuree();
        this.validateurId = consultant.getValidateur() != null ? consultant.getValidateur().getId() : null;
        this.validateurNom = consultant.getValidateur() != null ? consultant.getValidateur().getNom() : null;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public Integer getDuree() {
        return duree;
    }

    public void setDuree(Integer duree) {
        this.duree = duree;
    }

    public Long getValidateurId() {
        return validateurId;
    }

    public void setValidateurId(Long validateurId) {
        this.validateurId = validateurId;
    }

    public String getValidateurNom() {
        return validateurNom;
    }

    public void setValidateurNom(String validateurNom) {
        this.validateurNom = validateurNom;
    }
}
