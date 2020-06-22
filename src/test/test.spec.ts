import { Item } from '@models/Item'

test('it should ok', () => {
  const item = new Item()

  item.model = 'LM358'
  item.type = 'Eletronic'

  expect(item.model).toEqual('LM358')
})
