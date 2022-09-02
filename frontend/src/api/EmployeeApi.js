import axios from 'axios'

export const getEmployees = async () => {
    const response = await axios.get('/employee')
    return response.data
}

export const getEmployeeById = async (id) => {
    const response = await axios.get(`/employee/${id}`)
    return response.data
}

export const addNewEmployee = async (emp) => {
    const response = await axios.post('/employee', emp)
    return response.data
}

export const removeEmployee = async (id) => {
    const response = await axios.delete(`/employee/${id}`)
    return response
}

export const editEmployee = async (id, emp) => {
    const response = await axios.put(`/employee/${id}`, emp)
    return response
}