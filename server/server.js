const express = require('express')
const path = require('path')

const port = process.env.PORT || 3001

const publicPath = path.join(__dirname, '../client/build')
console.log(publicPath);



const app = express()

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})


app.listen( port, () => {
    console.log('Running on port 3001');
    
})