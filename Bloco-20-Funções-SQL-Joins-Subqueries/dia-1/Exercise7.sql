SELECT JOB_ID, SUM(salary) AS soma
FROM employees
GROUP BY JOB_ID;