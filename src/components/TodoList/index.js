
import Todo from "../Todo";
import { TodosContext } from '../../context/TodosContext';
import { StateContext } from '../../context/StateContext';
import { useContext } from "react";

function TodoList() {

    const [todos] = useContext(TodosContext)
    const [state] = useContext(StateContext)



    const render = () => {
        if (state === 'all') {
            return todos.map((todo, index) => (<Todo key={index} todo={todo} index={index} />))
        } else if (state === 'active') {
            return todos.map((todo, index) => !todo.isCompleted ? (<Todo key={index} todo={todo} index={index} />) : null)
        } else {
            return todos.map((todo, index) => todo.isCompleted ? (<Todo key={index} todo={todo} index={index} />) : null)
        }
    }



    return (
        <div>
            {render()}
        </div>
    );
}

export default TodoList;