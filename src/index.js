const chalk = require('chalk')

const express = require('express')

require('./db/mongoose.js')

const userRouter = require('./routers/user')
const TaskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(TaskRouter)

app.listen(port, () => {
    console.log(chalk.green.bgWhite.inverse('Server is up on port ' + port))
})
