package com.amine.keycloak.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.amine.keycloak.model.Consultant;

public interface ConsultantRepository extends JpaRepository<Consultant, Integer> {
}

