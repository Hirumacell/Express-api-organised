import { getAllProducts, createProduct } from '../models/productModel.js';

export const getProducts = (req, res) => {
    getAllProducts((err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal server error');
        } else {
            res.send(rows);
        }
    });
};

export const addProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        res.status(400).send('Name and price are required');
    } else {
        createProduct(name, price, (err, id) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal server error');
            } else {
                res.status(201).send({ id });
            }
        });
    }
};