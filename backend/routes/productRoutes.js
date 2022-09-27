import express from 'express'
const router = express.Router()
import {deleteProduct, getProducts, getProductsById, createProduct, updateProduct, createProductReview, getTopProducts} from '../controllers/productController.js'
import {protect, admin} from '../middleware/authMiddleware.js'

// @description    Fetch all products
router.route('/').get(getProducts).post(protect,admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

router.route('/:id')
.get(getProductsById)
.delete(protect, admin, deleteProduct)
.put(protect, admin, updateProduct,createProduct )


export default router