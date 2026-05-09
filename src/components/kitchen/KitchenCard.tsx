import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import type { Order } from '@/types'
import { ChefHat, ArrowRight, Clock } from 'lucide-react'

interface KitchenCardProps {
  order: Order
  onAdvance: (orderId: string) => void
}

export function KitchenCard({ order, onAdvance }: KitchenCardProps) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Date.now() - new Date(order.createdAt).getTime()
      setElapsed(Math.floor(diff / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [order.createdAt])

  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60
  const isOverdue = minutes > 15

  const actionLabels: Record<string, string> = {
    pending: 'Iniciar',
    in_progress: 'Listo',
    ready: 'Entregar',
  }

  return (
    <Card className="border-l-4 border-l-terracotta">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-terracotta" />
            <span className="font-semibold text-charcoal">{order.table}</span>
          </div>
          <div className={`flex items-center gap-1 font-mono text-sm ${isOverdue ? 'text-rose' : 'text-muted'}`}>
            <Clock className="w-4 h-4" />
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="space-y-1.5 mb-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-charcoal">{item.name}</span>
              <span className="text-muted">x{item.quantity}</span>
            </div>
          ))}
        </div>

        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() => onAdvance(order.id)}
        >
          {actionLabels[order.status] || 'Avanzar'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}
