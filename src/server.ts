import express, { request, response } from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.status(200).json({
        message:'Iniciando projeto OmegaCom !'
    })
})

app.listen(3333)