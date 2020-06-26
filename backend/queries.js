const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    database: 'database_name',
    host: 'db',
    port: 5432,
})

pool.query("SELECT * FROM table_name", (error, results) => {
    if (error) {
        console.log(error)
    } else {
        console.log(results.rows)
    }
})

function getUsers(req,res)
{
    pool.query("SELECT * FROM users_table", (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.send(results.rows)
        }
    })
}

exports.getUsers = getUsers;