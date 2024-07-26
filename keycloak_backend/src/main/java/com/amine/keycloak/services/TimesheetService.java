package com.amine.keycloak.services;

import com.amine.keycloak.model.Timesheet;
import com.amine.keycloak.repository.TimesheetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimesheetService {
    @Autowired
    private TimesheetRepository timesheetRepository;

    public Timesheet saveTimesheet(Timesheet timesheet) {
        return timesheetRepository.save(timesheet);
    }

    public List<Timesheet> getAllTimesheets() {
        return timesheetRepository.findAll();
    }

    public Optional<Timesheet> getTimesheetById(Long id) {
        return timesheetRepository.findById(id);
    }

    public void deleteTimesheet(Long id) {
        timesheetRepository.deleteById(id);
    }

    public long countAllTimesheets() {
        return timesheetRepository.count();
    }

    public long countValidatedTimesheets() {
        return timesheetRepository.countByValidated(true);
    }

    public Timesheet acceptTimesheet(Long id) {
        Optional<Timesheet> optionalTimesheet = timesheetRepository.findById(id);
        if (optionalTimesheet.isPresent()) {
            Timesheet timesheet = optionalTimesheet.get();
            timesheet.setAccepted(true);
            return timesheetRepository.save(timesheet);
        }
        return null;
    }

    public Timesheet refuseTimesheet(Long id) {
        Optional<Timesheet> optionalTimesheet = timesheetRepository.findById(id);
        if (optionalTimesheet.isPresent()) {
            Timesheet timesheet = optionalTimesheet.get();
            timesheet.setAccepted(false);
            return timesheetRepository.save(timesheet);
        }
        return null;
    }

    public long countAcceptedTimesheets() {
        return timesheetRepository.countAcceptedTimesheets();
    }
}


