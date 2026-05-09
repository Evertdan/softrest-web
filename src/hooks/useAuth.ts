import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: { name: string; email: string; role: string } | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    if (email === 'admin@softrest.mx' && password === 'admin123') {
      set({
        isAuthenticated: true,
        user: { name: 'Administrador', email, role: 'admin' }
      })
      return true
    }
    return false
  },
  logout: () => set({ isAuthenticated: false, user: null })
}))
