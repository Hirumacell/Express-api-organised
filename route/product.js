import express from 'express';
import { getProducts, addProduct } from '../controller/productController.js';

const app = express();
app.use(express.json());

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', addProduct);

app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default productsRouter;