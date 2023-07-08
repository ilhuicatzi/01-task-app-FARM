from fastapi import APIRouter, HTTPException
from database import get_all_tasks, create_task, get_one_task_id, update_task, delete_task, get_one_task
from models import Task, UpdateTask

task = APIRouter()

#METHOD Get para obtener todas las tareas
@task.get("/api/tasks")
async def get_tasks():
    tasks = await get_all_tasks()
    return tasks

#METHOD Post para crear una tarea
@task.post("/api/tasks", response_model=Task)
async def save_task(task: Task):
    #Verificar si la tarea ya existe
    task_exists = await get_one_task(task.title)
    if task_exists:
        raise HTTPException(409, "Task already exists")
    #Si no existe, Crear la tarea
    response = await create_task(task.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

#METHOD Get para obtener una tarea por su id
@task.get("/api/tasks/{id}", response_model=Task)
async def get_task(id: str):
    task = await get_one_task_id(id)
    if task:
        return task
    raise HTTPException(404, f"Task with id {id} not found")

#METHOD Put para actualizar una tarea por su id
@task.put("/api/tasks/{id}", response_model=Task)
async def put_task(id: str, task: UpdateTask):
    response = await update_task(id, task)
    if response:
        return response
    raise HTTPException(404, f"Task with id {id} not found")   


#METHOD Delete para eliminar una tarea por su id
@task.delete("/api/tasks/{id}")
async def remove_task(id: str):
    response = await delete_task(id)
    if response:
        return "Task deleted successfully"
    raise HTTPException(404, f"Task with id {id} not found")
    