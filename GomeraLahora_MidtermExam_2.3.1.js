const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = `
    SELECT p.payment_id, 
    CONCAT(c.first_name, ' ',c.last_name) AS "Customer Name", 
    CONCAT(s.first_name, ' ',s.last_name) AS "Staff Name"
    FROM payment AS "p"
    JOIN customer AS "c" ON p.customer_id = c.customer_id
    JOIN staff AS "s" ON p.staff_id = s.staff_id
`;

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
