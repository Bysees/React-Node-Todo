import axios from 'axios'

const isDevelopment = process.env.NODE_ENV === 'development'
const url = isDevelopment ? 'http://localhost:5000' : ''

const instance = axios.create({
  baseURL: `${url}/api/todo`,
})

export class ApiService {
  static async getTasks() {
    return await instance.get('')
  }
  static async createTask(value) {
    return await instance.post('', { task: value })
  }
  static async deleteTask(id) {
    return await instance.delete(`/${id}`)
  }
}
