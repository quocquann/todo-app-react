import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useContext, useRef } from "react";

import { TodosContext } from "../../context/TodosContext"

import style from "./Todo.module.css";



function Todo({ todo, index }) {



    const [todos, setTodos] = useContext(TodosContext)


    const inputContentRef = useRef();

    const classContent = clsx(style.content, {
        [style.completed]: todo.isCompleted
    })

    const delTodo = (index) => {
        let newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const mark = (index) => {
        const newTodo = todos[index];
        newTodo.isCompleted = newTodo.isCompleted ? false : true;
        const newTodos = [...todos];
        newTodos.splice(index, 1, newTodo);
        setTodos(newTodos);
    }

    const editTodo = (index, text) => {
        const newTodo = todos[index];
        newTodo.name = text;
        const newTodos = [...todos];
        newTodos.splice(index, 1, newTodo);
        setTodos(newTodos);
    }


    const handleSubmitEdit = (e) => {
        if (e.which === 13) {
            inputContentRef.current.blur();
        }
    }

    return (
        <div className={clsx(style.wrapper)}>
            <input type="checkbox" className={clsx(style.check)} checked={todo.isCompleted} onChange={() => mark(index)} />
            <input ref={inputContentRef} className={classContent} value={todo.name} onChange={(e) => editTodo(index, e.target.value)} onKeyDown={handleSubmitEdit} />
            <FontAwesomeIcon className={clsx(style.delBtn)} icon={faXmark} onClick={() => delTodo(index)} />
        </div>
    );
}

export default Todo;