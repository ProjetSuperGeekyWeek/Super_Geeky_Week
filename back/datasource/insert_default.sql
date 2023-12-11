-- Insert data into role table
INSERT INTO role (libelle) VALUES
                               ('Admin'),
                               ('Exhibitor'),
                               ('Visitor');

-- Insert data into service table
INSERT INTO service (libelle) VALUES
                                  ('Billets'),
                                  ('Concours'),
                                  ('Catering');

-- Insert data into emplacement_carte table
INSERT INTO emplacement_carte (id_emplacement_carte) VALUES
                                                         (1),
                                                         (2),
                                                         (3),
                                                         (4),
                                                         (5),
                                                         (6),
                                                         (7),
                                                         (8),
                                                         (9),
                                                         (10),
                                                         (11),
                                                         (12),
                                                         (13),
                                                         (14),
                                                         (15),
                                                         (16),
                                                         (17),
                                                         (18),
                                                         (19),
                                                         (20),
                                                         (21),
                                                         (22),
                                                         (23),
                                                         (24),
                                                         (25),
                                                         (26),
                                                         (27),
                                                         (28),
                                                         (29),
                                                         (30),
                                                         (31),
                                                         (32),
                                                         (33),
                                                         (34),
                                                         (35),
                                                         (36),
                                                         (37),
                                                         (38),
                                                         (39),
                                                         (40),
                                                         (41),
                                                         (42),
                                                         (43),
                                                         (44),
                                                         (45),
                                                         (46),
                                                         (47);

-- Insert data into ressource table
INSERT INTO ressource (nb_ressource, libelle_ressource) VALUES
                                                            (100, 'Chairs'),
                                                            (50, 'Tables'),
                                                            (200, 'Power Outlets');

-- Insert data into tag table
INSERT INTO tag (libele_tag) VALUES
                                 ('Technology'),
                                 ('Art'),
                                 ('Food');

-- Insert data into qrcode table
INSERT INTO qrcode (lien) VALUES
                              ('https://example.com/qrcode1'),
                              ('https://example.com/qrcode2'),
                              ('https://example.com/qrcode3');

-- Insert into jour table
INSERT INTO jour(horaire_debut, horaire_fin, num_jour) VALUES ('09:00:00', '18:00:00', 1);
INSERT INTO jour(horaire_debut, horaire_fin, num_jour) VALUES ('10:00:00', '17:00:00', 2);


-- Insert data into personne table
INSERT INTO personne (nom, prenom, email, num_tel, id_role) VALUES
                                                                ('Admin', 'Admin', 'admin@admin.com', 123456789, 1),
                                                                ('pre', 'pre', 'pre@pre.com', 987654321, 2),
                                                                ('Johnson', 'Bob', 'bob.johnson@example.com', 555123456, 3);

-- Insert data into stand table
INSERT INTO stand (nom_stand, id_emplacement_carte, id_service) VALUES
                                                                    ('stand 1', 1, 1),
                                                                    ('stand 2', 2, 2),
                                                                    ('stand 3', 3, 3),
                                                                    ('stand 4', 4, 1),
                                                                    ('stand 5', 5, 2),
                                                                    ('stand 6', 6, 3),
                                                                    ('stand 7', 7, 1),
                                                                    ('stand 8', 8, 2),
                                                                    ('stand 9', 9, 3),
                                                                    ('stand 10', 10, 1),
                                                                    ('stand 11', 11, 1),
                                                                    ('stand 12', 12, 1),
                                                                    ('stand 13', 13, 1),
                                                                    ('stand 14', 14, 1),
                                                                    ('stand 15', 15, 1),
                                                                    ('stand 16', 16, 1),
                                                                    ('stand 17', 17, 1),
                                                                    ('stand 18', 18, 1),
                                                                    ('stand 19', 19, 1),
                                                                    ('stand 20', 20, 1),
                                                                    ('stand 21', 21, 1),
                                                                    ('stand 22', 22, 1),
                                                                    ('stand 23', 23, 1),
                                                                    ('stand 24', 24, 1),
                                                                    ('stand 25', 25, 1),
                                                                    ('stand 26', 26, 1),
                                                                    ('stand 27', 27, 1),
                                                                    ('stand 28', 28, 1),
                                                                    ('stand 29', 29, 1),
                                                                    ('stand 30', 30, 1),
                                                                    ('stand 31', 31, 1),
                                                                    ('stand 32', 32, 1),
                                                                    ('stand 33', 33, 1),
                                                                    ('stand 34', 34, 1),
                                                                    ('dédicace 1', 35, 1),
                                                                    ('dédicace 2', 36, 1),
                                                                    ('dédicace 3', 37, 1),
                                                                    ('bar', 38, 1),
                                                                    ('salle 1', 39, 1),
                                                                    ('salle 2', 40, 1),
                                                                    ('espace gaming', 41, 1),
                                                                    ('grande scène', 42, 1),
                                                                    ('petite scène', 43, 1),
                                                                    ('foodtruck 1', 44, 1),
                                                                    ('foodtruck 2', 45, 1),
                                                                    ('foodtruck 3', 46, 1),
                                                                    ('accueil', 47, 1);

-- Insert into non_attribuer table (unassigned spaces)
INSERT INTO non_attribuer(prix, description, nb, prioritaire, id_service, id_jour, id_personne) VALUES (15.00, 'Forfait normal', 5, FALSE, 1, 1, 1);
INSERT INTO non_attribuer(prix, description, nb, prioritaire, id_service, id_jour, id_personne) VALUES (25.00, 'Forfait prioritaire', 5, TRUE, 1, 1, 1);
INSERT INTO non_attribuer(prix, description, nb, prioritaire, id_service, id_jour, id_personne) VALUES (15.00, 'Forfait handicapé', 5, TRUE, 1, 1, 1);
INSERT INTO non_attribuer(prix, description, nb, prioritaire, id_service, id_jour, id_personne) VALUES (15.00, 'Forfait normal', 5, FALSE, 1, 2, 1);
INSERT INTO non_attribuer(prix, description, nb, prioritaire, id_service, id_jour, id_personne) VALUES (25.00, 'Forfait prioritaire', 5, TRUE, 1, 2, 1);
INSERT INTO associer_a (id_personne, id_stand) VALUES
                                                   (1,1),
                                                   (2,2),
                                                   (3,3),
                                                   (1, 4),
                                                   (2,5),
                                                   (3,6),
                                                   (1,7),
                                                   (2,8),
                                                   (3,9),
                                                   (1,10),
                                                   (1,11),
                                                   (1,12),
                                                   (1,13),
                                                   (1,14),
                                                   (1,15),
                                                   (1,16),
                                                   (1,17),
                                                   (1,18),
                                                   (1,19),
                                                   (1,20),
                                                   (1,21),
                                                   (1,22),
                                                   (1,23),
                                                   (1,24),
                                                   (1,25),
                                                   (1,26),
                                                   (1,27),
                                                   (1,28),
                                                   (1,29),
                                                   (1,30),
                                                   (1,31),
                                                   (1,32),
                                                   (1,33),
                                                   (1,34),
                                                   (1,35),
                                                   (1,36),
                                                   (1,37),
                                                   (1,38),
                                                   (1,39),
                                                   (1,40),
                                                   (1, 41),
                                                   (1, 42),
                                                   (1, 43),
                                                   (1,44),
                                                   (1,45),
                                                   (1,46),
                                                   (1,47);

-- Insert data into acheteur table
INSERT INTO non_attribuer(prix, description, nb, prioritaire, id_service, id_jour, id_personne) VALUES (15.00, 'Forfait handicapé', 5, TRUE, 1, 2, 1);

-- Insert data into associer_a table
INSERT INTO acheteur (non_acheteur, prenom_acheteur, tel_acheteur, email_acheteur) VALUES
                                                                                       ('Visitor1', 'Alice', '111222333', 'visitor1@example.com'),
                                                                                       ('Visitor2', 'Bob', '444555666', 'visitor2@example.com');

-- Insert data into ressource_alouer table
INSERT INTO ressource_alouer (id_emplacement_carte, id_ressource) VALUES
                                                                      (1, 1),
                                                                      (1, 2),
                                                                      (1, 3);

-- Insert data into tag_stand table
INSERT INTO tag_stand (id_stand, id_tag) VALUES
                                             (1, 1),
                                             (2, 2),
                                             (3, 3);

-- Insert data into associer table
INSERT INTO associer (id_personne, id_non_attribuer, id_acheteur) VALUES
                                                                      (2, 1, 1),
                                                                      (3, 2, 2);