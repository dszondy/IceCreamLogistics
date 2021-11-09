import {MixingBatchCreateItemDto, MixingBatchCreateMemberDto, OrderPartDto} from 'src/app/core/api/api';


export function fullMixingBatchCreateMemberFromOrderPart(orderPart: OrderPartDto): MixingBatchCreateMemberDto {
  return new MixingBatchCreateMemberDto({
    orderId: orderPart.order.id,
    items: orderPart.incompleteItems.map(item => new MixingBatchCreateItemDto({
      recipeId: item.recipe.id,
      amount: item.amount
    }))
  });
}

export function emptyMixingBatchCreateMemberFromOrderPart(orderPart: OrderPartDto): MixingBatchCreateMemberDto {
  return new MixingBatchCreateMemberDto({
    orderId: orderPart.order.id,
    items: []
  });
}

export class MixingBatchOrder {
  orderPart: OrderPartDto;
  member: MixingBatchCreateMemberDto;
  date: string;
  incompleteItemsCount: number;
  memberItemsCount: number;
  items: MixingBathOrderItem[];
  clientName: string;


  constructor(order: OrderPartDto, member: MixingBatchCreateMemberDto) {
    this.orderPart = order;
    this.member = member;
    this.clientName = order.order.client.name;
    this.incompleteItemsCount = order.incompleteItems.filter((item) => item.amount > 0).length;
    this.memberItemsCount = member?.items.filter((item) => item.amount > 0).length || 0;
    this.date = order.order.requestedDate.toLocaleDateString('hu-hu');
    this.items = order.incompleteItems.map((item) => (
      {
        recipeId: item.recipe.id,
        recipeName: item.recipe.name,
        incompleteAmount: item.amount,
        memberAmount: member?.items.find(x => x.recipeId === item.recipe.id)?.amount || 0,
      } as MixingBathOrderItem));
  }
}

export interface MixingBathOrderItem {
  recipeId: number;
  recipeName: string;
  incompleteAmount: number;
  memberAmount: number;

}

export interface MixingBatchRecipe {
  recipeName: string;
  recipeId: number;
  totalAmount: number;
  completedAmount: number;
  totalClients: number;
  items: {
    item: MixingBathOrderItem,
    order: MixingBatchOrder
  }[];
}

