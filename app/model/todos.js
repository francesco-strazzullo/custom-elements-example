const freeze = toFreeze => Object.freeze([...toFreeze])

export const todosFactory = (initialTodos = []) => {
  let connectors = []
  const todos = initialTodos

  const connect = cb => {
    connectors.push(cb)
    cb(freeze(todos))

    return () => {
      connectors = connectors.filter(connector => connector !== cb)
    }
  }

  const notify = () => {
    connectors.forEach(c => c(freeze(todos)))
  }

  const add = text => {
    todos.push({text})
    notify()
  }

  const deleteTodo = index => {
    todos.splice(index, 1)
    notify()
  }

  return {
    add,
    delete: deleteTodo,
    connect
  }
}

export default todosFactory()
