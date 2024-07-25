-- Create validateur table
CREATE TABLE validateur (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            Nom VARCHAR(255) NOT NULL,
                            Tel VARCHAR(20) NOT NULL
);

-- Create consultant table
CREATE TABLE consultant (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            Nom VARCHAR(255) NOT NULL,
                            Tel VARCHAR(20) NOT NULL,
                            Duree INT NOT NULL,
                            idv INT,
                            FOREIGN KEY (idv) REFERENCES validateur(id)
);