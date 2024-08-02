package com.amine.keycloak.services;

import com.amine.keycloak.model.Consultant;
import com.amine.keycloak.model.Validateur;
import com.amine.keycloak.repository.ConsultantRepository;
import com.amine.keycloak.repository.ValidatorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultantService {

    @Autowired
    private ConsultantRepository consultantRepository;

    public long countConsultants() {
        return consultantRepository.count();
    }
    @Autowired
    private ValidatorRepository validatorRepository;

    public Consultant addConsultant(Consultant consultant) {
        if (consultant.getValidateur() != null) {
            Validateur validateur = validatorRepository.findById(consultant.getValidateur().getId()).orElse(null);
            if (validateur != null) {
                consultant.setValidateur(validateur);

                validatorRepository.save(validateur); // Save the validateur with the new consultant
            }
        }
        return consultantRepository.save(consultant); // Save the consultant with the validateur set correctly
    }
    @Transactional
    public Consultant updateConsultant(Long id, Consultant consultantDetails) {
        Consultant existingConsultant = consultantRepository.findById(Math.toIntExact(id)).orElseThrow(() -> new RuntimeException("Consultant not found"));

        existingConsultant.setNom(consultantDetails.getNom());
        existingConsultant.setTel(consultantDetails.getTel());
        existingConsultant.setDuree(consultantDetails.getDuree());

        if (consultantDetails.getValidateur() != null) {
            Validateur validateur = validatorRepository.findById(consultantDetails.getValidateur().getId()).orElse(null);
            if (validateur != null) {
                existingConsultant.setValidateur(validateur);
                validateur.getConsultants().add(existingConsultant);
                validatorRepository.save(validateur);
            }
        } else {
            existingConsultant.setValidateur(null);
        }

        return consultantRepository.save(existingConsultant);
    }

    // Other methods...
    public List<Consultant> getAllConsultants() {
        return consultantRepository.findAll();
    }

    public java.util.Optional<Consultant> getConsultantById(Long id) {
        return consultantRepository.findById(Math.toIntExact(id));
    }
}

