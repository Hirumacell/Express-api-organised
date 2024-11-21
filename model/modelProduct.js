import db from '../db/database.js';

export const getAllProducts = (callback) => {
    db.all('SELECT name, price FROM products', callback);
};

export const createProduct = (name, price, callback) => {
    const sql = 'INSERT INTO products(name, price) VALUES (?, ?)';
    db.run(sql, [name, price], function(err) {
        callback(err, this.lastID);
    });
};