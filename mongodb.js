var chalk = require('chalk')
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(chalk.red.bgWhite.inverse.bold('Unable to connect to database'))
    }

    console.log(chalk.green.bgWhite.inverse.bold('connected correctly!'))

    // const db = client.db(databaseName)

    

})