import React, { useState } from 'react';
import './todolist_css.css';

const TodolistJs = () => {
  const [inputValue, setInputValue] = useState('');
  
  const addTask = (e) => {
    e.preventDefault();

    let taskText = inputValue;

    if (taskText !== '') {
      let li = document.createElement('li');
      li.className = 'task';
      li.innerHTML = taskText + '<button class="delete-btn">X</button>';
      document.querySelector('.todolist').appendChild(li);
      setInputValue('');
      li.addEventListener('click', () => {
        if (li.style.textDecoration === "line-through") {
          li.style.textDecoration = "none";
        } else {
          li.style.textDecoration = "line-through";
        }
      });

      li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
      });
    }
  };

  const clearAllTasks = () => {
    document.querySelector('.todolist').innerHTML = '';
  };

  return (
    <div className="container">
      <div className="container_todolist">
        <div>
          <h2>To Do List</h2>
          <form className="form" onSubmit={addTask}>
            <input
              className="todoinput"
              placeholder="여기에 입력하세요"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="todobtn" type="submit">
              +
            </button>
            <ul className="todolist"></ul>
          </form>
          <button className="xbtn" onClick={clearAllTasks}>
            전체삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodolistJs;
