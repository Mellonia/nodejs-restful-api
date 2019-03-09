const environments = {
    development: {
        mysql: {
            username: 'root',
            password: 'djaak6363',
            database: 'node_api_server_dev'
        }
    },
    test: {
        mysql: {
            username: 'root',
            password: 'djaak6363',
            database: 'node_api_server_test'
        }
    },
    production: {
        mysql: {
            username: 'root',
            password: 'djaak6363',
            database: 'node_api_server_prod'
        }
    }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environments[nodeEnv];