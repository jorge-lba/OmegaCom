test('it should ok', () => {
  const item = { model: '', type: '' }

  item.model = 'LM358'
  item.type = 'Eletronic'

  expect(item.model).toEqual('LM358')
})
