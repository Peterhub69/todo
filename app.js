import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Planer - Lista rzeczy do zrobienia</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Dodaj nowe zadanie"
      />
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTask(index)} style={{ cursor: 'pointer' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
