import { getAllProducts, createProduct } from '../model/modelProduct.js';

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

export const getProductById = (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).send('ID is required');
    } else {
        getProductById(id, (err, rows) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal server error');
            } else {
                res.send(rows);
            }
        });
    }
};

export const updateProduct = (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;
    if (!id || !name || !price) {
        res.status(400).send('ID, name and price are required');
    } else {
        updateProduct(id, name, price, (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal server error');
            } else {
                res.status(204).send();
            }
        });
    }
};