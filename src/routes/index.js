import express from 'express';

import productRoutes from '../apiServices/products/product.routes';
import orderRoutes from '../apiServices/orders/order.routes';

// inicialization
const app = express();

// routes
app.use('/product', productRoutes);
app.use('/order', orderRoutes);

export default app;