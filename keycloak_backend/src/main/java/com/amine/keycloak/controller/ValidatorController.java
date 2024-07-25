package com.amine.keycloak.controller;

import com.amine.keycloak.model.Validateur;
import com.amine.keycloak.services.ValidatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5174")
public class ValidatorController {

    @Autowired
    private ValidatorService validatorService;

    @PreAuthorize("hasRole('client_admin')")
    @PostMapping("/addValidator")
    public ResponseEntity<String> addValidator(@RequestBody Validateur validator) {
        if (validator == null) {
            return ResponseEntity.badRequest().body("Invalid validator data");
        }

        validatorService.addValidator(validator);
        return ResponseEntity.ok("Validator added successfully");
    }


    @PreAuthorize("hasRole('client_admin')")
    @PutMapping("/validators/{id}")
    public ResponseEntity<String> updateValidator(@PathVariable Long id, @RequestBody Validateur validatorDetails) {
        try {
            System.out.println("Received ID for update: " + id); // Debugging line
            validatorService.updateValidator(id, validatorDetails);
            return ResponseEntity.ok("Validator updated successfully");
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage()); // Debugging line
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Validator not found with id: " + id);
        }
    }

    @PreAuthorize("hasRole('client_admin')")
    @GetMapping("/validators")
    public ResponseEntity<List<Validateur>> getValidators() {
        List<Validateur> validators = validatorService.getAllValidators();
        return ResponseEntity.ok(validators);
    }

    @PreAuthorize("hasRole('client_admin')")
    @GetMapping("/validators/{id}")
    public ResponseEntity<Validateur> getValidatorById(@PathVariable Long id) {
        Validateur validator = validatorService.getValidatorById(id);
        if (validator == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(validator);
    }

    @GetMapping("/validateurs/count")
    public long getValidateurCount() {
        return validatorService.countValidateurs();
    }
}








