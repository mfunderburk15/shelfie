UPDATE products
SET
name = $2,
price = $3,
imgurl = $4
WHERE id = $1
returning *;