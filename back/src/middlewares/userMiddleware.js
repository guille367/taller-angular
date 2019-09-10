const { check, validationResult } = require('express-validator/check');
const utils = require('../utils/utils')
const genRandomString = utils.genRandomString
const sha256 = utils.sha256

const createUserValidations = () => {
    return [
        [
            check('username')
                .isAlphanumeric(),
            check('password')
                .isLength({ min: 10 })
                .isAlphanumeric()
        ],
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                next(errors.array());
            } else {
                next()
            }
        }
    ]
}

const hashPassword = (req, res, next) => {
    const password = req.body.password
    const { salt, passwordHash } = sha256(password, genRandomString(16))
    req.body.password = passwordHash
    req.body.salt = salt
    next()
}

module.exports = {
    createUserValidations,
    hashPassword,
}
