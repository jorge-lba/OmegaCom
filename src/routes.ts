import express from 'express'

import ItemsController from '@controllers/ItemsController'

const routes = express.Router()

routes.get('/items', ItemsController.index)
routes.post('/items', ItemsController.create)

export default routes
