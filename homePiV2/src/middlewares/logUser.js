const fs  = require('fs');

function logUser (req, res, next) {
    fs.appendFileSync('userLog.txt', 'Foi criado um registro pela url: ' + req.url )
    next();
};

module.exports = logUser;