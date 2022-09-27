import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, resgisterUser, updateUserProfile, getUsers, deleteUsers,
getUserById, updateUser
} from '../controllers/userController.js'
import {protect, admin} from '../middleware/authMiddleware.js'


// @description    Fetch all products
router.route('/').post(resgisterUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUsers).get(protect,admin, getUserById )
.put(protect, admin, updateUser)

export default router