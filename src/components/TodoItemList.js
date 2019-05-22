import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoItemList extends Component {

    // 최적화
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos
    }

    render() {
        const { todos, onToggle, onRemove } = this.props
        const todoList = todos.map(
            ({id, text, color, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    color={color}
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