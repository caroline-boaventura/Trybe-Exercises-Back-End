DELIMITER $$

CREATE TRIGGER trigger_update_movies_logs
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	
    INSERT INTO movies_logs (movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'UPDATE', NOW());
    
    
END$$

DELIMITER ;