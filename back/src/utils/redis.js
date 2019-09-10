const redis = require('redis')
const { promisify } = require('util');

let client
let getAsync

class Redis {
    static connect(options) {
        client = redis.createClient(options)
        getAsync = promisify(client.get).bind(client);
    }

    static set(key, value) {
        client.set(key, JSON.stringify(value))
    }

    static async get(key) {
        const strValue = await getAsync(key)
        return JSON.parse(strValue)
    }

    static remove(key) {
        client.del(key)
    }

}

module.exports = Redis
