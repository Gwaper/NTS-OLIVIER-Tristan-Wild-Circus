CREATE DATABASE circus;

USE circus;

CREATE TABLE artist(
    id_artist INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(255),
    pseudo VARCHAR(255),
    photo VARCHAR(255),
    video VARCHAR(255)
);

-- mock data artist
INSERT INTO circus.artist
(fullname,pseudo,photo,video)
VALUES
( "Julien Mari", "JUL","https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/JUL_-_Julien_Mari_2018.jpg/220px-JUL_-_Julien_Mari_2018.jpg","https://www.youtube.com/watch?v=qWpBduQKTMY"),
( "Pierre Billon" , "Pierre Billon","http://www.chartsinfrance.net/covers/aHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvZTcxMmQzMTc0NWY0YTZiOTI3MzhkZTAzOWRjMDY3ODZjYzM2NmQzYg==.jpg","https://www.youtube.com/watch?v=AfeAhCWaMD0"),
("Mats Olle Göran Söderlund" , "Gunther","https://img.discogs.com/cnXn-5f-mrNFC-O04hYr1-4S3os=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-281133-1492371439-2439.jpeg.jpg","https://www.youtube.com/watch?v=z13qnzUQwuI"),
("Aya Danioko", "Aya Nakamura","https://image-api.nrj.fr/medias/2018/09/aya-nakamura-cover-djadja-nue_5bac966a250ec.jpg","https://www.youtube.com/watch?v=EkGiGf8utCM"),
("Gandhi Djuna","Gims","https://upload.wikimedia.org/wikipedia/commons/4/4e/Ma%C3%AEtre_Gims_Cannes_2016_2.jpg","https://www.youtube.com/watch?v=C-MkGxj1aBE");

CREATE TABLE spectacle(
  id_show INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date_show DATE,
  name_show VARCHAR(255),
  capacity INT,
  description_show VARCHAR(255),
  picture_show VARCHAR(255)
);

    INSERT INTO circus.spectacle
    (date_show, name_show, capacity, description_show, picture_show )
    VALUES
    ('2019-07-25', "Wild-singer",85,"a wonderfull music show with amazing singer","http://www.trouvtavoix.com/medias/album/micro-grande-taille-detouree.jpg"),
    ('2019-07-26', "Wild-singer",85,"a wonderfull music show with amazing singer","http://www.trouvtavoix.com/medias/album/micro-grande-taille-detouree.jpg"),
    ('2019-07-27', "Wild-singer",85,"a wonderfull music show with amazing singer","http://www.trouvtavoix.com/medias/album/micro-grande-taille-detouree.jpg");


CREATE TABLE registrations (
  id_registration INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  quantity_adult INT,
  quantity_children INT,
  show_id INT,
  PRIMARY KEY (id_registration),
  FOREIGN KEY (show_id) REFERENCES spectacle(id_show)
);

CREATE TABLE compagny_registration (
  id_compagny  INT NOT NULL AUTO_INCREMENT,
  referent VARCHAR(255),
  compagny_name VARCHAR(255),
   quantity_adult INT,
  quantity_children INT,
    show_id INT,
    PRIMARY KEY (id_compagny),
  FOREIGN KEY (show_id) REFERENCES spectacle(id_show)
);

CREATE TABLE vote (
    id_vote INT  NOT NULL AUTO_INCREMENT,
    artist_id int,
    PRIMARY KEY (id_vote),
    FOREIGN KEY (artist_id) REFERENCES artist(id_artist)
);

CREATE  TABLE goldenBook(
    id_goldenBook INT  PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pseudo VARCHAR (255),
    comment VARCHAR(255),
    date_comment DATETIME
);

