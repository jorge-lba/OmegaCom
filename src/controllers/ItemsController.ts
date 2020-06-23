import { Request, Response } from 'express'
import Item from '@models/Item'

export default {
  async create (request: Request, response: Response) {
    try {
      const {
        model,
        amount,
        providerName,
        providerId,
        unitaryValue
      } = request.body

      const counter = await Item.find()

      const item = await Item.create({
        id: counter.length,
        model,
        input: {
          unitaryValue,
          amount,
          provider: {
            name: providerName,
            id: providerId
          }
        },
        total: amount
      })

      return response.status(201).json({ message: 'OK', item })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
