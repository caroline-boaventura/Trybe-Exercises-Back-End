# Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3 . Ordene o resultado em ordem alfabética.

SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name;