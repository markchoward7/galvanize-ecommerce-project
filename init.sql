CREATE TABLE users 
(
    id serial primary key,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)

);
CREATE TABLE manufacturers 
(
    id serial primary key,
    company_name VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(30)
);
CREATE TABLE customers 
(
    id serial primary key,
    company_name VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(30)
);
CREATE TABLE items 
(
    id serial primary key,
    names VARCHAR(255),
    descriptions VARCHAR(255)
);
CREATE TABLE purchased_orders 
(
    id serial primary key,
    users_id integer references users(id),
    manufacturers_id integer references manufacturers(id),
     date_ordered timestamp,
      date_received timestamp

);
CREATE TABLE sale_orders 
(
    id serial primary key,
     date_ordered timestamp,
     users_id integer references users(id),
    customers_id integer references customers(id),
      date_received timestamp
);
CREATE TABLE purchase_order_items
(
    id serial primary key,
    item_id integer references items(id),
    purchase_id integer references purchased_orders(id),
    qty integer
);
CREATE TABLE sale_order_items
(
    id serial primary key,
    item_id integer references items(id),
    sale_id integer references sale_orders(id),
    qty integer
);
CREATE TABLE manufacturers_items
(
    id serial primary key,
    item_id integer references items(id),
    manufacturer_id integer references manufacturers(id)
);




 INSERT INTO users (first_name,last_name, email) VALUES ('Mike', 'fake', 'fakemike@yahoo.com');
 INSERT INTO manufacturers (company_name, contact_name, contact_email, contact_phone) VALUES ('RandoCompany', 'Julie', 'randocompany.gmail.com', '309-222-5555');
 INSERT INTO customers (company_name, contact_name, contact_email, contact_phone) VALUES ('CustomerCompany', 'Rhonda', 'rhonda.gmail.com', '309-202-5555');
 INSERT INTO items(names, descriptions) VALUES ('floor cleaner', 'this item cleans the floors');
 INSERT INTO purchased_orders(users_id,manufacturers_id,date_ordered,date_received) VALUES (1, 1, current_timestamp, current_timestamp);
 INSERT INTO sale_orders(users_id,customers_id,date_ordered,date_received) VALUES (1, 1, current_timestamp, current_timestamp);
 INSERT INTO purchase_order_items(item_id, purchase_id, qty) VALUES (1,1,10);
 INSERT INTO sale_order_items(item_id, sale_id, qty) VALUES (1,1,20);
 INSERT INTO manufacturers_items(item_id, manufacturer_id) VALUES (1,1);



