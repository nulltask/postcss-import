var rp = require("request-promise")
var isRemote = require("./is-remote")

module.exports = function(location) {
  return rp(location)
}
