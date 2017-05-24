module.exports = HelloWorld

function HelloWorld (input, callback) {
  if (!input) {
    var err = 'There is no input'
    callback(err)
    return
  }
  callback(null, input)
  return
}
