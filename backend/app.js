const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const queries = require('./queries')


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/api', (req, res) => {
    console.log(req.headers.host)
    res.send("It's alive!")
})

app.get('/api/users', (req, res) => {
    queries.getUsers(req,res);
})
app.post('/api/users', (req,res) =>{
    queries.createNewUser(req,res);
})

app.get('/api/manufacturers', (req, res) => {
    queries.getManufacturers(req,res);
})
app.post('/api/manufacturers', (req,res) =>{
    queries.createNewManufacturer(req,res);
})

app.get('/api/customers', (req, res) => {
    queries.getCustomers(req,res);
})
app.post('/api/customers', (req,res) =>{
    queries.createNewCustomer(req,res);
})

app.get('/api/items', (req, res) => {
    queries.getItems(req,res);
})
app.post('/api/items', (req,res) =>{
    queries.createNewItem(req,res);
})

app.get('/api/purchase-orders', (req, res) => {
    queries.getPurchaseOrders(req,res);
})
app.post('/api/purchase-orders', (req,res) =>{
    queries.createNewPurchaseOrder(req,res);
})

app.get('/api/sale-orders', (req, res) => {
    queries.getSalesOrders(req,res);
})
app.post('/api/sale-orders', (req,res) =>{
    queries.createNewSaleOrder(req,res);
})

app.get('/api/user/:id', (req, res) => {
    queries.getUserById(req,res);
})
app.delete('/api/user/:id', (req, res)=>
{
    queries.deleteUser(req,res);
})
app.put('/api/user/:id', (req, res)=>
{
    queries.updateUser(req,res);
})

app.get('/api/manufacturer/:id', (req, res) => {
    queries.getManufacturerById(req,res);
})
app.delete('/api/manufacturer/:id', (req, res)=>
{
    queries.deleteManufacturer(req,res);
})
app.put('/api/manufacturer/:id', (req, res)=>
{
    queries.updateManufacturer(req,res);
})
app.post('/api/manufacturer/:id', (req,res) =>
{
    queries.addItemToManufacturer(req,res);
})

app.get('/api/customer/:id', (req, res) => {
    queries.getCustomerById(req,res);
})
app.delete('/api/customer/:id', (req, res)=>
{
    queries.deleteCustomer(req,res);
})
app.put('/api/customer/:id', (req, res)=>
{
    queries.updateCustomer(req,res);
})

app.get('/api/sale-order/:id', (req, res) => {
    queries.getSaleOrderById(req,res);
})
app.delete('/api/sale-order/:id', (req, res)=>
{
    queries.deleteSaleOrder(req,res);
})
app.put('/api/sale-order/:id', (req, res)=>
{
    queries.updateSaleOrder(req,res);
})
app.post('/api/sale-order/:id', (req, res) => {
    queries.addItemToSaleOrder(req, res);
})

app.get('/api/purchase-order/:id', (req, res) => {
    queries.getPurchaseOrderById(req,res);
})
app.delete('/api/purchase-order/:id', (req, res)=>
{
    queries.deletePurchaseOrder(req,res);
})
app.put('/api/purchase-order/:id', (req, res)=>
{
    queries.updatePurchaseOrder(req,res);
})
app.post('/api/purchase-order/:id', (req, res) => {
    queries.addItemToPurchaseOrder(req, res);
})

app.get('/api/item/:id', (req,res) =>{
    queries.getItemById(req,res);
})
app.delete('/api/item/:id', (req, res)=>
{
    queries.deleteItem(req,res);
})
app.put('/api/item/:id', (req, res)=>
{
    queries.updateItem(req,res);
})



const port = 3001
app.listen(port, () => console.log('App listening'))