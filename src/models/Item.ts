import mongoose from '../database/index'

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
