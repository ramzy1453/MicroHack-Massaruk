const express = require('express')
const {getAllUsers, getSingleUser, updateUser, deleteUser} = require('../controllers/user')

const {isAuth,isAdmin} = require('../middleware')

const router = express.Router()

router.get('/',isAdmin,getAllUsers)
router.get('/:id',isAdmin,getSingleUser)
router.patch('/:id',isAuth,updateUser)
router.delete('/:id',isAuth,deleteUser)

module.exports = router