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
            res.status(400).send()
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
            res.status(400).send()
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
            res.status(400).send()
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
            res.status(400).send()
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
            res.status(400).send()
        } else {
            for(const row of results.rows)
            {
                row.user = `http://${req.headers.host}/user/${row.users_id}`;
                row.manufacturer = `http://${req.headers.host}/manufacturer/${row.manufacturers_id}`
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
            res.status(400).send()
        } else {
            for(const row of results.rows)
            {
                row.user = `http://${req.headers.host}/user/${row.users_id}`;
                row.customer = `http://${req.headers.host}/customer/${row.customers_id}`
            }
            res.send(results.rows)
        }
    })
}
function getManufacturerById(req,res)
{
    pool.query("SELECT * FROM manufacturers INNER JOIN (manufacturers_items INNER JOIN items ON items.id = manufacturers_items.item_id) ON manufacturers_items.manufacturer_id = manufacturers.id WHERE manufacturers.id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            let newObj = {...results.rows[0]}
            newObj.id = req.params.id
            delete newObj.item_id
            delete newObj.manufacturer_id
            delete newObj.qty
            delete newObj.names
            delete newObj.descriptions
            newObj.items = []
            for (const row of results.rows) {
                let newItem = {
                    item_id: row.item_id,
                    item: `http://${req.headers.host}/item/${row.item_id}`,
                    name: row.names,
                    description: row.descriptions,
                    qty: row.qty,
                }
                newObj.items.push(newItem)
            }
            res.send(newObj)
        
        }
    })
}
function getItemById(req,res)
{
    pool.query("SELECT * FROM items INNER JOIN (manufacturers_items INNER JOIN manufacturers ON manufacturers.id = manufacturers_items.manufacturer_id) ON manufacturers_items.item_id = items.id WHERE items.id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            let newObj = {...results.rows[0]}
            newObj.id = req.params.id
            delete newObj.item_id
            delete newObj.manufacturer_id
            delete newObj.company_name
            delete newObj.contact_name
            delete newObj.contact_email
            delete newObj.contact_phone
            newObj.manufacturers = []
            for (const row of results.rows) {
                let newItem = {
                    manufacturer_id: row.manufacturer_id,
                    manufacturer: `http://${req.headers.host}/manufacturer/${row.manufacturer_id}`,
                    company_name: row.company_name,
                    contact_name: row.contact_name,
                    contact_email: row.contact_email,
                    contact_phone: row.contact_phone,
                }
                newObj.manufacturers.push(newItem)
            }
            res.send(newObj)
        
        }
    })
}
function getUserById(req,res)
{
    pool.query("SELECT * FROM users WHERE id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
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
            res.status(400).send()
        } else {
            res.send(results.rows)
        }
    })
}
function getPurchaseOrderById(req,res)
{
    pool.query("SELECT * FROM purchased_orders INNER JOIN (purchase_order_items INNER JOIN items ON items.id = purchase_order_items.item_id) ON purchase_order_items.purchase_id = purchased_orders.id WHERE purchased_orders.id = $1 ", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            let newObj = {...results.rows[0]}
            newObj.id = req.params.id
            delete newObj.item_id
            delete newObj.purchase_id
            delete newObj.qty
            delete newObj.names
            delete newObj.descriptions
            newObj.user = `http://${req.headers.host}/user/${results.rows[0].users_id}`;
            newObj.manufacturer = `http://${req.headers.host}/manufacturer/${results.rows[0].manufacturers_id}`
            newObj.items = []
            for (const row of results.rows) {
                let newItem = {
                    item_id: row.item_id,
                    item: `http://${req.headers.host}/item/${row.item_id}`,
                    name: row.names,
                    description: row.descriptions,
                    qty: row.qty,
                }
                newObj.items.push(newItem)
            }
            res.send(newObj)
        
        }
    })
}
function getSaleOrderById(req,res)
{
    pool.query("SELECT * FROM sale_orders INNER JOIN (sale_order_items INNER JOIN items ON items.id = sale_order_items.item_id) ON sale_order_items.sale_id = sale_orders.id WHERE sale_orders.id = $1", [req.params.id], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            let newObj = {...results.rows[0]}
            newObj.id = req.params.id
            delete newObj.item_id
            delete newObj.sale_id
            delete newObj.qty
            delete newObj.names
            delete newObj.descriptions
            newObj.user = `http://${req.headers.host}/user/${results.rows[0].users_id}`;
            newObj.customer = `http://${req.headers.host}/customer/${results.rows[0].customers_id}`
            newObj.items = []
            for (const row of results.rows) {
                let newItem = {
                    item_id: row.item_id,
                    item: `http://${req.headers.host}/item/${row.item_id}`,
                    name: row.names,
                    description: row.descriptions,
                    qty: row.qty,
                }
                newObj.items.push(newItem)
            }
            res.send(newObj)
        
        }
    })
}
function createNewUser(req,res)
{
    pool.query("INSERT INTO users (first_name, last_name, email) VALUES ($1,$2,$3) ", [req.body.firstName, req.body.lastName, req.body.email], (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewManufacturer(req,res)
{
    pool.query("INSERT INTO manufacturers (company_name, contact_name, contact_email, contact_phone) VALUES ($1,$2,$3, $4) ", [req.body.companyName, req.body.contactName, req.body.contactEmail, req.body.contactPhone], (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewCustomer(req,res)
{
    pool.query("INSERT INTO customers (company_name, contact_name, contact_email, contact_phone) VALUES ($1,$2,$3, $4) ", [req.body.companyName, req.body.contactName, req.body.contactEmail, req.body.contactPhone], (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewItem(req,res)
{
    pool.query("INSERT INTO items (names, descriptions) VALUES ($1,$2) ", [req.body.names, req.body.descriptions], (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewPurchaseOrder(req,res)
{
    pool.query("INSERT INTO purchased_orders (users_id, manufacturers_id, date_ordered, date_received) VALUES ($1,$2,$3, $4) ", [req.body.userId, req.body.manufacturerId, req.body.dateOrdered, req.body.dateReceived], (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(201).send();
        }

    })
}
function createNewSaleOrder(req,res)
{
    pool.query("INSERT INTO sale_orders (users_id, customers_id, date_ordered, date_received) VALUES ($1,$2,$3, $4) ", [req.body.userId, req.body.customerId, req.body.dateOrdered, req.body.dateReceived], (error,results) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
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
            res.status(400).send()
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
            res.status(400).send()
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteCustomer(req,res)
{
    pool.query("DELETE FROM customers WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteItem(req,res)
{
    pool.query("DELETE FROM items WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(204).send();
        }
    })
}
function deletePurchaseOrder(req,res)
{
    pool.query("DELETE FROM purchased_orders WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(204).send();
        }
    })
}
function deleteSaleOrder(req,res)
{
    pool.query("DELETE FROM sale_orders WHERE id = $1", [req.params.id], (error, results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(204).send();
        }
    })
}

function updateUser(req,res)
{
    pool.query("UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4",[req.body.firstName, req.body.lastName, req.body.email, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updateManufacturer(req,res)
{
    pool.query("UPDATE manufacturers SET company_name = $1, contact_name = $2, contact_email = $3, contact_phone = $4 WHERE id = $5",[req.body.companyName, req.body.contactName, req.body.contactEmail, req.body.contactPhone, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updateCustomer(req,res)
{
    pool.query("UPDATE customers SET company_name = $1, contact_name = $2, contact_email = $3, contact_phone = $4 WHERE id = $5",[req.body.companyName, req.body.contactName, req.body.contactEmail, req.body.contactPhone, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updateItem(req,res)
{
    pool.query("UPDATE items SET names = $1, descriptions = $2 WHERE id = $3",[req.body.companyName, req.body.contactName, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}
function updatePurchaseOrder(req,res)
{
    pool.query("UPDATE purchased_orders SET users_id = $1, manufacturers_id = $2, date_ordered = $3, date_received = $4 WHERE id = $5",[req.body.userId, req.body.manufacturerId,req.body.dateOrdered, req.body.dateReceived, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}

function updateSaleOrder(req,res)
{
    pool.query("UPDATE sale_orders SET users_id = $1, customers_id = $2, date_ordered = $3, date_received = $4 WHERE id = $5",[req.body.userId, req.body.customerId,req.body.dateOrdered, req.body.dateReceived, req.params.id], (error,results) =>
    {
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else{
            res.status(202).send();
        }
    }) 
}

function addItemToPurchaseOrder(req, res)
{
    pool.query("INSERT INTO purchase_order_items (item_id, purchase_id, qty) VALUES ($1, $2, $3)", [req.body.itemId, req.params.id, req.body.qty], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.status(202).send()
        }
    })
}

function addItemToSaleOrder(req, res)
{
    pool.query("INSERT INTO sale_order_items (item_id, sale_id, qty) VALUES ($1, $2, $3)", [req.body.itemId, req.params.id, req.body.qty], (error, results) => {
        if (error) {
            console.log(error)
            res.status(400).send()
        } else {
            res.status(202).send()
        }
    })
}
function addItemToManufacturer(req,res)
{
    pool.query("INSERT INTO manufacturers_items(item_id, manufacturer_id) VALUES($1,$2)", [req.body.itemId, req.params.id], (error,result) =>{
        if(error)
        {
            console.log(error)
            res.status(400).send()
        }
        else
        {
            res.status(202).send()
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
exports.getUserById = getUserById;
exports.getCustomerById = getCustomerById;
exports.getPurchaseOrderById= getPurchaseOrderById;
exports.getSaleOrderById = getSaleOrderById;
exports.createNewUser = createNewUser;
exports.createNewCustomer =createNewCustomer;
exports.createNewItem = createNewItem;
exports.createNewManufacturer = createNewManufacturer;
exports.createNewSaleOrder = createNewSaleOrder;
exports.createNewPurchaseOrder = createNewPurchaseOrder;
exports.deleteCustomer = deleteCustomer;
exports.deleteItem = deleteItem;
exports.deleteManufacturer = deleteManufacturer;
exports.deletePurchaseOrder = deletePurchaseOrder;
exports.deleteSaleOrder = deleteSaleOrder;
exports.deleteUser = deleteUser;
exports.getItemById = getItemById;
exports.updateUser = updateUser;
exports.updateCustomer = updateCustomer;
exports.updateItem = updateItem;
exports.updateManufacturer =updateManufacturer;
exports.updatePurchaseOrder = updatePurchaseOrder;
exports.updateSaleOrder = updateSaleOrder;
exports.addItemToPurchaseOrder = addItemToPurchaseOrder;
exports.addItemToSaleOrder = addItemToSaleOrder;
exports.addItemToManufacturer = addItemToManufacturer;