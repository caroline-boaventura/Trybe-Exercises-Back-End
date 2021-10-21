SELECT 
    name, location
FROM
    Pixar.Theater AS t1
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Pixar.Movies AS t2
        WHERE
            t1.id = t2.theater_id);