-- Insert data into role table
INSERT INTO role (libelle) VALUES
                               ('Admin'),
                               ('Exhibitor'),
                               ('Visitor');

-- Insert data into service table
INSERT INTO service (libelle) VALUES
                                  ('Electricity'),
                                  ('Internet'),
                                  ('Catering');

-- Insert data into emplacement_carte table
INSERT INTO emplacement_carte DEFAULT VALUES;

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

-- Insert data into personne table
INSERT INTO personne (nom, prenom, email, num_tel, id_role) VALUES
                                                                ('Doe', 'John', 'john.doe@example.com', 123456789, 1),
                                                                ('Smith', 'Alice', 'alice.smith@example.com', 987654321, 2),
                                                                ('Johnson', 'Bob', 'bob.johnson@example.com', 555123456, 3);

-- Insert data into stand table
INSERT INTO stand (nom_stand, id_emplacement_carte, id_service) VALUES
                                                                    ('Tech Booth', 1, 1),
                                                                    ('Art Corner', 1, 2),
                                                                    ('Food Zone', 1, 3);

-- Insert data into non_attribuer table
INSERT INTO non_attribuer (prix, description, nb, id_personne) VALUES
                                                                   (50.00, 'Unused chairs', 20, 2),
                                                                   (100.00, 'Extra tables', 10, 3);

-- Insert data into acheteur table
INSERT INTO acheteur (non_acheteur, prenom_acheteur, tel_acheteur, email_acheteur, id_qrcode) VALUES
                                                                                                  ('Visitor1', 'Alice', '111222333', 'visitor1@example.com', 1),
                                                                                                  ('Visitor2', 'Bob', '444555666', 'visitor2@example.com', 2);

-- Insert data into associer_a table
INSERT INTO associer_a (id_personne, id_stand) VALUES
                                                   (2, 1),
                                                   (3, 2);

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
