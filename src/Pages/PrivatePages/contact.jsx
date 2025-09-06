import React, {useEffect, useState} from 'react';

const Contact = () => {
    const [number, setNumber] = useState(0);
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    function handlePlus() {
       if (number < 5) {
           setNumber(number + 1)
       }else {
           setNumber(number + 10)
       }
    }
    function handleMinus() {
       if (number !== 0) {
           setNumber(number - 1)
       }
    }
    function handleAddTodo() {
        setError('')
      if (text !== '') {
          setTodos([...todos, text])
          setText('')
      }else {
          setError("Input is required")
      }
    }
    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div>
            <div className="m-8">
                <button onClick={handleMinus}>
                    -
                </button>
                <span className="m-8">
                {number}
            </span>

                <button onClick={handlePlus }>
                    +
                </button>
            </div>

            <div className="flex flex-col gap-3 w-[200px]">
                <input type="text"
                       onChange={(e)=>{ setText(e.target.value)}}
                       value={text} />
                <span>{error}</span>
                <button onClick={handleAddTodo}>Add</button>
                <ul>
                    {todos.map((t, index)=>{
                        return (
                            <li key={index}>
                                {t}
                            </li>
                        )
                        }
                    )}
                </ul>
            </div>
    </div>

    );
};

export default Contact;