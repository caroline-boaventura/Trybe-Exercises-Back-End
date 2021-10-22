DELIMITER $$

CREATE TRIGGER trigger_update_ticket_price
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN

	IF (NEW.ticket_price > OLD.ticket_price) THEN
		SET NEW.ticket_price_estimation = 'Increasing';
	ELSE 
		SET NEW.ticket_price_estimation = 'Decreasing';
	END IF;

END$$

DELIMITER ;