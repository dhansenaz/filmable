SELECT DISTINCT f.* FROM festival f
JOIN festivals_genres fg ON f.id = fg.festival_id
JOIN genres g ON g.id = fg.genres_id
WHERE fg.genres_id IN ($1:csv);