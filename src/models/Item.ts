import mongoose from '../database/index'

export type TypeItem = {
  id:number
  input: {
    unitaryValue: number,
    amount: number,
    date: Date,
    provider: {
      name: string,
      id: string
    }
  },
  output: {
    amount: number,
    date: Date
  },
  total: number,
  model: string
}

const ItemSchema = new mongoose.Schema({
  id: { type: Number, default: 0 },
  input: {
    unitaryValue: Number,
    amount: Number,
    date: { type: Date, default: new Date() },
    provider: {
      name: String,
      id: String
    }
  },
  output: {
    amount: Number,
    date: { type: Date, default: new Date() }
  },
  total: Number,
  model: String
}, { _id: false })

const Item = mongoose.model('Item', ItemSchema)

export default Item
