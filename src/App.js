import logo from './logo.svg'
import './App.css'

import EmptyInput from './components/emptyInput'
import Input from './components/input'
import TodoItem from './components/todoItem'
import CheckedTodoItem from './components/checkedTodoItem'
import TodosList from './components/todosList'

import { types, getSnapshot } from 'mobx-state-tree'
import { values } from 'mobx'

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false)
  })
  .actions(self => ({
    setName (newName) {
      self.name = newName
    },

    toggle () {
      self.done = !self.done
    }
  }))

const Store = types
  .model({
    todos: types.map(Todo)
  })
  .views(self => ({
    get pendingCount () {
      return values(self.todos).filter(todo => !todo.done).length
    },
    get completedCount () {
      return values(self.todos).filter(todo => todo.done).length
    }
  }))
  .actions(self => ({
    addTodo (id, name) {
      self.todos.set(id, Todo.create({ name }))
    }
  }))

const store = Store.create({
  todos: {
    1: {
      name: 'Eat a cake',
      done: true
    },
    2: {
      name: 'Eat a pie',
      done: false
    }
  }
})

function App (props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          todos
        </p>
        <Input />
        <TodosList {...store}>
          {/* <button onClick={e => props.store.addTodo(1, 'New Task')}>Add Task</button> */}
          <TodoItem name='todo-item' />
          <CheckedTodoItem name='checked todo-item' />
          <TodoItem name='todo-item' />
        </TodosList>
      </header>
    </div>
  )
}

export default App
