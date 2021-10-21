SELECT 
    t1.title, t2.rating
FROM
    (SELECT 
        *
    FROM
        Pixar.BoxOffice
    WHERE
        rating > 7.5) AS t2
        INNER JOIN
    Pixar.Movies AS t1 ON t1.id = t2.movie_id;