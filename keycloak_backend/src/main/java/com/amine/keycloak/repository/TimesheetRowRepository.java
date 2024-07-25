package com.amine.keycloak.repository;

import com.amine.keycloak.model.TimesheetRow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TimesheetRowRepository extends JpaRepository<TimesheetRow, Long> {
    List<TimesheetRow> findByTimesheetId(Long timesheetId);

    @Modifying
    @Query("DELETE FROM TimesheetRow tr WHERE tr.timesheet.id = :timesheetId")
    void deleteByTimesheetId(@Param("timesheetId") Long timesheetId);
}


