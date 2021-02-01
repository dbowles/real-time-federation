const Redis = require("ioredis");

require("./utils/streamTransformers");

const isDevelopment = process.env.NODE_ENV === 'development'

function getRedisHostAddress() {
    return isDevelopment ? "localhost" : process.env.REDIS_HOST_ADDRESS;
}

const redis = new Redis(process.env.REDIS_PORT, getRedisHostAddress());

module.exports = redis;
