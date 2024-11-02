import axios from "axios"

const APIClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})

export default APIClient