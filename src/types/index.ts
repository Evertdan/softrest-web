export type UserRole = 'admin' | 'waiter' | 'chef' | 'cashier' | 'kitchen';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type OrderStatus = 'pending' | 'progress' | 'ready' | 'done' | 'cancelled' | 'in_progress' | 'delivered';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string;
  productId?: string;
}

export interface Order {
  id: string;
  table: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  waiter?: string;
  notes?: string;
  timeline?: Array<{
    status: string;
    label: string;
    completed: boolean;
    timestamp?: Date;
  }>;
}

export type ProductCategory = 'Tacos' | 'Bebidas' | 'Entradas' | 'Postres' | 'Especiales' | 'tacos' | 'bebidas' | 'entradas' | 'postres';
export type ProductStatus = 'available' | 'unavailable' | 'outofstock';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image?: string;
  stock: number;
  status: ProductStatus;
}

export type TableStatus = 'available' | 'occupied' | 'reserved' | 'cleaning' | 'free';
export type TableZone = 'Terraza' | 'Salón Principal' | 'Barra' | 'Privado';

export interface Table {
  id: string;
  number: number;
  zone?: TableZone;
  capacity: number;
  status: TableStatus;
}
