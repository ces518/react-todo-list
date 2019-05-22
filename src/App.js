import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'

class App extends Component {

    id = 3

    state = {
        input: '',
        todos: [
            { id: 0, text: '리액트', checked: false},
            { id: 1, text: 'Todo-List', checked: false},
            { id: 2, text: 'Tutorial', checked: false}
        ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    // 전달받은 데이터로 생성
    // push 는 절대 사용하지말것.
    // 랜더링 최적화시 할 수없다.
    // concat은 새배열을 만드므로 괜찮음.
    handleCreate = () => {
        const { input, todos } = this.state

        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        })
    }

    // 누른키가 엔터일경우 handleCreate 호출
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate()
        }
    }

    render() {
        const { input, todos } = this.state
        const {
            handleCreate,
            handleChange,
            handleKeyPress
        } = this

        return (
            <TodoListTemplate form={
                (<Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />)
            }>
                <TodoItemList todos={todos}/>
            </TodoListTemplate>
        )
    }
}

export default App;
