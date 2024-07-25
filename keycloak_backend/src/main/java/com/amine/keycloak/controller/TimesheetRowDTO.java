package com.amine.keycloak.controller;

import java.util.Date;

public class TimesheetRowDTO {
    private Long matricule;
    private String cree_par;
    private Long id_validateur;
    private Date date;
    private int heures_travaillees;

    // Default constructor
    public TimesheetRowDTO() {}

    // Constructor with parameters
    public TimesheetRowDTO(Long matricule, String cree_par, Long id_validateur, Date date, int heures_travaillees) {
        this.matricule = matricule;
        this.cree_par = cree_par;
        this.id_validateur = id_validateur;
        this.date = date;
        this.heures_travaillees = heures_travaillees;
    }

    // Getters and Setters
    public Long getMatricule() {
        return matricule;
    }

    public void setMatricule(Long matricule) {
        this.matricule = matricule;
    }

    public String getCree_par() {
        return cree_par;
    }

    public void setCree_par(String cree_par) {
        this.cree_par = cree_par;
    }

    public Long getId_validateur() {
        return id_validateur;
    }

    public void setId_validateur(Long id_validateur) {
        this.id_validateur = id_validateur;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getHeures_travaillees() {
        return heures_travaillees;
    }

    public void setHeures_travaillees(int heures_travaillees) {
        this.heures_travaillees = heures_travaillees;
    }
}




