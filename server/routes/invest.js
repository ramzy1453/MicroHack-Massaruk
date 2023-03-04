const express = require('express')
const {createInvest, getAllInvests, getSingleInvest, updateInvest, deleteInvest} = require('../controllers/invest')

const {isAuth, isAdmin} = require('../middleware')

const router = express.Router()

router.post('/',isAuth,createInvest)
router.get('/',isAdmin,getAllInvests)
router.get('/:id',isAdmin,getSingleInvest)
router.patch('/:id',isAdmin,updateInvest)
router.delete('/:id',isAdmin,deleteInvest)

module.exports = router