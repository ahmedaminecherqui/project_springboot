-- Main timesheet table
CREATE TABLE timesheet (
                           id BIGINT AUTO_INCREMENT PRIMARY KEY,
                           validated BOOLEAN DEFAULT FALSE
);

-- Timesheet rows table
CREATE TABLE timesheet_row (
                               id BIGINT AUTO_INCREMENT PRIMARY KEY,
                               timesheet_id BIGINT NOT NULL,
                               matricule BIGINT NOT NULL,
                               cree_par VARCHAR(255) NOT NULL,
                               id_validateur BIGINT NOT NULL,
                               date DATE NOT NULL,
                               heures_travaillees INT NOT NULL,
                               FOREIGN KEY (timesheet_id) REFERENCES timesheet(id),
                               FOREIGN KEY (matricule) REFERENCES consultant(id),
                               FOREIGN KEY (id_validateur) REFERENCES validateur(id)
);

