import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

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


  // Delete todo (fixed bug: you forgot count after splice)
  const deleteTodo = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);

Swal.fire("Are You Deleted This Task?");

  };

    const openEditModal = (index) => {
    setEditIndex(index);
    setEditText(todoList[index].text);
    setIsModalOpen(true);
  };

  const saveEdit = () => {
    const newList = [...todoList];
    newList[editIndex].text = editText;
    setTodoList(newList);
    setIsModalOpen(false);
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
              <span>
                {todo.text}
              </span>
              <div className="flex gap-2 mt-2 sm:mt-0">

                <button onClick={() => completeTodo(index)} className={`px-3 py-1 rounded text-white 
 ${todo.completed ? 'bg-green-500' : 'bg-blue-500'}`}>{todo.completed ? 'Completed' : 'Running'}</button>
    
                  <button
                  onClick={() => openEditModal(index)}
                  className="bg-yellow-400 px-3 py-1 rounded text-white"
                >
                  Edit
                </button>

                <button onClick={() => deleteTodo(index)} className="bg-red-500 px-3 py-1 rounded text-white">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

 {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="font-bold text-lg mb-4 text-center">Edit Todo</h2>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

        
      </div>
    </div>
  );
};

export default TodoApp;
