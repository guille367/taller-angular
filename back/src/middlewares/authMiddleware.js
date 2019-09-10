const jsonwebtoken = require('jsonwebtoken')
const secrets = require('../utils/secrets')
const Redis = require('../utils/redis')

const isAuth = (req, res, next) => {
    try {
        const jwt = req.headers.authorization
        if (req.method === "OPTIONS")
            next()
        if (!jwt) {
            throw new Error('Not logged in')
        }
        const payload = jsonwebtoken.verify(jwt, secrets.jwt)
        req.token = payload
    } catch (err) {
        return next(err)
    }
    next()
}

const singleSignOn = async (req, res, next) => {
    if (req.method === "OPTIONS")
        next()
    const jwt = req.headers.authorization
    const userCache = await Redis.get(req.token.username)
    if (!userCache || userCache.jwt !== jwt) {
        next(new Error('expired by single sign-on'))
    }
    next()
}


module.exports = {
    isAuth,
    singleSignOn,
}
