-- Insert data into Livre_d_or table
INSERT INTO Livre_d_or (temoignage, pseudo) VALUES
    ('C etait super', 'Higorami'),
    ('J ai adoré le cosplay de fury', 'Senquen'),
    ('C etait cool', 'Dragul');

-- Insert data into role table
INSERT INTO role (nom_role) VALUES
    ('Admin'),
    ('Exhibitor'),
    ('Visitor');

-- Insert data into personne table
INSERT INTO personne (nom_personne, prenom_personne, mail_personne, mdp_personne, image_personne, description_personne, id_role) VALUES
        ('Admin', 'Admin', 'admin@admin.com', 'Admin1234&', 'random.png','Je suis un Admin', 1),
        ('Jean', 'Pierre', 'jean@gmail.com', 'User1234&', 'random.png','Je suis un super prestataire qui dance', 2),
        ('Bob', 'Lennon', 'bob@gmail.com', 'User1234&', 'random.png','Je suis un prestataire prestigieux qui aime l or', 3);


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
    (7, 1),
    (15, 1),
    (24, 1),
    (25, 1),
    (26, 1),
    (27, 1),
    (28, 1),
    (29, 1),
    (30, 1),
    (31, 1),
    (32, 1),
    (33, 1),
    (34, 1),
    (35, 1),
    (36, 1),
    (37, 1),
    (38, 1),
    (39, 1),
    (40, 1),
    (41, 1),
    (42, 1),
    (43, 1),
    (44, 1),
    (45, 1),
    (46, 1),
    (47, 1);

-- Insert data into calendrier table
INSERT INTO calendrier (date_calendrier,horaire_debut,horaire_fin) VALUES
    ('2024-03-25', '09:00', '18:30'),
    ('2024-03-26', '08:30', '18:00');

-- Insert data into panier table
INSERT INTO panier (id_panier) VALUES
    (1),
    (2),
    (3),
    (4),
    (5);

-- Insert data into item table
INSERT INTO item (nom_item, stock_item, prix_item,image_item, description_item, id_personne, id_calendrier) VALUES
        ('Forfait Normal',50,15,'random.png','je suis un forfait normal',1,1),('Forfait Normal',50,15,'random.png','je suis un forfait normal',1,2),
        ('Forfait Priorité',50,25,'random.png','je suis un forfait prioritaire',1,1),('Forfait Priorité',50,25,'random.png','je suis un forfait prioritaire',1,2),
        ('Forfait Handicapé',50,15,'random.png','je suis un forfait handicapé',1,1),('Forfait Handicapé',50,15,'random.png','je suis un forfait handicapé',1,2),
        ('Super truc',100,1000000,'random.png','je suis le super truc mega cher de Bob',3,1);

-- Insert data into ligne_panier table
INSERT INTO ligne_panier (id_panier, id_item, quantite) VALUES
    (1,1,10),
    (1,2,5),
    (1,3,30),
    (2,1,3);

-- Insert data into qr_code table
INSERT INTO qr_code (nom_client, prenom_client, mail_client) VALUES
    ('visiteur 1', 'jacque', 'jacque@gmail.com'),
    ('visiteur 2', 'jacquot', 'jacquot@gmail.com'),
    ('visiteur 3', 'jacquie', 'jacquie@gmail.com'),
    ('visiteur 4', 'du terroir', 'noble@gmail.com');

-- Insert data into acheter table
INSERT INTO acheter (id_item, id_qr_code, consommer) VALUES
    (1,2,false),
    (1,2,false),
    (1,1,false),
    (1,1,true),
    (2,3,false),
    (3,3,false);

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
    (3,6);

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
