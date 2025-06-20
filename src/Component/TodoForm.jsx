import React, { useState } from 'react';

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Add todo
  const addTodo = (e) => {
    e.preventDefault();
    if (inputText === '') return;

    const newTodo = { text: inputText, completed: false };
    setTodoList([...todoList, newTodo]);
    setInputText('');
  };

  // Complete todo
  const completeTodo = (index) => {
    const newList = [...todoList];
    newList[index].completed = !newList[index].completed;
    setTodoList(newList);
  };

  // Edit todo
  const editTodo = (index) => {
    setInputText(todoList[index].text);
    deleteTodo(index);
  };

  // Delete todo (fixed bug: you forgot count after splice)
  const deleteTodo = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-3">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="font-bold text-2xl mb-6 text-center text-purple-600">TODO APP</h1>

        <form onSubmit={addTodo} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Type your todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="border p-2 rounded flex-grow"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {todoList.map((todo, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-center bg-slate-100 p-3 rounded">
              <span className={`text-lg ${todo.completed ? "line-through text-green-600" : ""}`}>
                {todo.text}
              </span>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <button onClick={() => completeTodo(index)} className="bg-green-400 px-3 py-1 rounded text-white">
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => editTodo(index)} className="bg-yellow-400 px-3 py-1 rounded text-white">
                  Edit
                </button>
                <button onClick={() => deleteTodo(index)} className="bg-red-500 px-3 py-1 rounded text-white">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
