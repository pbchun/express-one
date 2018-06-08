const express = require('express')
const cors = require('cors')
const data = require('./cohortData.json')
const port = process.env.PORT || 3000
const app = express()
app.use(cors())

function findById(id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === +id) {
            return data[i]
        }
    }
    return null
}

app.get('/', (request, response) => {
    response.json({ data })
})

app.get('/:id', (request, response) => {
    const item = findById(request.params.id)
    if (!item) {
        response.status(404).json({
            error: {
                message: 'Item not found'
            }
        })
        return
    }
    response.json({ data: item })
})

app.listen(port)


