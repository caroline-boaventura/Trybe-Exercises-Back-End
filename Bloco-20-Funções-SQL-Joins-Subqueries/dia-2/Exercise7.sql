SELECT 
    t1.title, t2.rating
FROM
    (SELECT 
        *
    FROM
        Pixar.Movies
    WHERE
        year > 2009) AS t1
        INNER JOIN
    Pixar.BoxOffice AS t2 ON t1.id = t2.movie_id;