# Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H .

SELECT Name FROM Projects
WHERE Code LIKE '%H%';