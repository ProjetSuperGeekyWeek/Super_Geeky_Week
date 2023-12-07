DROP TABLE IF EXISTS associer;
DROP TABLE IF EXISTS tag_stand;
DROP TABLE IF EXISTS ressource_alouer;
DROP TABLE IF EXISTS associer_a;
DROP TABLE IF EXISTS acheteur;
DROP TABLE IF EXISTS non_attribuer;
DROP TABLE IF EXISTS stand;
DROP TABLE IF EXISTS personne;
DROP TABLE IF EXISTS qrcode;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS ressource;
DROP TABLE IF EXISTS emplacement_carte;
DROP TABLE IF EXISTS service;
DROP TABLE IF EXISTS role;

CREATE TABLE role(
                     id_role COUNTER,
                     libelle VARCHAR(50),
                     PRIMARY KEY(id_role)
);

CREATE TABLE service(
                        id_service COUNTER,
                        libelle VARCHAR(50),
                        PRIMARY KEY(id_service)
);

CREATE TABLE emplacement_carte(
                                  id_emplacement_carte COUNTER,
                                  PRIMARY KEY(id_emplacement_carte)
);

CREATE TABLE ressource(
                          id_ressource COUNTER,
                          nb_ressource INT,
                          libelle_ressource VARCHAR(50),
                          PRIMARY KEY(id_ressource)
);

CREATE TABLE tag(
                    id_tag COUNTER,
                    libele_tag VARCHAR(50),
                    PRIMARY KEY(id_tag)
);

CREATE TABLE qrcode(
                       id_qrcode COUNTER,
                       lien VARCHAR(50),
                       PRIMARY KEY(id_qrcode)
);

CREATE TABLE personne(
                         id_personne COUNTER,
                         nom VARCHAR(50),
                         prenom VARCHAR(50),
                         email VARCHAR(50),
                         num_tel INT,
                         id_role INT NOT NULL,
                         PRIMARY KEY(id_personne),
                         FOREIGN KEY(id_role) REFERENCES role(id_role)
);

CREATE TABLE stand(
                      id_stand COUNTER,
                      nom_stand VARCHAR(50),
                      id_emplacement_carte INT NOT NULL,
                      id_service INT NOT NULL,
                      PRIMARY KEY(id_stand),
                      FOREIGN KEY(id_emplacement_carte) REFERENCES emplacement_carte(id_emplacement_carte),
                      FOREIGN KEY(id_service) REFERENCES service(id_service)
);

CREATE TABLE non_attribuer(
                              id_non_attribuer COUNTER,
                              prix DECIMAL(15,2),
                              description VARCHAR(50),
                              nb INT,
                              id_personne INT NOT NULL,
                              PRIMARY KEY(id_non_attribuer),
                              FOREIGN KEY(id_personne) REFERENCES personne(id_personne)
);

CREATE TABLE acheteur(
                         id_acheteur COUNTER,
                         non_acheteur VARCHAR(50),
                         prenom_acheteur VARCHAR(50),
                         tel_acheteur VARCHAR(50),
                         email_acheteur VARCHAR(50),
                         id_qrcode INT NOT NULL,
                         PRIMARY KEY(id_acheteur),
                         FOREIGN KEY(id_qrcode) REFERENCES qrcode(id_qrcode)
);

CREATE TABLE associer_a(
                           id_personne INT,
                           id_stand INT,
                           PRIMARY KEY(id_personne, id_stand),
                           FOREIGN KEY(id_personne) REFERENCES personne(id_personne),
                           FOREIGN KEY(id_stand) REFERENCES stand(id_stand)
);

CREATE TABLE ressource_alouer(
                                 id_emplacement_carte INT,
                                 id_ressource INT,
                                 PRIMARY KEY(id_emplacement_carte, id_ressource),
                                 FOREIGN KEY(id_emplacement_carte) REFERENCES emplacement_carte(id_emplacement_carte),
                                 FOREIGN KEY(id_ressource) REFERENCES ressource(id_ressource)
);

CREATE TABLE tag_stand(
                          id_stand INT,
                          id_tag INT,
                          PRIMARY KEY(id_stand, id_tag),
                          FOREIGN KEY(id_stand) REFERENCES stand(id_stand),
                          FOREIGN KEY(id_tag) REFERENCES tag(id_tag)
);

CREATE TABLE associer(
                         id_personne INT,
                         id_non_attribuer INT,
                         id_acheteur INT,
                         PRIMARY KEY(id_personne, id_non_attribuer, id_acheteur),
                         FOREIGN KEY(id_personne) REFERENCES personne(id_personne),
                         FOREIGN KEY(id_non_attribuer) REFERENCES non_attribuer(id_non_attribuer),
                         FOREIGN KEY(id_acheteur) REFERENCES acheteur(id_acheteur)
);