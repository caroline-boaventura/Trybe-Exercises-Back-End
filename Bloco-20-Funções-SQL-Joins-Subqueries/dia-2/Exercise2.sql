SELECT 
    t2.title, t1.domestic_sales, t1.international_sales
FROM
    Pixar.BoxOffice AS t1
        INNER JOIN
    Pixar.Movies t2 ON t1.movie_id = t2.id
WHERE
    international_sales > domestic_sales;