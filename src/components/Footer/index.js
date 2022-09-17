
import clsx from "clsx"
import style from "./Footer.module.css"

import { TodosContext } from '../../context/TodosContext'
import { StateContext } from '../../context/StateContext'
import { useContext, useMemo } from "react"


function Footer() {

    const [todos, setTodos] = useContext(TodosContext);

    const [state, setState] = useContext(StateContext)



    let itemLeft = useMemo(() => {
        const result = todos.reduce((count, todo) => {
            if (!todo.isCompleted) {
                count++;
            }
            return count;
        }, 0)
        return result
    }, [todos])

    const allBtnStyle = clsx(style.allBtn, {
        [style.active]: state === 'all' ? true : false
    })

    const activeBtnStyle = clsx(style.activeBtn, {
        [style.active]: state === 'active' ? true : false
    })

    const completedBtnStyle = clsx(style.completedBtn, {
        [style.active]: state === 'completed' ? true : false
    })


    const setStateAll = () => {
        setState('all');
    }
    const setStateActive = () => {
        setState('active');
    }
    const setStateCompleted = () => {
        setState('completed');
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.isCompleted));
    }



    return (
        <div className={clsx(style.wrapper)}>
            <p>{itemLeft} items active</p>
            <div className={clsx(style.state)}>
                <button
                    className={allBtnStyle}
                    onClick={setStateAll}
                >All</button>
                <button
                    className={activeBtnStyle}
                    onClick={setStateActive}
                >Active</button>
                <button
                    className={completedBtnStyle}
                    onClick={setStateCompleted}
                >Completed</button>
            </div>
            <button className={clsx(style.delBtn)} onClick={clearCompleted}>Clear cpmpleted</button>
        </div>
    );
}

export default Footer;