const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = `SELECT * FROM midterm_list_of_films;`;

// use the pool's query method
pool.query(sql, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows);
    }
});

// end the database connection
pool.end();
