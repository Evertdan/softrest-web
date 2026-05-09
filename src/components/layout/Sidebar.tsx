import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, ShoppingCart, UtensilsCrossed, ChefHat,
  CreditCard, Package, Users, Receipt, Truck, Award, BarChart3, Settings,
  LogOut, User
} from 'lucide-react'

const navItems = [
  { path: '/', label: 'Inicio', icon: LayoutDashboard },
  { path: '/orders', label: 'Ordenes', icon: ShoppingCart },
  { path: '/products', label: 'Productos', icon: UtensilsCrossed },
  { path: '/kitchen', label: 'Cocina', icon: ChefHat },
  { path: '/cash-register', label: 'Caja', icon: CreditCard },
  { path: '/inventory', label: 'Inventario', icon: Package },
  { path: '/clients', label: 'Clientes', icon: Users },
  { path: '/cfdi', label: 'CFDI', icon: Receipt },
  { path: '/delivery', label: 'Delivery', icon: Truck },
  { path: '/loyalty', label: 'Lealtad', icon: Award },
  { path: '/reports', label: 'Reportes', icon: BarChart3 },
  { path: '/settings', label: 'Configuracion', icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-surface border-r border-border-whisper flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-terracotta">SoftRest</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-terracotta/10 text-terracotta'
                    : 'text-muted hover:text-charcoal hover:bg-charcoal/5'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
      
      <div className="p-4 border-t border-border-whisper">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center">
            <User className="w-4 h-4 text-terracotta" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-charcoal truncate">Admin</p>
            <p className="text-xs text-muted">admin@softrest.mx</p>
          </div>
          <button className="text-muted hover:text-rose">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
