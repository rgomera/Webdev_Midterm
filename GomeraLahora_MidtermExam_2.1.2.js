const pool = require('./db'); // load/import the pool libraries that was written on other file

const sql = `
    SELECT rating, SUM(length) as "sum"
    FROM public.film
    GROUP BY rating
    ORDER BY rating`;

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
