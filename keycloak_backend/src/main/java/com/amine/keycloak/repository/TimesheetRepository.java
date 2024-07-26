package com.amine.keycloak.repository;

import com.amine.keycloak.model.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {
    long countByValidated(boolean validated);
    @Query("SELECT COUNT(t) FROM Timesheet t WHERE t.accepted = true")
    long countAcceptedTimesheets();
}
