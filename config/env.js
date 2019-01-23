config = {
    database: {
        name: 'mongodb://gyanmitra19:GyanMitra19@192.168.16.14:27017/gyanmitra19'
        //name: 'mongodb://gyanmitra19:gyanmitra19@ds241664.mlab.com:41664/gyanmitra19'
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