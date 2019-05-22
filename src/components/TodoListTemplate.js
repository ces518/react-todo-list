import React from 'react'
import './TodoListTemplate.css'

// 함수형 컴포넌트 선언
// 비구조화 할당으로 파라메터를 할당받음
// (props) => { .. } 을 ({form, children}) => { .. } 형태로 ..
// children 은 태그사이의 내용들 을 받는다.
// <TodoListTemplate> 여기 내용 들 ..</TodoListTemplate>
// form 은 컴포넌트 랜더링시 사용하는데 jsx형태로 전달받는다.
// <TodoListTemplate form=(<div>폼자리</div>) > 칠드런자리 ..</TodoListTemplate>
const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할일
            </div>
            <section className="form-wrapper">
                { form }
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    )
}

export default TodoListTemplate