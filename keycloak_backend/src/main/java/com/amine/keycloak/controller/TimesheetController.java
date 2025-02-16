package com.amine.keycloak.controller;

import com.amine.keycloak.model.Timesheet;
import com.amine.keycloak.model.TimesheetRow;
import com.amine.keycloak.repository.TimesheetRepository;
import com.amine.keycloak.repository.TimesheetRowRepository;
import com.amine.keycloak.services.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/timesheets")
@CrossOrigin(origins = "http://localhost:5173")
public class TimesheetController {
    @Autowired
    private TimesheetRepository timesheetRepository;

    @Autowired
    private TimesheetRowRepository timesheetRowRepository;

    @Autowired
    private TimesheetService timesheetService;

    @PostMapping
    public ResponseEntity<?> createTimesheet(@RequestBody TimesheetDTO timesheetDTO) {
        Timesheet timesheet = new Timesheet();
        timesheet.setValidated(false);
        Timesheet savedTimesheet = timesheetRepository.save(timesheet);

        for (TimesheetRowDTO rowDTO : timesheetDTO.getRows()) {
            TimesheetRow row = new TimesheetRow();
            row.setTimesheet(savedTimesheet);
            row.setMatricule(rowDTO.getMatricule());
            row.setCree_par(rowDTO.getCree_par());
            row.setId_validateur(rowDTO.getId_validateur());
            row.setDate(rowDTO.getDate());
            row.setHeures_travaillees(rowDTO.getHeures_travaillees());
            timesheetRowRepository.save(row);
        }

        return ResponseEntity.ok(savedTimesheet);
    }

    @GetMapping
    public ResponseEntity<List<TimesheetDTO>> getTimesheets() {
        List<Timesheet> timesheets = timesheetRepository.findAll();
        List<TimesheetDTO> dtoList = timesheets.stream().map(timesheet -> {
            TimesheetDTO dto = new TimesheetDTO();
            dto.setId(timesheet.getId());
            dto.setValidated(timesheet.isValidated());
            dto.setAccepted(timesheet.getAccepted());
            List<TimesheetRowDTO> rowsDTO = timesheetRowRepository.findByTimesheetId(timesheet.getId()).stream().map(row -> {
                TimesheetRowDTO rowDTO = new TimesheetRowDTO();
                rowDTO.setMatricule(row.getMatricule());
                rowDTO.setCree_par(row.getCree_par());
                rowDTO.setId_validateur(row.getId_validateur());
                rowDTO.setDate(row.getDate());
                rowDTO.setHeures_travaillees(row.getHeures_travaillees());
                return rowDTO;
            }).collect(Collectors.toList());
            dto.setRows(rowsDTO);
            return dto;
        }).collect(Collectors.toList());
        return ResponseEntity.ok(dtoList);
    }
    @Transactional
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTimesheet(@PathVariable Long id) {
        if (timesheetRepository.existsById(id)) {
            // Delete all rows associated with the timesheet
            timesheetRowRepository.deleteByTimesheetId(id);
            // Delete the timesheet itself
            timesheetRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}/validate")
    public ResponseEntity<Void> validateTimesheet(@PathVariable Long id) {
        Optional<Timesheet> optionalTimesheet = timesheetRepository.findById(id);
        if (optionalTimesheet.isPresent()) {
            Timesheet timesheet = optionalTimesheet.get();
            timesheet.setValidated(true); // Assume validated is a boolean field
            timesheetRepository.save(timesheet);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Transactional
    @PutMapping("/{id}")
    public ResponseEntity<?> updateTimesheet(@PathVariable Long id, @RequestBody TimesheetDTO timesheetDTO) {
        Optional<Timesheet> optionalTimesheet = timesheetRepository.findById(id);
        if (optionalTimesheet.isPresent()) {
            Timesheet timesheet = optionalTimesheet.get();
            // Update fields as needed
            timesheet.setValidated(timesheetDTO.isValidated());
            timesheetRepository.save(timesheet);

            // Delete existing rows and add new ones
            timesheetRowRepository.deleteByTimesheetId(id);
            for (TimesheetRowDTO rowDTO : timesheetDTO.getRows()) {
                TimesheetRow row = new TimesheetRow();
                row.setTimesheet(timesheet);
                row.setMatricule(rowDTO.getMatricule());
                row.setCree_par(rowDTO.getCree_par());
                row.setId_validateur(rowDTO.getId_validateur());
                row.setDate(rowDTO.getDate());
                row.setHeures_travaillees(rowDTO.getHeures_travaillees());
                timesheetRowRepository.save(row);
            }

            return ResponseEntity.ok(timesheet);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/count")
    public ResponseEntity<Long> getTimesheetCount() {
        long count = timesheetService.countAllTimesheets();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/validated/count")
    public ResponseEntity<Long> getValidatedTimesheetCount() {
        long count = timesheetService.countValidatedTimesheets();
        return ResponseEntity.ok(count);
    }

    @PatchMapping("/{id}/accept")
    public ResponseEntity<Timesheet> acceptTimesheet(@PathVariable Long id) {
        Timesheet updatedTimesheet = timesheetService.acceptTimesheet(id);
        return updatedTimesheet != null ? ResponseEntity.ok(updatedTimesheet) : ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}/refuse")
    public ResponseEntity<Timesheet> refuseTimesheet(@PathVariable Long id) {
        Timesheet updatedTimesheet = timesheetService.refuseTimesheet(id);
        return updatedTimesheet != null ? ResponseEntity.ok(updatedTimesheet) : ResponseEntity.notFound().build();
    }

    @GetMapping("/accepted/count")
    public ResponseEntity<Map<String, Long>> getAcceptedTimesheetsCount() {
        long count = timesheetService.countAcceptedTimesheets();
        Map<String, Long> response = Collections.singletonMap("count", count);
        return ResponseEntity.ok(response);
    }
}






