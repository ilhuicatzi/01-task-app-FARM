import { useEffect, useState } from 'react'
import { getTasks } from '../api/tasks'
import TasksList from '../components/TasksList'


function HomePage() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
        .then(res => {setTasks(res.data)})
        .catch(err => console.log(err))
    }, [])
    return <TasksList tasks={tasks} /> 
}

export default HomePage