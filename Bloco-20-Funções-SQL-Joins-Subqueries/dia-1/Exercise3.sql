SELECT JOB_ID, ROUND(AVG(salary), 2) AS `Media Salarial`
FROM employees
GROUP BY JOB_ID
ORDER BY `Media Salarial` DESC;