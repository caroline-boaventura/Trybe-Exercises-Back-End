SELECT t1.domestic_sales, t1.international_sales, t2.title
FROM Pixar.BoxOffice AS t1
INNER JOIN Pixar.Movies AS t2
ON t1.movie_id = t2.id;