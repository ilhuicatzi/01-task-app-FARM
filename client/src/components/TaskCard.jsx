import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteTask } from "../api/tasks"
import { FiEdit2, FiXCircle } from "react-icons/fi";

function TaskCard({ task }) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const navigate = useNavigate()
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" bg-zinc-950 border-2 border-zinc-950 px-4 py-4 rounded-xl mb-4 hover:cursor-pointer hover:border-indigo-600 hover:border-2 relative">

      <div className="flex justify-between">
        <h2 className="text-xl font-medium mb-2 hover:text-indigo-100 "> {task.title} </h2>
        {isHover && (
          <div className="flex justify-end items-start">
            <button
              onClick={() => navigate(`/tasks/${task._id}`)}>
              <FiEdit2 className=" text-green-600 text-md hover:text-green-500" />
            </button>
            <button
              onClick={async () => {
                try {
                  const res = await deleteTask(task._id)
                  console.log(res);
                  if (res.status === 200) {
                    window.location.reload()
                  }
                } catch (error) {
                  console.log(error);
                }
              }}>
                <FiXCircle className=" text-red-600 text-md hover:text-red-500 ml-2" />
              </button>
          </div>)}
      </div>
      <hr className="mb-2" />
      <div className="text-gray-400 py-3" >
  {task.description}
</div>
    </div>
  )
}

export default TaskCard