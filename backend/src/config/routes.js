const express = require('express')

module.exports = function(server) {
  // API Routes
  const router = express.Router()
  server.use('/api', router)

  // BILLING-CYCLE Routes
  const BillingCycle = require('./api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}
