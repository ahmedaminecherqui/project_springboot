package com.amine.keycloak.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "validateur")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Validateur implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String tel;

    @OneToMany(mappedBy = "validateur", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Consultant> consultants= new ArrayList<>();

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

    public List<Consultant> getConsultants() {
        return consultants;
    }

    public void setConsultants(List<Consultant> consultants) {
        this.consultants = consultants;
    }

    public void addConsultant(Consultant consultant) {
        consultants.add(consultant);
        consultant.setValidateur(this);
    }

    public void removeConsultant(Consultant consultant) {
        consultants.remove(consultant);
        consultant.setValidateur(null);
    }
}




