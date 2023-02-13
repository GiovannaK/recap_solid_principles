import { Discount } from './classes/Discount';
import { CartItem } from './interfaces/cartItem';
import { OrderStatus } from './interfaces/orderStatus';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open'; //

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  //
  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  //
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
  //
  sendMessage(message: string): void {
    console.log('Mensagem Enviada', message);
  }
  //
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho Limpo');
    this._items.length = 0;
  }
}
