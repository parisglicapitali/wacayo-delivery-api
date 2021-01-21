import { Router } from 'express';
import orderController from './order.controller';

// inicialization
const router = Router();

// routes
router.post('/:productId', orderController.createNewOrder);
router.get('/:id', orderController.getOrderById);
router.delete('/:id', orderController.deleteOrderById);

export default router;