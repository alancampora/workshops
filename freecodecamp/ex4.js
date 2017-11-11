const getShortMessages = messages =>
    messages
    .filter(oMessage => oMessage.message.length <= 50)
    .map(oMessage => oMessage.message)

module.exports = getShortMessages
