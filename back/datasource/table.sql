-- Drop table if exists
DROP TABLE IF EXISTS associer CASCADE;
DROP TABLE IF EXISTS tag_stand CASCADE;
DROP TABLE IF EXISTS ressource_alouer CASCADE;
DROP TABLE IF EXISTS associer_a CASCADE;
DROP TABLE IF EXISTS non_attribuer CASCADE;
DROP TABLE IF EXISTS stand CASCADE;
DROP TABLE IF EXISTS personne CASCADE;
DROP TABLE IF EXISTS jour CASCADE;
DROP TABLE IF EXISTS qrcode CASCADE;
DROP TABLE IF EXISTS acheteur CASCADE;
DROP TABLE IF EXISTS tag CASCADE;
DROP TABLE IF EXISTS ressource CASCADE;
DROP TABLE IF EXISTS emplacement_carte CASCADE;
DROP TABLE IF EXISTS service CASCADE;
DROP TABLE IF EXISTS role CASCADE;

CREATE TABLE role (
                      id_role SERIAL PRIMARY KEY,
                      libelle VARCHAR(50)
);

CREATE TABLE service (
                         id_service SERIAL PRIMARY KEY,
                         libelle VARCHAR(50)
);

CREATE TABLE emplacement_carte (
                                   id_emplacement_carte SERIAL PRIMARY KEY
);

CREATE TABLE ressource (
                           id_ressource SERIAL PRIMARY KEY,
                           nb_ressource INT,
                           libelle_ressource VARCHAR(50)
);

CREATE TABLE tag (
                     id_tag SERIAL PRIMARY KEY,
                     libele_tag VARCHAR(50)
);

CREATE TABLE jour (
                      id_jour SERIAL PRIMARY KEY,
                      horaire_fin TIME,
                      num_jour INT,
                      horaire_debut TIME
);

CREATE TABLE personne (
                          id_personne SERIAL PRIMARY KEY,
                          nom VARCHAR(50),
                          prenom VARCHAR(50),
                          email VARCHAR(50),
                          num_tel INT,
                          mdp_personne VARCHAR(50),
                          id_role INT NOT NULL,
                          FOREIGN KEY (id_role) REFERENCES role (id_role)
);

CREATE TABLE stand (
                       id_stand SERIAL PRIMARY KEY,
                       nom_stand VARCHAR(50),
                       id_emplacement_carte INT NOT NULL,
                       id_service INT NOT NULL,
                       FOREIGN KEY (id_emplacement_carte) REFERENCES emplacement_carte (id_emplacement_carte),
                       FOREIGN KEY (id_service) REFERENCES service (id_service)
);

CREATE TABLE non_attribuer (
                               id_non_attribuer SERIAL PRIMARY KEY,
                               prix DECIMAL(15,2),
                               description VARCHAR(50),
                               nb INT,
                               prioritaire BOOLEAN,
                               id_service INT NOT NULL,
                               id_jour INT NOT NULL,
                               id_personne INT NOT NULL,
                               FOREIGN KEY (id_service) REFERENCES service (id_service),
                               FOREIGN KEY (id_jour) REFERENCES jour (id_jour),
                               FOREIGN KEY (id_personne) REFERENCES personne (id_personne)
);

CREATE TABLE acheteur
(
    id_acheteur     SERIAL PRIMARY KEY,
    non_acheteur    VARCHAR(50),
    prenom_acheteur VARCHAR(50),
    tel_acheteur    VARCHAR(50),
    email_acheteur  VARCHAR(50)
);

CREATE TABLE qrcode (
                        id_qrcode SERIAL PRIMARY KEY,
                        lien VARCHAR(50),
                        id_acheteur1 INT,
                        FOREIGN KEY(id_acheteur1) REFERENCES acheteur(id_acheteur)
);

CREATE TABLE associer_a (
                            id_personne INT,
                            id_stand INT,
                            PRIMARY KEY (id_personne, id_stand),
                            FOREIGN KEY (id_personne) REFERENCES personne (id_personne),
                            FOREIGN KEY (id_stand) REFERENCES stand (id_stand)
);

CREATE TABLE ressource_alouer (
                                  id_emplacement_carte INT,
                                  id_ressource INT,
                                  PRIMARY KEY (id_emplacement_carte, id_ressource),
                                  FOREIGN KEY (id_emplacement_carte) REFERENCES emplacement_carte (id_emplacement_carte),
                                  FOREIGN KEY (id_ressource) REFERENCES ressource (id_ressource)
);

CREATE TABLE tag_stand (
                           id_stand INT,
                           id_tag INT,
                           PRIMARY KEY (id_stand, id_tag),
                           FOREIGN KEY (id_stand) REFERENCES stand (id_stand),
                           FOREIGN KEY (id_tag) REFERENCES tag (id_tag)
);

CREATE TABLE associer (
                          id_personne INT,
                          id_non_attribuer INT,
                          id_acheteur INT,
                          PRIMARY KEY (id_personne, id_non_attribuer, id_acheteur),
                          FOREIGN KEY (id_personne) REFERENCES personne (id_personne),
                          FOREIGN KEY (id_non_attribuer) REFERENCES non_attribuer (id_non_attribuer),
                          FOREIGN KEY (id_acheteur) REFERENCES acheteur (id_acheteur)
);
