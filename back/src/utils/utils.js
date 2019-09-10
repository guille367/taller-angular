const crypto = require('crypto');
// generates random string of characters i.e salt
const genRandomString = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length)
}

// hash password with sha256
const sha256 = (password, salt) => {
    const hash = crypto.createHmac('sha256', salt)
    hash.update(password)
    return {
        salt,
        passwordHash: hash.digest('hex')
    }
}

module.exports = {
    genRandomString,
    sha256,
}