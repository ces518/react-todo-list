import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import Palette from './components/Palette'

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

    id = 3

    state = {
        input: '',
        todos: [
            { id: 0, text: '리액트', checked: false},
            { id: 1, text: 'Todo-List', checked: false},
            { id: 2, text: 'Tutorial', checked: false}
        ],
        color: '#343a40'
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
        const { input, todos, color } = this.state
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                color: color,
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

    // 체크 Toggle함수
    handleToggle = (id) => {
        const { todos } = this.state

        // index 찾기
        const index = todos.findIndex(todo => todo.id === id)
        const selected = todos[index]

        const nextTodos = [...todos] // 배열복사

        // 기본값 복사 및 checked 값 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        }

        this.setState({
            todos: nextTodos
        })

        /*
         slice 함수를 활용한 구현
        this.setState({
          todos: [
            ...todos.slice(0, index),
            {
              ...selected,
              checked: !selected.checked
            },
            ...todos.slice(index + 1, todos.length)
          ]
        });

        * */
    }

    handleRemove = (id) => {
        const { todos } = this.state
        this.setState({
            todos: todos.filter( todo => todo.id !== id)
        })
    }


    handleSelect = (color) => {
        this.setState({
            color
        })
    }

    render() {
        const { input, todos, color } = this.state
        const {
            handleCreate,
            handleChange,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSelect
        } = this

        return (
            <TodoListTemplate
                form={
                    (<Form
                        value={input}
                        color={color}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />)
                }
                palette={
                    (<Palette
                        colors={colors}
                        selected={color}
                        onSelect={handleSelect}
                    />)
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        )
    }
}

export default App;
