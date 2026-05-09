import { cn } from '@/lib/utils'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function PageLayout({ children, className, title }: PageLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-canvas-sand', className)}>
      {title && (
        <header className="px-6 py-4 bg-pure-surface border-b border-whisper-border">
          <h1 className="text-xl font-semibold text-charcoal-ink">{title}</h1>
        </header>
      )}
      <main className="p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
