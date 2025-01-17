'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"api"'
  // BASE_API: '"https://ihrm-java.itheima.net/api/sys/login"'
})
