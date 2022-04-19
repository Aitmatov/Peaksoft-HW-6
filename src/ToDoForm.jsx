import React, {useState} from 'react';

const ToDoForm = ({addTask})=> {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSumbit(e);
        }
    };

    return(
        <form onSumbit={handleSumbit}>
        <input 
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите значение..."
        />
        <button>Сохранить</button>
        </form>
    );
};


export default ToDoForm;



