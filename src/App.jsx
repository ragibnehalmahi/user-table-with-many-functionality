import React, { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingIndex, setEditingIndex] = useState(null);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? { ...task, text: input } : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, { text: input, completed: false }]);
      }
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const clearCompletedTasks = () => {
    const activeTasks = tasks.filter((task) => !task.completed);
    setTasks(activeTasks);
  };

  const editTask = (index) => {
    setInput(tasks[index].text);
    setEditingIndex(index);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-2 border rounded-md"
          />
          <button
            onClick={addTask}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {editingIndex !== null ? "Update" : "Add"}
          </button>
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => handleFilterChange("all")}
            className={`p-2 rounded-md ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("active")}
            className={`p-2 rounded-md ${
              filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => handleFilterChange("completed")}
            className={`p-2 rounded-md ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            Completed
          </button>
        </div>
        <ul className="space-y-2">
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border rounded-md ${
                task.completed ? "bg-green-100 line-through" : "bg-gray-50"
              }`}
            >
              <span
                onClick={() => toggleTaskCompletion(index)}
                className="cursor-pointer flex-grow"
              >
                {task.text}
              </span>
              <button
                onClick={() => editTask(index)}
                className="p-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="p-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={clearCompletedTasks}
          className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 w-full"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default App;
