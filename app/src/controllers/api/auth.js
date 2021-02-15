function signUp({ email, password }) {
  return this.post('/auth/signup', {
    email, password
  })
}

function signIn({ email, password }) {
  return this.post('/auth/signin', {
    email, password
  })
}

export default axiosInstance => ({
  signUp: signUp.bind(axiosInstance),
  signIn: signIn.bind(axiosInstance)
})
