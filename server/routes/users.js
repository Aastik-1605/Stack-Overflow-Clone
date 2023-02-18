import express from 'express'

import {login, signup} from '../controllers/auth.js'
import { fetchAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers', fetchAllUsers)
router.patch('/update/:id', auth, updateProfile)


export default router