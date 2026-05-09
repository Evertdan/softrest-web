import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ className, label, error, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-charcoal-ink">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            'w-full px-3 py-2.5 bg-pure-surface border border-whisper-border rounded-lg',
            'text-sm text-charcoal-ink placeholder:text-muted-steel',
            'focus:outline-none focus:ring-2 focus:ring-terracotta-accent/20 focus:border-terracotta-accent',
            'transition-all duration-200',
            isPassword && 'pr-10',
            error && 'border-rose-error focus:border-rose-error focus:ring-rose-error/20',
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-steel hover:text-charcoal-ink transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-xs text-rose-error">{error}</p>
      )}
    </div>
  )
}
