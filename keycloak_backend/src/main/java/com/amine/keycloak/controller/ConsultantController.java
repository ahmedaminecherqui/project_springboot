package com.amine.keycloak.controller;

import com.amine.keycloak.model.Consultant;
import com.amine.keycloak.model.Validateur;
import com.amine.keycloak.repository.ConsultantRepository;
import com.amine.keycloak.repository.ValidatorRepository;
import com.amine.keycloak.services.ConsultantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:5174")
public class ConsultantController {

    @Autowired
    private ConsultantRepository consultantRepository;
    @Autowired
    private ValidatorRepository validatorRepository;
    @Autowired
    private ConsultantService consultantService;

    @GetMapping("/consultants/count")
    public long getConsultantCount() {
        return consultantService.countConsultants();
    }

    @PreAuthorize("hasRole('client_admin')")
    @PostMapping("/addConsultant")
    public ResponseEntity<String> addConsultant(@RequestBody ConsultantDTO consultantDTO) {
        Consultant consultant = new Consultant();
        consultant.setNom(consultantDTO.getNom());
        consultant.setTel(consultantDTO.getTel());
        consultant.setDuree(consultantDTO.getDuree());

        if (consultantDTO.getValidateurId() != null) {
            Validateur validateur = new Validateur();
            validateur.setId(consultantDTO.getValidateurId());
            consultant.setValidateur(validateur);
        }

        consultantService.addConsultant(consultant);
        return ResponseEntity.ok("Consultant added successfully");
    }
    @PreAuthorize("hasRole('client_admin')")
    @GetMapping("/consultants")
    public List<ConsultantDTO> getAllConsultants() {
        return consultantRepository.findAll().stream()
                .map(ConsultantDTO::new)
                .collect(Collectors.toList());
    }

    @PreAuthorize("hasRole('client_admin')")
    @GetMapping("/consultants/{id}")
    public ResponseEntity<Consultant> getConsultantById(@PathVariable Long id) {
        return consultantRepository.findById(Math.toIntExact(id))
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasRole('client_admin')")
    @PutMapping("/consultants/{id}")
    public ResponseEntity<String> updateConsultant(@PathVariable Long id, @RequestBody ConsultantDTO consultantDTO) {
        Consultant existingConsultant = consultantService.getConsultantById(id)
                .orElseThrow(() -> new RuntimeException("Consultant not found"));

        existingConsultant.setNom(consultantDTO.getNom());
        existingConsultant.setTel(consultantDTO.getTel());
        existingConsultant.setDuree(consultantDTO.getDuree());

        if (consultantDTO.getValidateurId() != null) {
            Validateur validateur = validatorRepository.findById(consultantDTO.getValidateurId())
                    .orElseThrow(() -> new RuntimeException("Validateur not found"));
            existingConsultant.setValidateur(validateur);
        }

        consultantService.updateConsultant(id, existingConsultant);
        return ResponseEntity.ok("Consultant updated successfully");
    }
}




