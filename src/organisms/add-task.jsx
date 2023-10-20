import React from "react";

import '../styles/styles.css';

function AddTask({onAddClick}) {
  const [addTaskIpt, setAddTaskIpt] = React.useState("");

  const handleInputChange = (e) => {
    setAddTaskIpt(e.target.value);
  }

  const handleOnAddClick = () => {
    onAddClick(addTaskIpt);
    setAddTaskIpt("");
  };
  
  return (
    <div className="add-task">
      <div>
        <input type="text" name="add-task-ipt" id="add-task-ipt" value={addTaskIpt} onChange={handleInputChange} />
        </div>
      <div>
        <button className="task-btn" onClick={handleOnAddClick}>
         add 
        </button>
      </div>
    </div>
    );
}

export default AddTask;
