import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoItemList extends Component {

    render() {
        const { todos, onToggle, onRemove } = this.props
        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    key={id}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )
        )
        return (
            <div>
                { todoList }
            </div>
        )
    }
}

export default TodoItemList