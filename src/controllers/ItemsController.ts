import { Request, Response } from 'express'
import Item, { TypeItem } from '@models/Item'

export default {

  async index (request: Request, response: Response) {
    try {
      const items = await Item.find()
      return response.status(200).json({ message: 'OK', items })
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async show (request: Request, response: Response) {
    try {
      const { id } = request.params
      const item = await Item.findById(id)
      return response.status(200).json({ message: 'ok', item })
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
        total: { amount }
      })

      return response.status(201).json({ message: 'OK', item })
    } catch (error) {
      return response.status(400).json(error)
    }
  },

  async update (request: Request, response: Response) {
    try {
      const { id } = request.params
      const { input, output } = request.body
      const item: TypeItem = (await Item.findById(id)).toObject()

      if (input.amount) {
        const { amount, unitaryValue, provider } = input

        item.input.push({
          amount,
          unitaryValue,
          provider
        })
      }

      if (output.amount) {
        const { amount } = output

        item.output.push({
          amount
        })
      }

      const inputTotal = item.input.reduce((previus, current) => previus + current.amount, 0)
      const outputTotal = item.output.reduce((previus, current) => previus + current.amount, 0)

      const total = inputTotal - outputTotal

      item.total.push({ amount: total })

      const itemUpdate = await Item.findByIdAndUpdate(id, item, { new: true })

      return response.status(200).json({ message: 'ok', item: itemUpdate })
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}
