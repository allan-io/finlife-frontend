const Investment = require('../models/investmentModel')
const mongoose = require('mongoose')
const {totVal} = require('../helperFunctions')

const getInvestments = async (req, res) => {

    try {
        const investments = await Investment.find({}).sort({createdAt: 1})
        res.status(200).json(investments)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getInvestment = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'Investment not found'})
    }

    try {
        const investment = await Investment.findById(id)

        if (!investment) {
            return res.status(404).json({error: 'investment not found'})
        }

        res.status(200).json(investment)
    } catch (error) {

    }
}

const createInvestment = async (req, res) => {
    let {
            name,
            type,
            action,
            ticker,
            broker,
            stockPrice,
            transactionTotal,
            sharesPurchased,
            isNegative,
            divident
         } = req.body

    const newFraction = await totVal(name, transactionTotal)

    try {
        const investment = await Investment.create({
            name,
            type,
            action,
            ticker,
            broker,
            stockPrice,
            transactionTotal,
            sharesPurchased,
            fraction:newFraction,
            isNegative,
            divident
        })
        res.status(200).json(investment)
    } catch (error) {
        res.status(400).json({ error:error.message })
    }
}

const deleteInvestment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"investment not found"})
    }

    const investment = await Investment.findByIdAndDelete(id)

    if (!investment) {
        return res.status(404).json({error: 'investment not found'})
    }

    res.status(200).json(investment)
}

const updateInvestment = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"investment not found"})
    }

    const investment = await Investment.findByIdAndUpdate(id, {
        ...req.body
    })

    if (!investment) {
        return res.status(404).json({error: 'investment not found'})
    }

    res.status(200).json(investment)
}

module.exports = {
    createInvestment,
    getInvestments,
    getInvestment,
    deleteInvestment,
    updateInvestment
}
