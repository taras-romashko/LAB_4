interface ListItem {
	name: string,
	quantity: number
}

export class ListService {
  toBuyList: ListItem[] = [
    {
      name: "apple",
      quantity: 10,
    },
    {
      name: "milk",
      quantity: 1,
    },
    {
      name: "bread",
      quantity: 2,
    },
    {
      name: "cheese",
      quantity: 1,
    },
    {
      name: "egg",
      quantity: 10,
    },
  ];
  purchasedList: ListItem[] = []

  constructor() { }

  getToBuyList(): ListItem[] {
    return this.toBuyList;
  }
  getPurchasedList(): ListItem[] {
    return this.purchasedList
  }
  moveToPurchased(index: number): void {
    const itemToMove: ListItem = this.toBuyList.splice(index, 1)[0]
    this.purchasedList.push(itemToMove)
  }
}
