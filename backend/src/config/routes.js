const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  protectedApi.use(auth)

  const BillingCycle = require('./api/billingCycle/billingCycleService')
  BillingCycle.register(protectedApi, '/billingCycles')

  const openApi = express.Router()
  server.use('/oapi', openApi)

  const authService = require('./api/user/authService')
  openApi.post('/login', authService.login)
  openApi.post('/signup', authService.signup)
  openApi.post('/validateToken', authService.validateToken)
}
