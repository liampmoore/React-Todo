import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super()
    }



    render() {
        return (
          <div>
              {this.props.todoData.map((item) => (<Todo key={item.id} item={item} toggleItem={this.props.toggleItem}/>))}
          </div>
        )
    }
}

export default TodoList