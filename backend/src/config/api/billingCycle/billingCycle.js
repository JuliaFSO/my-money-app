const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Credit value is required.'] }
})

const debtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: [true, 'Debt value is required.'] },
  status: { type: String, required: false, uppercase: true,
    enum: ['PAID', 'PENDING', 'SCHEDULED'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: [true, 'Month is required.'] },
  year: { type: Number, min: 1970, max: 2100, required: [true, 'Year is required.'] },
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
