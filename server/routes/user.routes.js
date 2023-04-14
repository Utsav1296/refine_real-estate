import express from "express";
//Importing controllers (functional logic between client request and servers request b/w the url end-point)
import { createUser, getAllUsers, getUserInfoByID } from '../controllers/user.controller.js'

const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').get(getUserInfoByID)

export default router;