import TaskCard from "./TaskCard"

function TasksList({ tasks }) {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-4'>
            {tasks.map(task => (
                <TaskCard  task={task} key={task._id} />
            ))}
        </div>
    )
}

export default TasksList