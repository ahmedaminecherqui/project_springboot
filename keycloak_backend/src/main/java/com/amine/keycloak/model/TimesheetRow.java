package com.amine.keycloak.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "timesheet_row")
public class TimesheetRow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "timesheet_id")
    private Timesheet timesheet;

    @Column(name = "matricule")
    private Long matricule;

    @Column(name = "cree_par")
    private String cree_par;

    @Column(name = "id_validateur")
    private Long id_validateur;

    @Column(name = "date")
    private Date date;

    @Column(name = "heures_travaillees")
    private int heures_travaillees;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timesheet getTimesheet() {
        return timesheet;
    }

    public void setTimesheet(Timesheet timesheet) {
        this.timesheet = timesheet;
    }

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



