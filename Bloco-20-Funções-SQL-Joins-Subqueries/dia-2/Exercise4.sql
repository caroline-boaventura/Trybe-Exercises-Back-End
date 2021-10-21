SELECT t1.name, t1.location, t2.title, t2.director
FROM Pixar.Theater AS t1
LEFT JOIN Pixar.Movies AS t2
ON t1.id = t2.theater_id;