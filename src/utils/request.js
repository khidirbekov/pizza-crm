import axios from "axios"

const baseURL = process.env.VUE_APP_TARGET
const service = axios.create({
  baseURL: baseURL
})

export default service