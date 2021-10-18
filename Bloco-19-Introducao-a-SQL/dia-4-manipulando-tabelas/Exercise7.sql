SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Movies
WHERE director = 'Andrew Staton';

DELETE FROM BoxOffice
WHERE movie_id = 2;

DELETE FROM BoxOffice
WHERE movie_id = 9;

DELETE FROM Movies
WHERE director = 'Andrew Staton';

SELECT * FROM Movies;