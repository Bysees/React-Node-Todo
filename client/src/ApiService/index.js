import axios from 'axios'

const instance = axios.create({
  baseURL: `/api/todo`,
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
