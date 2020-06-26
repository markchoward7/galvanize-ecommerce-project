const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    database: 'database_name',
    host: 'db',
    port: 5432,
})


function getUsers(req,res)
{
    pool.query("SELECT * FROM users", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}
function getManufacturers(req,res)
{
    pool.query("SELECT * FROM manufacturers", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}
function getCustomers(req,res)
{
    pool.query("SELECT * FROM customers", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}
function getItems(req,res)
{
    pool.query("SELECT * FROM items", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}
function getPurchaseOrders(req,res)
{
    pool.query("SELECT * FROM purchased_orders", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            for(const row of results.rows)
            {
                row.users_id = `http://${req.headers.host}/user/${row.users_id}`;
                row.manufacturers_id = `http://${req.headers.host}/manufacturer/${row.manufacturers_id}`
            }
            res.send(results.rows)
        }
    })
}

function getSalesOrders(req,res)
{
    pool.query("SELECT * FROM sale_orders ", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            for(const row of results.rows)
            {
                row.users_id = `http://${req.headers.host}/user/${row.users_id}`;
                row.customers_id = `http://${req.headers.host}/customer/${row.customers_id}`
            }
            res.send(results.rows)
        
        }
    })
}
function getManufacturerById(req,res)
{
    pool.query("SELECT * FROM manufacturers WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
            
        }
    })
}
function getItemById(req,res)
{
    pool.query("SELECT * FROM items WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
            
        }
    })
}
function getUsersById(req,res)
{
    pool.query("SELECT * FROM users WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}
function getCustomerById(req,res)
{
    pool.query("SELECT * FROM customers WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}
function getPurchaseOrderById(req,res)
{
    pool.query("SELECT * FROM purchased_orders WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            for(const row of results.rows)
            {
                row.users_id = `http://${req.headers.host}/user/${row.users_id}`;
                row.manufacturers_id = `http://${req.headers.host}/manufacturer/${row.manufacturers_id}`
            }
            res.send(results.rows)
        
        }
    })
}
function getSaleOrdersById(req,res)
{
    pool.query("SELECT * FROM sale_orders WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            for(const row of results.rows)
            {
                row.users_id = `http://${req.headers.host}/user/${row.users_id}`;
                row.customers_id = `http://${req.headers.host}/customer/${row.customers_id}`
            }
            res.send(results.rows)
        
        }
    })
}
function createNewUser(req,res)
{
    pool.query("INSERT INTO users (first_name, last_name, email) VALUES ($1,$2,$3) ", [req.body.firstname, req.body.lastname, req.body.email], (error,results) =>{
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewManufacturer(req,res)
{
    pool.query("INSERT INTO manufacturers (company_name, contact_name, contact_email, contact_phone) VALUES ($1,$2,$3, $4) ", [req.body.companyname, req.body.contactname, req.body.contactemail, req.body.contactphone], (error,results) =>{
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewCustomer(req,res)
{
    pool.query("INSERT INTO customers (company_name, contact_name, contact_email, contact_phone) VALUES ($1,$2,$3, $4) ", [req.body.companyname, req.body.contactname, req.body.contactemail, req.body.contactphone], (error,results) =>{
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewItems(req,res)
{
    pool.query("INSERT INTO items (names, descriptions) VALUES ($1,$2) ", [req.body.names, req.body.descriptions], (error,results) =>{
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewPurchaseOrder(req,res)
{
    pool.query("INSERT INTO purchased_orders (users_id, manufacturers_id, date_ordered, date_received) VALUES ($1,$2,$3, $4) ", [req.body.userId, req.body.manufacturers_id, req.body.dateOrdered, req.body.dateReceived], (error,results) =>{
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewSaleOrder(req,res)
{
    pool.query("INSERT INTO sale_orders (users_id, customers_id, date_ordered, date_received) VALUES ($1,$2,$3, $4) ", [req.body.userId, req.body.customersId, req.body.dateOrdered, req.body.dateReceived], (error,results) =>{
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(201).send();
        }

    })
}
function deleteUser(req,res)
{
    pool.query("DELETE FROM users WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteManufacturer(req,res)
{
    pool.query("DELETE FROM manufacturers WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteCustomers(req,res)
{
    pool.query("DELETE FROM customers WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteItems(req,res)
{
    pool.query("DELETE FROM items WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(204).send();
        }
    })
}
function deletePurchasedOrders(req,res)
{
    pool.query("DELETE FROM purchased_orders WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteSaleOrders(req,res)
{
    pool.query("DELETE FROM sale_orders WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(204).send();
        }
    })
}

function updateUser(req,res)
{
    pool.query("UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4",[req.body.firstname, req.body.lastname,req.body.email, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updateManufacturer(req,res)
{
    pool.query("UPDATE manufacturers SET company_name = $1, contact_name = $2, contact_email = $3, contact_phone = $4 WHERE id = $5",[req.body.companyname, req.body.contactname,req.body.contactemail, req.body.contactphone, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updateCustomer(req,res)
{
    pool.query("UPDATE customers SET company_name = $1, contact_name = $2, contact_email = $3, contact_phone = $4 WHERE id = $5",[req.body.companyname, req.body.contactname,req.body.contactemail, req.body.contactphone, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updateItems(req,res)
{
    pool.query("UPDATE items SET names = $1, descriptions = $2 WHERE id = $3",[req.body.companyname, req.body.contactname, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updatePurchaseOrders(req,res)
{
    pool.query("UPDATE purchased_orders SET users_id = $1, manufacturers_id = $2, date_ordered = $3, date_received = $4 WHERE id = $5",[req.body.usersId, req.body.manufacturersId,req.body.dateOrdered, req.body.dateReceived, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(202).send();
        }
    }) 
}

function updateSaleOrders(req,res)
{
    pool.query("UPDATE sale_orders SET users_id = $1, customers_id = $2, date_ordered = $3, date_received = $4 WHERE id = $5",[req.body.usersId, req.body.customersId,req.body.dateOrdered, req.body.dateReceived, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
        }
        else{
            res.status(202).send();
        }
    }) 
}



exports.getUsers = getUsers;
exports.getManufacturers = getManufacturers;
exports.getCustomers = getCustomers;
exports.getItems = getItems;
exports.getPurchaseOrders = getPurchaseOrders;
exports.getSalesOrders = getSalesOrders;
exports.getManufacturerById = getManufacturerById;
exports.getUsersById = getUsersById;
exports.getCustomerById = getCustomerById;
exports.getPurchaseOrderById= getPurchaseOrderById;
exports.getSaleOrdersById = getSaleOrdersById;
exports.createNewUser = createNewUser;
exports.createNewCustomer =createNewCustomer;
exports.createNewItems = createNewItems;
exports.createNewManufacturer = createNewManufacturer;
exports.createNewSaleOrder = createNewSaleOrder;
exports.createNewPurchaseOrder = createNewPurchaseOrder;
exports.deleteCustomers = deleteCustomers;
exports.deleteItems = deleteItems;
exports.deleteManufacturer = deleteManufacturer;
exports.deletePurchasedOrders = deletePurchasedOrders;
exports.deleteSaleOrders = deleteSaleOrders;
exports.deleteUser = deleteUser;
exports.getItemById = getItemById;
exports.updateUser = updateUser;
exports.updateCustomer = updateCustomer;
exports.updateItems = updateItems;
exports.updateManufacturer =updateManufacturer;
exports.updatePurchaseOrders = updatePurchaseOrders;
exports.updateSaleOrders = updateSaleOrders;
