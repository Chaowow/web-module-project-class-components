import React from 'react'
import Todo from './Todo';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: [
        {
          name: '',
          id: Date.now(),
          completed: false
        },
      ]
    };
  }

  handleToggle = (clickedId) => {

    this.setState({
      ...this.state,
      toDo: this.state.toDo.map(todo => {
        if(todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        
        return todo;
      })
    })
  }

  handleAdd = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      toDo: [...this.state.toDo, newTodo]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter(todo => !todo.completed)
    });
  }
  
  render() {
    const { toDo } = this.state;
    return (
      <div>
        <h2>TODOS</h2>
        <TodoList handleToggle={this.handleToggle} todos={toDo} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button> 
      </div>
    )
  }
}
