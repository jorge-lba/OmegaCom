import express from 'express'

import ItemsController from '@controllers/ItemsController'

const routes = express.Router()

routes.get('/items', ItemsController.index)
routes.get('/items/:id', ItemsController.show)
routes.post('/items', ItemsController.create)
routes.put('/items/:id', ItemsController.update)
routes.delete('/items/:id', ItemsController.delete)

export default routes
