
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState, useContext } from "react";
import { TodosContext } from '../../context/TodosContext'

import style from "./Header.module.css"

function Header() {

    const [todos, setTodos] = useContext(TodosContext);

    const [text, setText] = useState('');

    const handleInputChange = (e) => { setText(e.target.value) }

    const markAll = () => {
        let newTodos = [];
        if (todos.some(todo => !todo.isCompleted)) {
            newTodos = todos.map(todo => ({
                name: todo.name,
                isCompleted: true
            }))
        } else {
            newTodos = todos.map(todo => ({
                name: todo.name,
                isCompleted: false
            }))
        }
        setTodos(newTodos);
    }

    const addTodo = (e) => {
        if (e.which === 13 && text) {
            setTodos([{ name: text, isCompleted: false }, ...todos]);
            setText('');
        }
    }

    return (
        <div className={clsx(style.wrapper)}>
            <p className={clsx(style.title)}>TODOS</p>
            <div className={clsx(style.inputWrapper)}>
                <FontAwesomeIcon className={clsx(style.markAll)} icon={faAngleDown} onClick={markAll} />
                <input className={clsx(style.input)} value={text} placeholder="Enter your job" onChange={handleInputChange} onKeyDown={addTodo} />
            </div>
        </div>
    )
}

export default Header;