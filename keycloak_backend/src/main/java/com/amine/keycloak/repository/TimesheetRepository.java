package com.amine.keycloak.repository;

import com.amine.keycloak.model.Timesheet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimesheetRepository extends JpaRepository<Timesheet, Long> {

}
