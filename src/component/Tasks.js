import Task from "./TaskInput"

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (

                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />

            ))}
        </>
    )

}
export default Tasks