import React, {useState} from "react";

const ListForm = (props) => {
    const[state, setState] = useState({
        to_do: '',
        isChecked: false
    });

    const[toDoList, setToDoList] = useState([]);
    

    const createList = (e) => {
        e.preventDefault();
        if(state.length === 0){
            return;
        }
        setState(e.target.value)
        setToDoList([...toDoList, state])
        setState({to_do: ''})
    };

    const handleToDo = (e) => {
        setState({to_do: e.target.value})
    };

    const handleCheck = (idx) => {
        const filt = toDoList.filter((todo, x) => {
            if(idx === x){
                setToDoList([toDoList[x] = (todo.isChecked = !todo.isChecked)])
            }
            return todo
        });
        setToDoList(filt)
    }

    const handleDel = (idx) => {
        const filt = toDoList.filter((todo, x) => {
            return x !== idx
        });
        setToDoList(filt);
    };

    return(
        <div>
            <form onSubmit={ createList }>
                <div>
                    <input type="text" onChange={ handleToDo } value={state.to_do}/>
                    <button>Add</button>
                </div>
            </form>
            {
                toDoList.map((todo, x) => {
                    const line = {}
                    if(todo.isChecked){
                        line['text-decoration-line'] = 'line-through'
                    }else{
                        line["text-decoration-line"] = ''
                    }
                    return (
                        <div key={x}>
                            <span style={line}>{todo.to_do}    </span>
                            <input type="checkbox" onChange={ () => handleCheck(x) } checked={todo.isChecked}/>
                            <button onClick={ () => {
                                handleDel(x);
                                }}>Delete</button>
                        </div>
                    )
                }
            )}
        </div>
    );
};

export default ListForm;