import { Router } from 'express';

import productCtrl from './product.controller';

// inicialization
const router = Router();

// products routes
router.post('/', productCtrl.createNewProduct);
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getProductById);
router.get('/category/:category', productCtrl.getProductByCategory);
router.put('/:id', productCtrl.editProductById);
router.delete('/:id', productCtrl.deleteProductById);

export default router;