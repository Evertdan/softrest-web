import { cn } from '@/lib/utils'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
}

export function Avatar({ className, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <div className={cn(
      'relative w-10 h-10 rounded-full overflow-hidden bg-terracotta/10 flex items-center justify-center',
      className
    )} {...props}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-sm font-medium text-terracotta">
          {fallback?.charAt(0).toUpperCase() || 'U'}
        </span>
      )}
    </div>
  )
}
