-- Drop table if exists
DROP TABLE IF EXISTS creneau CASCADE;
DROP TABLE IF EXISTS evenement CASCADE;
DROP TABLE IF EXISTS personne_tag CASCADE;
DROP TABLE IF EXISTS tag CASCADE;
DROP TABLE IF EXISTS acheter CASCADE;
DROP TABLE IF EXISTS qr_code CASCADE;
DROP TABLE IF EXISTS ligne_panier CASCADE;
DROP TABLE IF EXISTS item CASCADE;
DROP TABLE IF EXISTS panier CASCADE;
DROP TABLE IF EXISTS calendrier CASCADE;
DROP TABLE IF EXISTS stand CASCADE;
DROP TABLE IF EXISTS emplacement_ressource CASCADE;
DROP TABLE IF EXISTS ressource CASCADE;
DROP TABLE IF EXISTS emplacement CASCADE;
DROP TABLE IF EXISTS inscription_personne CASCADE;
DROP TABLE IF EXISTS inscription CASCADE;
DROP TABLE IF EXISTS livre_personne CASCADE;
DROP TABLE IF EXISTS Livre_d_or CASCADE;
DROP TABLE IF EXISTS personne CASCADE;
DROP TABLE IF EXISTS role CASCADE;

-- Create table

CREATE TABLE role (
                      id_role SERIAL PRIMARY KEY,
                      nom_role VARCHAR(50) NOT NULL
);

CREATE TABLE personne (
                          id_personne SERIAL PRIMARY KEY,
                          nom_personne VARCHAR(50) NOT NULL,
                          prenom_personne VARCHAR(50) NOT NULL,
                          mail_personne VARCHAR(100) NOT NULL,
                          mdp_personne VARCHAR(50) NOT NULL,
                          image_personne VARCHAR(100) NOT NULL,
                          description_personne VARCHAR(255) NOT NULL,
                          id_role INTEGER NOT NULL,
                          CONSTRAINT fk_role FOREIGN KEY (id_role) REFERENCES role(id_role)
);

-- partie services
CREATE TABLE Livre_d_or (
    id_temoignage SERIAL PRIMARY KEY,
    temoignage VARCHAR(255) NOT NULL,
    pseudo VARCHAR(50) NOT NULL
);

CREATE TABLE livre_personne (
                                id_personne INTEGER NOT NULL,
                                id_temoignage INTEGER NOT NULL,
                                constraint pk_livre_personne PRIMARY KEY (id_personne, id_temoignage),
                                CONSTRAINT fk_personne FOREIGN KEY (id_personne) REFERENCES personne(id_personne),
                                CONSTRAINT fk_temoignage FOREIGN KEY (id_temoignage) REFERENCES Livre_d_or(id_temoignage)
);

CREATE TABLE inscription (
                             id_inscription SERIAL PRIMARY KEY,
                             nom_inscription VARCHAR(50) NOT NULL,
                             description_inscription VARCHAR(255) NOT NULL,
                             nb_place INTEGER NOT NULL,
                             image_inscription VARCHAR(100) NOT NULL,
                             id_personne INTEGER NOT NULL,
                             CONSTRAINT fk_personne FOREIGN KEY (id_personne) REFERENCES personne(id_personne)
);

CREATE TABLE inscrit (
                            id_inscription INTEGER NOT NULL,
                            nom_inscrit VARCHAR(100) NOT NULL,
                            prenom_inscrit VARCHAR(100) NOT NULL,
                            description_inscrit VARCHAR(255) NOT NULL,
                            id_calendrier INTEGER NOT NULL,
                            CONSTRAINT pk_inscrit PRIMARY KEY (id_inscription, nom_inscrit, prenom_inscrit, horaire_inscrit),
                            CONSTRAINT fk_inscription FOREIGN KEY (id_inscription) REFERENCES inscription(id_inscription)
                            CONSTRAINT fk_calendrier FOREIGN KEY (id_calendrier) REFERENCES calendrier(id_calendrier)
);

CREATE TABLE inscription_calendrier(
                            id_inscription INTEGER NOT NULL,
                            id_calendrier INTEGER NOT NULL,
                            CONSTRAINT pk_inscription_calendrier PRIMARY KEY (id_inscription, id_calendrier),
                            CONSTRAINT fk_inscription FOREIGN KEY (id_inscription) REFERENCES inscription(id_inscription),
);

-- fin partie services

CREATE TABLE emplacement (
                             id_emplacement SERIAL PRIMARY KEY,
                             nom_emplacement VARCHAR(50) NOT NULL
);

CREATE TABLE ressource (
                           id_ressource SERIAL PRIMARY KEY,
                           nom_ressource VARCHAR(50) NOT NULL
);

CREATE TABLE emplacement_ressource (
                                       id_emplacement INTEGER NOT NULL,
                                       id_ressource INTEGER NOT NULL,
    -- nb_ressource INTEGER NOT NULL,
                                       CONSTRAINT pk_emplacement_ressource PRIMARY KEY (id_emplacement, id_ressource),
                                       CONSTRAINT fk_emplacement FOREIGN KEY (id_emplacement) REFERENCES emplacement(id_emplacement),
                                       CONSTRAINT fk_ressource FOREIGN KEY (id_ressource) REFERENCES ressource(id_ressource)
);

CREATE TABLE stand (
                       id_emplacement INTEGER NOT NULL,
                       id_personne INTEGER NOT NULL,
                       CONSTRAINT pk_stand PRIMARY KEY (id_emplacement, id_personne),
                       CONSTRAINT fk_emplacement FOREIGN KEY (id_emplacement) REFERENCES emplacement(id_emplacement),
                       CONSTRAINT fk_personne FOREIGN KEY (id_personne) REFERENCES personne(id_personne)
);

CREATE TABLE calendrier (
                            id_calendrier SERIAL PRIMARY KEY,
                            date_calendrier DATE NOT NULL,
                            horaire_debut TIME NOT NULL,
                            horaire_fin TIME NOT NULL
);

CREATE TABLE panier (
                        id_panier SERIAL PRIMARY KEY,
                        nom_panier VARCHAR(50) NOT NULL
);

CREATE TABLE item (
                      id_item SERIAL PRIMARY KEY,
                      nom_item VARCHAR(80) NOT NULL,
                      stock_item INTEGER NOT NULL,
                      prix_item INTEGER NOT NULL, -- en centimes
                      image_item VARCHAR(100) NOT NULL,
                      description_item VARCHAR(255) NOT NULL,
                      id_personne INTEGER NOT NULL,
                      id_calendrier INTEGER NOT NULL,
                      CONSTRAINT fk_personne FOREIGN KEY (id_personne) REFERENCES personne(id_personne),
                      CONSTRAINT fk_calendrier FOREIGN KEY (id_calendrier) REFERENCES calendrier(id_calendrier)
);

CREATE TABLE ligne_panier (
                              id_panier INTEGER NOT NULL,
                              id_item INTEGER NOT NULL,
                              quantite INTEGER NOT NULL,
                              CONSTRAINT pk_ligne_panier PRIMARY KEY (id_panier, id_item),
                              CONSTRAINT fk_panier FOREIGN KEY (id_panier) REFERENCES panier(id_panier),
                              CONSTRAINT fk_item FOREIGN KEY (id_item) REFERENCES item(id_item)
);

CREATE TABLE qr_code (
                         id_qr_code SERIAL PRIMARY KEY,
                         nom_client VARCHAR(50) NOT NULL,
                         prenom_client VARCHAR(50) NOT NULL,
                         mail_client VARCHAR(100) NOT NULL
);

CREATE TABLE acheter (
                         id_acheter SERIAL PRIMARY KEY,
                         id_item INTEGER NOT NULL,
                         id_qr_code INTEGER NOT NULL,
                         consommer BOOLEAN NOT NULL,
                         CONSTRAINT fk_item FOREIGN KEY (id_item) REFERENCES item(id_item),
                         CONSTRAINT fk_qr_code FOREIGN KEY (id_qr_code) REFERENCES qr_code(id_qr_code)
);

CREATE TABLE tag (
                     id_tag SERIAL PRIMARY KEY,
                     nom_tag VARCHAR(50) NOT NULL
);

CREATE TABLE personne_tag (
                              id_personne INTEGER NOT NULL,
                              id_tag INTEGER NOT NULL,
                              CONSTRAINT pk_personne_tag PRIMARY KEY (id_personne, id_tag),
                              CONSTRAINT fk_personne FOREIGN KEY (id_personne) REFERENCES personne(id_personne),
                              CONSTRAINT fk_tag FOREIGN KEY (id_tag) REFERENCES tag(id_tag)
);

CREATE TABLE evenement (
                           id_evenement SERIAL PRIMARY KEY,
                           nom_evenement VARCHAR(50) NOT NULL,
                           description_evenement VARCHAR(255) NOT NULL,
                           nb_place INTEGER NOT NULL,
                           image_evenement VARCHAR(100) NOT NULL,
                           id_personne INTEGER NOT NULL,
                           id_emplacement INTEGER NOT NULL,
                           CONSTRAINT fk_personne FOREIGN KEY (id_personne) REFERENCES personne(id_personne),
                           CONSTRAINT fk_emplacement FOREIGN KEY (id_emplacement) REFERENCES emplacement(id_emplacement)
);

CREATE TABLE creneau (
                         id_evenement INTEGER NOT NULL,
                         id_calendrier INTEGER NOT NULL,
                         heure_debut_evenement TIME NOT NULL,
                         heure_fin_evenement TIME NOT NULL,
                         CONSTRAINT pk_creneau PRIMARY KEY (id_evenement, id_calendrier, heure_debut_evenement, heure_fin_evenement),
                         CONSTRAINT fk_evenement FOREIGN KEY (id_evenement) REFERENCES evenement(id_evenement),
                         CONSTRAINT fk_calendrier FOREIGN KEY (id_calendrier) REFERENCES calendrier(id_calendrier)
);


