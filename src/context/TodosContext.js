import { createContext, useEffect, useState } from "react";


const TodosContext = createContext();

const TodosProvider = ({ children }) => {



    const [todos, setTodos] = useState(() => {
        return (JSON.parse(localStorage.getItem('todos')) || [])
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {children}
        </TodosContext.Provider>
    )
}

export { TodosProvider, TodosContext } 