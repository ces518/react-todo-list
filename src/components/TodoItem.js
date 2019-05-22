import React , { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {

    static defaultProps = {
        text: '',
        checked: false,
        id: '',
        color: '',
        onToggle: () => console.warn('onToogle is not defined'),
        onRemove: () => console.warn('onRemove is not defined')
    }


    // 최적화
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.checked !== nextProps.checked
    }

    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle. 실행 방지
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked ? ' checked' : ''}`} >
                    <div style={{ color }}>{ text }</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        );
    }
}

export default TodoItem