import { todosFactory } from './todos'

test('listeners should be invoked immediatly', () => {
  let counter = 0
  todosFactory().connect(() => {
    counter++
  })
  expect(counter).toBe(1)
})

test('listeners should be invoked when adding data', () => {
  let result
  const todos = todosFactory()

  todos.connect(data => {
    result = data
  })

  todos.add('Buy Milk')
  expect(result).toEqual(['Buy Milk'])
})

test('listeners should be invoked when removing data', () => {
  let result
  const todos = todosFactory([{text: 'Buy Milk'}])

  todos.connect(data => {
    result = data
  })

  todos.delete(0)
  expect(result).toEqual([])
})

test('listeners should be removed when unsubscribing', () => {
  let result
  const todos = todosFactory()

  const unsubscribe = todos.connect(data => {
    result = data
  })

  unsubscribe()

  todos.add('Buy Milk')
  expect(result).toEqual([])
})

test('todos should be immutable', () => {
  const todos = todosFactory()

  todos.connect(data => {
    expect(() => {
      data.foo = 'bar'
    }).toThrow()
  })
})
