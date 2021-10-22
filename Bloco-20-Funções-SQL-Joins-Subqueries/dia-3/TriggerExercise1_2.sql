DELIMITER $$

CREATE TRIGGER trigger_insert_movies_logs
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	
    INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id + 1, 'INSERT', NOW());
    
    
END$$

DELIMITER ;