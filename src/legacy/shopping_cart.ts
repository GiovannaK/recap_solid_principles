type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class Legacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Mensagem Enviada', message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho Limpo');
    this._items.length = 0;
  }
}

const shoppingCart = new Legacy();
shoppingCart.addItem({ name: 'Caneca', price: 20.9 });
shoppingCart.addItem({ name: 'Camisa', price: 40.89 });
shoppingCart.addItem({ name: 'Casaco', price: 200 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
