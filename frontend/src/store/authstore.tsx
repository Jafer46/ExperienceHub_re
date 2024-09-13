import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type UserStore = {
  user: any | null
  token: string
  login: (userData: any, token: string) => void
  logout: () => void
}

const useAuth = create<UserStore>()(
  persist(
    set => ({
      user: null,
      token: '',
      login: (userData, token) => set({ user: userData, token: token }),
      logout: () => set({ user: null, token: '' })
    }),
    { name: 'auth', storage: createJSONStorage(() => sessionStorage) }
  )
)

export default useAuth
