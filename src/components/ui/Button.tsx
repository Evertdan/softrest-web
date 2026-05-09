import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 active:translate-y-[1px]',
  {
    variants: {
      variant: {
        primary: 'bg-terracotta text-white hover:bg-terracotta/90',
        secondary: 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10',
        ghost: 'text-muted hover:text-charcoal hover:bg-charcoal/5',
        danger: 'bg-rose text-white hover:bg-rose/90'
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
}
