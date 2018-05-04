SELECT * FROM festival
WHERE id IN (
SELECT festival_id FROM festival_list WHERE user_id = 1
);