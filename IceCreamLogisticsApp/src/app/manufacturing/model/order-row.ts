export interface OrderRow {
  orderId: number;
  clientId: number;
  clientName: string;
  orderDate: string;
  orderItems: OrderItem[];
  selected: boolean;
}

export interface OrderItem {
  orderId: number;
  recipeId: number;
  recipeName: string;
  amount: number;
}
