config = {
    database: {
        name: 'mongodb://localhost:27017/GyanMitra19'
    },
    application: {
        secret: 'secret',
        env: 'development'
    },
    pagination: {
        perPage: 10
    }
}

module.exports = config;