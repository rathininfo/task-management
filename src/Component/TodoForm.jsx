import React, { useState } from 'react';

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);


//   add todo list 
  const addTodo = (e) => {
    e.preventDefault();
    if (inputText === '') return;

    // create new to do list
    const newTodo = { text: inputText, completed: false };
    setTodoList([...todoList, newTodo]);
    setInputText('');
  };

  //Updated to do list

 const editTodo = (index) => {
    setInputText(todoList[index].text);
    deleteTodo(index);
  };


//   Deleted to list
  const deleteTodo = (index) => {
    const newList = [...todoList];
    newList.splice(index);
    setTodoList(newList);
  };

  

  
  return (
    <div className="flex justify-center p-5">
      <div className="bg-slate-200 p-5 rounded">
        <h1 className="font-bold text-xl mb-4 text-center">TODO APP</h1>

        <form onSubmit={addTodo} className="flex gap-2">
          <input
            type="text"
            placeholder="Type your todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 rounded">
            Add
          </button>
        </form>

        <div className="mt-4">
          {todoList.map((todo, index) => (
            <div key={index} className="flex justify-between bg-white p-2 rounded mt-2">
              <span className={todo.completed ? "line-through text-green-600" : ""}>{todo.text}</span>


{/* update to do */}

            <button onClick={() => editTodo(index)} className="bg-green-500 text-white px-2 rounded">
                  Update
                </button>


              {/* delted button */}
          <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white px-2 rounded">
                  Delete
                </button>

                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
