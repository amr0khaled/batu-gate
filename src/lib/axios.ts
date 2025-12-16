import ax, { AxiosError } from 'axios'

const api = ax.create({
  url: import.meta.env.VITE_API_URL,
  timeout: 40_000,
  headers: {
    "Content-Type": "application/json"
  }
})

api.interceptors.request.use(
  conf => {
    const token = localStorage.token

    if (token) {
      conf.headers.Authorization = `Bearer ${token}`
    }
    return conf
  },
  e => Promise.reject(e)
)

api.interceptors.response.use(
  res => res,
  (e: AxiosError) => {
    if (e.response?.status === 401) {
      localStorage.removeItem("token")
      location.pathname = '/login'
    }
    return Promise.reject(e)
  }
)

export default api
