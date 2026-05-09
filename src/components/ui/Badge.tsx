import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        pending: 'bg-gray-100 text-gray-700',
        progress: 'bg-orange-100 text-orange-700',
        ready: 'bg-blue-100 text-blue-700',
        delivered: 'bg-emerald-100 text-emerald-700',
        cancelled: 'bg-rose-100 text-rose-700',
        available: 'bg-emerald-100 text-emerald-700',
        outofstock: 'bg-rose-100 text-rose-700'
      }
    },
    defaultVariants: {
      variant: 'pending'
    }
  }
)

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
