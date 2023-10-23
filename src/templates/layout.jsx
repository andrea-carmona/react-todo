import "../styles/styles.css";
function Layout( {children}) {
    const [headerComponent, addTaskComponent, taskGroupComponent] = children;
    return(
        <div className="container">
            <header>{headerComponent}</header>
            <div className="add-task-component">{addTaskComponent}</div>
            <div className="tasks-group">{taskGroupComponent}</div>
        </div>
    )
}
export default Layout;