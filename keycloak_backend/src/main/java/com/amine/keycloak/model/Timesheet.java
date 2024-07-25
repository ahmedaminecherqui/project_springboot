package com.amine.keycloak.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "timesheet")
public class Timesheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "validated")
    private boolean validated;

    @OneToMany(mappedBy = "timesheet", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TimesheetRow> rows;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isValidated() {
        return validated;
    }

    public void setValidated(boolean validated) {
        this.validated = validated;
    }

    public List<TimesheetRow> getRows() {
        return rows;
    }

    public void setRows(List<TimesheetRow> rows) {
        this.rows = rows;
    }
}




