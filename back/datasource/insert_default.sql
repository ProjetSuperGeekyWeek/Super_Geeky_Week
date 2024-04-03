
-- Insert data into role table
INSERT INTO role (nom_role) VALUES
    ('Admin'),
    ('Exhibitor'),
    ('Visitor');

-- Insert data into personne table
INSERT INTO personne (nom_personne, prenom_personne, mail_personne, mdp_personne, image_personne, description_personne, id_role) VALUES
        ('Admin', 'Admin', 'admin@admin.com', 'Admin1234&', 'random.png','Je suis un Admin', 1),
        ('Jean', 'Pierre', 'jean@gmail.com', 'User1234&', 'random.png','Je suis un super prestataire qui dance', 2),
        ('Bob', 'Lennon', 'bob@gmail.com', 'User1234&', 'random.png','Je suis un prestataire prestigieux qui aime l or', 3),
        ('Microsoft', '', 'microsoft@gmail.com', 'User1234&', 'random.png','Je suis un prestataire qui préfère windows à linux', 3);

-- partie services

-- Insert data into Livre_d_or table
INSERT INTO Livre_d_or (temoignage, pseudo, id_personne) VALUES
    ('C''était super', 'Higorami',1),
    ('J''ai adoré le cosplay', 'Senqen',1),
    ('C''était cool', 'Dragul',2),
    ('Eren','Mikasa',1),
    ('Je me suis bien amusé', 'Jean', 2),
    ('Dommage que ce soit fini', 'Pierre', 3),
    ('Week-end inoubliable', 'Anonyme', 3),
    ('Meilleur moment de ma vie', 'Axolot', 4),
    ('I am Batman', 'Batman', 4);

-- Insert data into inscription table
INSERT INTO inscription (nom_inscription, description_inscription, nb_place, image_inscription, id_personne) VALUES
    ('Tournoi Smash Bros Ultimate', 'Un tournoi smash bros sympa', 16, 'random.png', 1),
    ('Concours cosplay', 'Venez déguisés !', 128, 'random.png', 1),
    ('Tournoi Smash Bros Melee', 'Un tournoi smash bros sympa', 16, 'random.png', 1),
    ('Tournoi Smash Bros Ultimate', 'Un tournoi smash bros sympa', 16, 'random.png', 2),
    ('Concours de mangeur de hot dog', 'Venez vous remplir la panse !', 128, 'random.png', 2),
    ('Concours cosplay', 'Venez déguisés !', 128, 'random.png', 3);

-- fin partie services

-- Insert data into emplacement_carte table
INSERT INTO emplacement (nom_emplacement) VALUES
    ('stand 1'),
    ('stand 2'),
    ('stand 3'),
    ('stand 4'),
    ('stand 5'),
    ('stand 6'),
    ('stand 7'),
    ('stand 8'),
    ('stand 9'),
    ('stand 10'),
    ('stand 11'),
    ('stand 12'),
    ('stand 13'),
    ('stand 14'),
    ('stand 15'),
    ('stand 16'),
    ('stand 17'),
    ('stand 18'),
    ('stand 19'),
    ('stand 20'),
    ('stand 21'),
    ('stand 22'),
    ('stand 23'),
    ('stand 24'),
    ('stand 25'),
    ('stand 26'),
    ('stand 27'),
    ('stand 28'),
    ('stand 29'),
    ('stand 30'),
    ('stand 31'),
    ('stand 32'),
    ('stand 33'),
    ('stand 34'),
    ('dédicace 1'),
    ('dédicace 2'),
    ('dédicace 3'),
    ('bar'),
    ('salle 1'),
    ('salle 2'),
    ('espace gaming'),
    ('grande scène'),
    ('petite scène'),
    ('foodtruck 1'),
    ('foodtruck 2'),
    ('foodtruck 3'),
    ('accueil');

-- Insert data into ressource table
INSERT INTO ressource (nom_ressource) VALUES
    ('Arrivée eau'),
    ('prise électrique');

-- Insert data into emplacement_ressource table
INSERT INTO emplacement_ressource (id_emplacement,id_ressource) VALUES
    (1,1),
    (1,2),
    (2,2);

-- Insert data into stand table
INSERT INTO stand (id_emplacement, id_personne) VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 1),
    (5, 2),
    (6, 3),
    (7, 4),
    (15, 2),
    (24, 2),
    (25, 4),
    (26, 1),
    (27, 1),
    (28, 1),
    (29, 4),
    (30, 1),
    (31, 1),
    (32, 4),
    (33, 1),
    (34, 1),
    (35, 1),
    (36, 3),
    (37, 1),
    (38, 1),
    (39, 1),
    (40, 1),
    (41, 2),
    (42, 1),
    (43, 1),
    (44, 1),
    (45, 1),
    (46, 1),
    (47, 1);

-- Insert data into jour table
INSERT INTO jour (date_calendrier) VALUES
    ('Vendredi'),
    ('Samedi'),
    ('Dimanche');

-- Insert data into calendrier table
INSERT INTO calendrier (id_jour,horaire_debut,horaire_fin) VALUES
    (1, '09:00', '10:30'),
    (2, '08:30', '11:00'),
    (3, '08:30', '12:00'),
    (1, '11:00', '14:30'),
    (2, '13:30', '15:00'),
    (3, '17:30', '18:00');

-- Insert data into inscrit table
INSERT INTO inscrit (id_inscription, nom_inscrit, prenom_inscrit, description_inscrit, id_calendrier) VALUES
    (4, 'visiteur 1', 'jacque', 'je suis un visiteur mauvais', 1),
    (4, 'visiteur 2', 'jacquot', 'je suis un visiteur méchant', 2),
    (5, 'visiteur 3', 'jacquie', 'je suis un visiteur amical', 1),
    (5, 'visiteur 4', 'pierre', 'je suis un visiteur gentil', 3),
    (6, 'visiteur 1', 'jacque', 'je suis un visiteur mauvais', 2),
    (6, 'visiteur 2', 'jacquot', 'je suis un visiteur méchant', 2),
    (6, 'visiteur 3', 'jacquie', 'je suis un visiteur amical', 2),
    (6, 'visiteur 4', 'du terroir', 'je suis un visiteur gentil', 2);

-- Insert data into inscription_calendrier table
INSERT INTO inscription_calendrier (id_inscription, id_calendrier) VALUES
    (1,1),
    (1,2),
    (2,1),
    (2,2),
    (3,1),
    (3,2),
    (4,1),
    (4,2),
    (5,3),
    (5,4),
    (5,5),
    (6,1),
    (6,2);

-- Insert data into panier table
INSERT INTO panier (nom_panier) VALUES
    ('panier1'),
    ('panier2'),
    ('panier3'),
    ('panier4'),
    ('panier5');

-- Insert data into item table
INSERT INTO item (nom_item, stock_item, prix_item,image_item, description_item, id_personne, id_calendrier) VALUES
        ('Forfait Normal',50,15,'random.png','je suis un forfait normal',1,1),('Forfait Normal',50,15,'random.png','je suis un forfait normal',1,2),
        ('Forfait Priorité',50,25,'random.png','je suis un forfait prioritaire',1,1),('Forfait Priorité',50,25,'random.png','je suis un forfait prioritaire',1,2),
        ('Forfait Handicapé',50,10,'random.png','je suis un forfait handicapé',1,1),('Forfait Handicapé',50,15,'random.png','je suis un forfait handicapé',1,2);

-- Insert data into ligne_panier table
INSERT INTO ligne_panier (id_panier, id_item, quantite) VALUES
    (1,1,10),
    (1,2,5),
    (1,3,30),
    (2,1,3);

-- Insert data into qr_code table
INSERT INTO qr_code (nom_client, prenom_client, mail_client) VALUES
    ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','visiteur 1', 'jacque', 'jacque@gmail.com'),
    ('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','visiteur 2', 'jacquot', 'jacquot@gmail.com'),
    ('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','visiteur 3', 'jacquie', 'jacquie@gmail.com'),
    ('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11','visiteur 4', 'du terroir', 'noble@gmail.com');

-- Insert data into acheter table
INSERT INTO acheter (id_item, id_qr_code, consommer) VALUES
    (1,'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',false),
    (1,'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',false),
    (1,'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',false),
    (1,'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',true),
    (2,'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',false),
    (3,'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',false);

-- Insert data into tag table
INSERT INTO tag (nom_tag) VALUES
    ('Nourriture'),
    ('Musique'),
    ('Dance'),
    ('Goodies'),
    ('Sabres'),
    ('Dessins');


-- Insert data into personne_tag table
INSERT INTO personne_tag (id_personne, id_tag) VALUES
    (1,1),
    (2,2),
    (2,3),
    (3,2),
    (3,4),
    (3,5),
    (3,6),
    (4,1),
    (4,2),
    (4,3),
    (4,4),
    (4,5),
    (4,6);

-- Insert data evenement tag table
INSERT INTO evenement (nom_evenement, description_evenement, nb_place,image_evenement, id_personne, id_emplacement) VALUES
        ('Tournoi Smash Bros Ultimate', 'Un tournoi smash bros sympa', 16, 'random.png', 2, 42),
        ('Tournoi Smash Bros Ultimate', 'Un tournoi smash bros sympa', 16, 'random.png', 2, 42),
        ('Tournoi Smash Bros Ultimate', 'Un tournoi smash bros sympa', 16, 'random.png', 3, 43),
        ('Concours cosplay', 'Venez déguisés !', 128, 'random.png', 3, 42),
        ('Concours cosplay', 'Venez déguisés !', 128, 'random.png', 3, 42);

-- Insert data into personne_tag table
INSERT INTO creneau (id_evenement, id_calendrier,heure_debut_evenement, heure_fin_evenement) VALUES
        (1,1,'12:00:00','14:30:00'),
        (2,1,'9:00:00','10:00:00'),
        (3,1,'12:00:00','14:00:00'),
        (4,1,'10:30:00','12:00:00'),
        (5,2,'12:00:00','15:00:00');

-- Insert data into contact table
INSERT INTO contact (mail_client, message_client, id_personne) VALUES 
        ('client@example.com', 'Contenu du message', 1), -- Assurez-vous d'ajuster l'identifiant de la personne correcte
        ('jesuis@moi.com', 'Je suis moi', 2),
        ('jean@moi.com', 'je me suis perdu', 2),
        ('help@me.fr', 'super moment je reviendrais', 3),
        ('linuxMaster@debian.com', 'linux is the best', 4);
