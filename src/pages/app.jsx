import React from "react";

import Layout from "../templates/layout";
import Header from "../molecules/header";
import AddTask from "../organisms/add-task";
import TasksGroup from "../organisms/tasks-group";

function App() {
  const [tasks, setTasks] = React.useState([]);
  
  const addTask = (taskName) => {
    const isTaskNameInTask = tasks.includes( taskName.toLowerCase());

    if (!isTaskNameInTask && taskName !== '' ) {
      setTasks([...tasks, taskName.toLowerCase()]);
    }

  };


  const deleteTask = (tasktoDelete) => {
    const filteredTasksList = tasks.filter((task) => task !== tasktoDelete);
    setTasks(filteredTasksList);
  }

  return (
    <Layout>
      <Header />
      <AddTask onAddClick={addTask} />
      <TasksGroup taskList={tasks} onDeleteTask={deleteTask} />
    </Layout>
  );
}

export default App;

