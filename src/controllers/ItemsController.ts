import { Request, Response } from 'express'
import Item from '@models/Item'

export default {
  async index (request: Request, response: Response) {
    try {
      const items = await Item.find()
      return response.status(200).json({ message: 'OK', items })
    } catch (error) {
      return response.status(400).json(error)
    }
  },
  async create (request: Request, response: Response) {
    try {
      let lastIdItemRegistered:number = 0
      const {
        model,
        amount,
        providerName,
        providerId,
        unitaryValue
      } = request.body
      const items = await Item.find()

      if (items.length > 0) {
        lastIdItemRegistered = Number(items[items.length - 1].id)
      }

      const item = await Item.create({
        _id: lastIdItemRegistered + 1,
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
