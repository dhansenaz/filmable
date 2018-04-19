CREATE TABLE IF NOT EXISTS genres(
id SERIAL PRIMARY KEY,
genre VARCHAR(50)
);

INSERT INTO genres (genre) values
('documentary') ,
('horror'),
('sci_fi'),
('animation'),
('drama'),
('suspense'),
('comedy'),
('family'),
('music'),
('action'),
('adventure'),
('fantasy'),
('music_video'),
('narrative'),
('biopic'),
('commercial'),
('trailer'),
('screenplay'),
('short'),
('long'),
('fiction'),
('non_fiction'),
('web_series');



CREATE TABLE IF NOT EXISTS festivals_genres(
id SERIAL PRIMARY KEY,
genres_id INT REFERENCES genres(id),
festival_id INT REFERENCES festival(id)

);


INSERT INTO festivals_genres(genres_id, festival_id)
VALUES(1, 1)

INSERT INTO festivals_genres(genres_id, festival_id)
VALUES
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1);


