var helloWorld = require('./hello-world.js')

exports.handler = function (event, context, callback) {
  helloWorld('Hello, World', function (err, success) {
    if (err) {
      console.log('Error:' + err)
      return
    }
    context.succeed('We succeeded with: ' + success)
    return
  })
}
