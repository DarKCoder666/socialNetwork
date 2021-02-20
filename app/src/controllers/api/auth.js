import axiosInstance from './axiosInstance'

function signUp({ email, password }) {
  return axiosInstance.post('/auth/signup', {
    email, password
  })
}

function signIn({ email, password }) {
  return axiosInstance.post('/auth/signin', {
    email, password
  })
}

const authApi = {
  signUp,
  signIn
}

export default authApi
