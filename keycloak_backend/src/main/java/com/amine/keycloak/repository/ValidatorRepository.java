package com.amine.keycloak.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.amine.keycloak.model.Validateur;

public interface ValidatorRepository extends JpaRepository<Validateur, Long> {
}

