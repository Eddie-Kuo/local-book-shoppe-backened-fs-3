-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS authors_books;
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    DOB INT, 
    POB VARCHAR
);

CREATE TABLE books(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR,
    released_year INT
);

CREATE TABLE authors_books(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO authors(
    name,
    DOB,
    POB
)
values
('Clementia Goulborne',2012,'Thailand'),
('Susie Faherty',1993,'China'),
('Niki Dumsday',2005,'United States'),
('Aleksandr Reiners',2004,'Peru'),
('Yorgo Lampkin',2007,'Indonesia'),
('Marget Rydeard',2011,'Philippines'),
('Cort Stood',1998,'Comoros'),
('Finley Belbin',2004,'Venezuela'),
('Cole Grew',2007,'Greece'),
('Allard Broz',1994,'Indonesia');

INSERT INTO books(
    title,
    released_year
)
values
('Two Days, One Night', 2002),
('Queen: Days of Our Lives', 2008),
('The Kiss of the Vampire', 1978),
('Journey to Italy' , 1993),
('Blood and Roses' , 2005),
('The Hallelujah Handshake', 2007),
('Baadasssss!', 1994),
('The Case Against 8', 2002),
('Bad News Bears',2002),
('Freaky Deaky',1996);

INSERT INTO authors_books(
    author_id,
    book_id
)
values
(1,1),
(1,2),
(2,10),
(3,8),
(4,8),
(5,9),
(6,5),
(6,4),
(7,6),
(8,7),
(9,3),
(10,3),
(10,5),
(6,1);