const express = require('express')
const path = require('path')

const webapp = express();

webapp.use(express.urlencoded({
    extended: true
}))

webapp.use(express.json())

const PORT = 5000

webapp.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

webapp.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})