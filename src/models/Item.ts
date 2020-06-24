import mongoose from '../database/index'

export type TypeItem = {
  id:number
  input: [{
    unitaryValue: number,
    amount: number,
    date?: Date,
    provider: {
      name: string,
      id: string
    }
  }],
  output: [{
    amount: number,
    date?: Date
  }],
  total: [{
    amount: number,
    date?: Date
  }],
  model: string,
  state: boolean
}

const ItemSchema = new mongoose.Schema({
  _id: { type: Number, default: 1 },
  input: [{
    _id: false,
    unitaryValue: Number,
    amount: Number,
    date: { type: Date, default: new Date() },
    provider: {
      name: String,
      id: String
    }
  }],
  output: [{
    _id: false,
    amount: Number,
    date: { type: Date, default: new Date() }
  }],
  total: [{
    _id: false,
    amount: Number,
    date: { type: Date, default: new Date() }
  }, { _id: false }],
  model: String,
  state: { type: Boolean, default: true }
}, { _id: false })

const Item = mongoose.model('Item', ItemSchema)

export default Item
