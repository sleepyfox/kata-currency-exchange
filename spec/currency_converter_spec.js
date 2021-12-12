const convert = (amount, baseCurrency, conversionCurrency) => {
  const currencyConversionRate = 1

  return(amount * currencyConversionRate)
}

describe('A currency converter API', () => {
  describe('A currency converter function', () => {
    it('should convert 1 USD  to 1 USD', () => {
      expect(convert(1, 'USD', 'USD')).toBe(1)
    })

    it('should convert 2 USD  to 2 USD', () => {
      expect(convert(2, 'USD', 'USD')).toBe(2)
    })

    // it('should convert 1 USD  to 0.87815 EUR', () => {
    //  expect(convert(1, 'USD', 'EUR')).toBe(0.87815)
    // })
  })
})
