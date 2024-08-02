package com.amine.keycloak.services;

import com.amine.keycloak.model.Consultant;
import com.amine.keycloak.model.Validateur;
import com.amine.keycloak.repository.ConsultantRepository;
import com.amine.keycloak.repository.ValidatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ValidatorService {
    @Autowired
    private ValidatorRepository validatorRepository;

    @Autowired
    private ConsultantRepository consultantRepository;

    public Validateur addValidator(Validateur validator) {
        if (validator.getConsultants() != null && !validator.getConsultants().isEmpty()) {
            List<Consultant> consultants = validator.getConsultants().stream()
                    .map(consultant -> consultantRepository.findById(Math.toIntExact(consultant.getId()))
                            .orElseThrow(() -> new RuntimeException("Consultant not found with id: " + consultant.getId())))
                    .collect(Collectors.toList());
            consultants.forEach(consultant -> consultant.setValidateur(validator)); // Set the validator reference
            validator.setConsultants(consultants);
        }
        return validatorRepository.save(validator);
    }


    public void updateValidator(Long id, Validateur validatorDetails) {
        Validateur existingValidateur = validatorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Validateur not found"));

        // Update fields as necessary
        existingValidateur.setNom(validatorDetails.getNom());
        existingValidateur.setTel(validatorDetails.getTel());

        // Detach existing consultants
        existingValidateur.getConsultants().forEach(consultant -> {
            consultant.setValidateur(null);
            consultantRepository.save(consultant);
        });
        existingValidateur.getConsultants().clear();

        if (validatorDetails.getConsultants() != null && !validatorDetails.getConsultants().isEmpty()) {
            List<Consultant> consultants = validatorDetails.getConsultants().stream()
                    .map(consultant -> {
                        Consultant existingConsultant = consultantRepository.findById(Math.toIntExact(consultant.getId()))
                                .orElseThrow(() -> new RuntimeException("Consultant not found with id: " + consultant.getId()));
                        existingConsultant.setValidateur(existingValidateur);
                        return existingConsultant;
                    })
                    .collect(Collectors.toList());
            existingValidateur.getConsultants().addAll(consultants);
        }

        validatorRepository.save(existingValidateur);
    }


    public Validateur getValidatorById(Long id) {
        return validatorRepository.findById(id).orElse(null);
    }

    public List<Validateur> getAllValidators() {
        return validatorRepository.findAll();
    }

    public long countValidateurs() {
        return validatorRepository.count();
    }
}







