const Investment = require('./models/investmentModel')


const totVal = async (name, transactionTotal) => {
    const result = await Investment.find({
        name
    })

        const totalVal = result.reduce((partialSum, el) => partialSum + el.transactionTotal, 0) + transactionTotal
        return Math.round((transactionTotal / totalVal) * 1e6) / 1e6

}

module.exports = {
    totVal
}
