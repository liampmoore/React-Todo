import React from 'react';

class Todo extends React.Component {
    constructor() {
        super()
    }


    render() {
    return (<p onClick={() => {this.props.toggleItem(this.props.item.id)}} style={{textDecoration: this.props.item.completed ? 'line-through' : 'none'}}>{this.props.item.task}</p>)
    }
}


export default Todo;