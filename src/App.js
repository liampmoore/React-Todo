import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const initialData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoData: initialData
    }
  }

  toggleItem = (clickedId) => {
    const newTodoData = this.state.todoData.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      else {
        return item;
      }
    });

    this.setState({
      todoData: newTodoData
    })
  };


  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newItem]
    })
  }

  clearCompleted = () => {
    const clearedList = this.state.todoData.filter((item) => {
      return item.completed
    })

    this.setState({
      todoData: clearedList
    })

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem}/>
        <TodoForm addNewItem={this.addNewItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
