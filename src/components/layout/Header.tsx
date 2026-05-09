import { Bell } from 'lucide-react'

export function Header() {
  return (
    <header className="h-16 bg-surface border-b border-border-whisper flex items-center justify-between px-8">
      <div>
        <h2 className="text-lg font-semibold text-charcoal">Hola, Administrador</h2>
        <p className="text-sm text-muted">{new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      <button className="relative p-2 text-muted hover:text-charcoal hover:bg-charcoal/5 rounded-lg transition-colors">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-terracotta rounded-full" />
      </button>
    </header>
  )
}
