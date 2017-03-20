global.appconfig = {
    name: 'plugin.theme',
    listen: 9599,
    db: {
        url: 'mongodb://localhost:27017/theme'
    },
    services: {
        manager: 'http://localhost:9599',
        auth: 'http://localhost:9600',
        mail: 'http://localhost:9602',
        log: 'http://localhost:9603'
    },
    app: {
        encrypt: ')^!!!(**'
    }
};