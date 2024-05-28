import axios from 'axios'

export let loginUser = async (data) => {
    // console.log("data: ", data)
    const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data)
    return res.data
}

export let signUpUser = async (data) => {
    // console.log("data: ", data)
    const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data)
    return res.data
}