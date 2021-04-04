type Cart = {
      products:{} | {
            [id: string]: {
                  quantity: number;
                  imageUrl: string;
                  name: string;
                  pricePerKilo: number;
                  price: number;
            }
      }
      totalPrice: number
}

export default Cart