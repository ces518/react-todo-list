import React , { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {

    static defaultProps = {
        text: '',
        checked: false,
        id: '',
        onToggle: () => console.warn('onToogle is not defined'),
        onRemove: () => console.warn('onRemove is not defined')
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle. 실행 방지
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked ? ' checked' : ''}`} >
                    <div>{ text }</div>
                </div>
            </div>
        );
    }
}

export default TodoItem