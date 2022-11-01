const express = require('express')
const {
    createInvestment,
    getInvestments,
    getInvestment,
    deleteInvestment,
    updateInvestment
} = require('../controllers/investmentController')

const router = express.Router()

router.get('/', getInvestments)

router.get('/:id', getInvestment)

router.post('/', createInvestment)

router.delete('/:id', deleteInvestment)

router.patch('/:id', updateInvestment)





module.exports = router
