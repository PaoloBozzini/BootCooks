export function formatAmountForStripe(
      amount: number,
      currency: string
    ): number {
      let numberFormat = new Intl.NumberFormat(['en-US'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
      })
      const parts = numberFormat.formatToParts(amount)
      let zeroDecimalCurrency = true
      for (let part of parts) {
        if (part.type === 'decimal') {
          zeroDecimalCurrency = false
        }
      }
      return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}

export const validateCartItems = (inventory, cart, currency) => {
      const validatedItems = []

      for(const itemId in cart) {
            const product = cart[itemId]
            const inventoryItem = inventory.find(item => item._id === itemId)
            if(!inventoryItem) throw new Error(`Product ${product.name} not found!`)

            const item = {
                  price_data: {
                    currency: currency,
                    unit_amount: formatAmountForStripe(inventoryItem.price_per_kilo, currency),
                    product_data: {
                      name: inventoryItem.name
                    }
                  },
                  quantity: product.quantity,
                }

                validatedItems.push(item)
      }

     

          
          return validatedItems
}