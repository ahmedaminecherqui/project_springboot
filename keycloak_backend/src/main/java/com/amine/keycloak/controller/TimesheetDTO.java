package com.amine.keycloak.controller;

import java.util.List;

public class TimesheetDTO {
    private Long id;
    private boolean validated;
    private Boolean accepted;
    private List<TimesheetRowDTO> rows;

    // Default constructor
    public TimesheetDTO() {}

    // Constructor with parameters
    public TimesheetDTO(Long id, boolean validated, Boolean accepted, List<TimesheetRowDTO> rows) {
        this.id = id;
        this.validated = validated;
        this.accepted = accepted;
        this.rows = rows;
    }

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

    public List<TimesheetRowDTO> getRows() {
        return rows;
    }

    public void setRows(List<TimesheetRowDTO> rows) {
        this.rows = rows;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }
}





