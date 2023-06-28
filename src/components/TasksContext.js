import React, { createContext, useState } from 'react';

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };