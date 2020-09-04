CREATE TABLE products(
id SERIAL PRIMARY KEY,
name  VARCHAR(25),
price INTEGER,
imgurl TEXT
);

INSERT INTO products(name, price, imgurl)
VALUES ('banana', 1, 'https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg');

INSERT INTO products(name, price, imgurl)
VALUES ('Gorilla Plush', 25, 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-80431-2.jpg?v-cache=1594393707');

SELECT * FROM products;