import React, { useState } from 'react';
import './App.css';

function getDayName() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay(); 
  return daysOfWeek[today];
}

function App() {
  const [toDos, setToDos] = useState([]);
  const [todo, setToDo] = useState('');
  const [showWarning, setShowWarning] = useState(false); 
  const handleCheckboxChange = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const handleDeleteClick = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleAddClick = () => {
    if (todo.trim() === '') {
      setShowWarning(true);
    } else {
      setToDos([
        ...toDos,
        { id: Date.now(), text: todo, status: false },
      ]);
      setToDo('');
      setShowWarning(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {getDayName()} 🌝 ☕</h2>
        </div>
        <div className="input">
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setToDo(e.target.value);
              setShowWarning(false); 
            }}
            placeholder="🖊️ Add item..."
          />
          <i onClick={handleAddClick} className="fas fa-plus"></i>
        </div>
        {showWarning && <p className="warning">Enter an item.</p>}
        <div className="todos">
          {toDos.map((obj) => (
            <div className={`todo ${obj.status ? 'completed' : ''}`} key={obj.id}>
              <div className="left">
                <input
                  onChange={() => handleCheckboxChange(obj.id)}
                  checked={obj.status}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => handleDeleteClick(obj.id)}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
