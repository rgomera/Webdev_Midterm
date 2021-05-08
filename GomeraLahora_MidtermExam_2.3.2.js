const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = `
    SELECT CONCAT(s.first_name, ' ',s.last_name) AS "Staff Name",
    a.address AS "Adress", cy.city AS "City"
    FROM staff AS "s"
    JOIN address AS "a" ON s.address_id = a.address_id
    JOIN city AS "cy" on a.city_id = cy.city_id
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
