import { FiArrowLeft } from "react-icons/fi";
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getTask, createTask, updateTask, deleteTask } from "../api/tasks"

function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const params = useParams()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!params.id) {
        const res = await createTask({ title, description })
        console.log(res);
      } else {
        const res = await updateTask(params.id, { title, description })
        console.log(res);
      }
      navigate("/")
    } catch (error) {
      console.log(e);
    }

    e.target.reset();
  }

  useEffect(() => {
    if (params.id) {
      getTask(params.id)
        .then(res => {
          setTitle(res.data.title)
          setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <div className="lg:w-[calc(30vw)] w-96">
        <form className="bg-zinc-950 p-10 rounded-xl " onSubmit={handleSubmit} >
          <h2 className="text-xl font-medium mb-4"> {params.id ? "Update Task" : "Crate Task"}  </h2>
          <input
            type="text"
            placeholder="Title"
            className="block py-2 px-3 mb-4 w-full text-black"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            value={title} />

          <textarea
            placeholder="Description"
            rows={4}
            className="block py-2 px-3 mb-4 w-full text-black"
            onChange={(e) => setDescription(e.target.value)}
            value={description} />

          <button className="px-4 py-2 bg-emerald-700 font-medium rounded-xl hover:bg-emerald-600">
            {params.id ? "Update" : "Save"}
          </button>
        </form>
        {params.id && (
          <div className="flex justify-between">
            <button
              onClick={() => navigate("/")}
              className="bg-sky-600 hover:bg-sky-400 px-4 py-1 rounded-xl text-white mt-5 text-xl font-semibold"> <FiArrowLeft /> </button>
            <button
              className="bg-red-600 hover:bg-red-500 text-white font-medium px-5 py-2 rounded-xl mt-5"
              onClick={async () => {
                try {
                  const res = await deleteTask(params.id)
                  console.log(res);
                  navigate("/")
                } catch (error) {
                  console.log(error);
                }
              }}>
              Delete
            </button>
          </div>)}
      </div>
    </div>
  )
}

export default TaskForm