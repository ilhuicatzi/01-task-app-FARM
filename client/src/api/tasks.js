import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
const TASKS_URL = `${URL}/api/tasks/`;

export const getTasks = async () => await axios.get(TASKS_URL);

export const getTask = async (id) => await axios.get(`${TASKS_URL}${id}`);

export const createTask = async (newTask) => await axios.post(TASKS_URL, newTask);

export const updateTask = async (id, updatedTask) => await axios.put(`${TASKS_URL}${id}`, updatedTask);

export const deleteTask = async (id) => await axios.delete(`${TASKS_URL}${id}`);