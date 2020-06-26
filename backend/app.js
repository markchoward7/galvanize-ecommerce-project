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

app.get('/', (req, res) => {
    res.send("It works")
})
app.get('/users', (req, res) => {
    queries.getUsers(req,res);
})
app.post('/users', (req,res) =>{
    queries.createNewUser(req,res);
})
app.get('/manufacturers', (req, res) => {
    queries.getManufacturers(req,res);
})
app.post('/manufacturers', (req,res) =>{
    queries.createNewManufacturer(req,res);
})
app.get('/customers', (req, res) => {
    queries.getCustomers(req,res);
})
app.post('/customers', (req,res) =>{
    queries.createNewCustomer(req,res);
})
app.get('/items', (req, res) => {
    queries.getItems(req,res);
})
app.post('/items', (req,res) =>{
    queries.createNewItems(req,res);
})
app.get('/purchase-orders', (req, res) => {
    queries.getPurchaseOrders(req,res);
})
app.post('/purchase-orders', (req,res) =>{
    queries.createNewPurchaseOrder(req,res);
})
app.get('/sale-orders', (req, res) => {
    queries.getSalesOrders(req,res);
})
app.post('/sale-orders', (req,res) =>{
    queries.createNewSaleOrder(req,res);
})
app.get('/user/:id', (req, res) => {
    queries.getUsersById(req,res);
})
app.delete('/user/:id', (req, res)=>
{
    queries.deleteUser(req,res);
})
app.put('/user/:id', (req, res)=>
{
    queries.updateUser(req,res);
})

app.get('/manufacturer/:id', (req, res) => {
    queries.getManufacturerById(req,res);
})
app.delete('/manufacturer/:id', (req, res)=>
{
    queries.deleteManufacturer(req,res);
})
app.put('/manufacturer/:id', (req, res)=>
{
    queries.updateManufacturer(req,res);
})

app.get('/customer/:id', (req, res) => {
    queries.getCustomerById(req,res);
})
app.delete('/customer/:id', (req, res)=>
{
    queries.deleteCustomers(req,res);
})
app.put('/customer/:id', (req, res)=>
{
    queries.updateCustomer(req,res);
})

app.get('/sale-order/:id', (req, res) => {
    queries.getSaleOrdersById(req,res);
})
app.delete('/sale-order/:id', (req, res)=>
{
    queries.deleteSaleOrders(req,res);
})
app.put('/sale-order/:id', (req, res)=>
{
    queries.updateSaleOrders(req,res);
})

app.get('/purchase-order/:id', (req, res) => {
    queries.getPurchaseOrderById(req,res);
})
app.delete('/purchase-order/:id', (req, res)=>
{
    queries.deletePurchasedOrders(req,res);
})
app.put('/purchase-order/:id', (req, res)=>
{
    queries.updatePurchaseOrders(req,res);
})

app.get('/item/:id', (req,res) =>{
    queries.getItemById(req,res);
})
app.delete('/item/:id', (req, res)=>
{
    queries.deleteItems(req,res);
})
app.put('/item/:id', (req, res)=>
{
    queries.updateItems(req,res);
})



const port = 3000
app.listen(port, () => console.log('App listening'))