const currencyConversionRate = (baseCurrency, currencyToConvertTo) => {
  const exchangeRates = {
    'USD': 1.0,
    'EUR': 0.87815,
    'GBP': 0.78569
  }
  if (baseCurrency != 'USD') {
    throw new Error(`Unexpected base currency "${baseCurrency}"`)
  } else {
    return(exchangeRates[currencyToConvertTo])
  }
}

const convert = (amount, baseCurrency, conversionCurrency) => {
  return(amount * currencyConversionRate(baseCurrency, conversionCurrency))
}

describe('A currency converter API', () => {
  describe('A currency converter function', () => {
    it('should convert 1 USD  to 1 USD', () => {
      expect(convert(1, 'USD', 'USD')).toBe(1)
    })

    it('should convert 2 USD  to 2 USD', () => {
      expect(convert(2, 'USD', 'USD')).toBe(2)
    })

    it('should convert 1 USD  to 0.87815 EUR', () => {
     expect(convert(1, 'USD', 'EUR')).toBe(0.87815)
    })
  })

  describe('A conversion rate lookup', () => {
    it('should convert USD to USD at 1.0', () => {
      expect(currencyConversionRate('USD', 'USD')).toBe(1.0)
    })

    it('should convert USD to EUR at 0.87815', () => {
      expect(currencyConversionRate('USD', 'EUR')).toBe(0.87815)
    })

    it('should error if non-USD base currency', () => {
      expect(() => currencyConversionRate('EUR', 'USD')).toThrow()
    })

    it('should convert USD to GBP at 0.78569', () => {
      expect(currencyConversionRate('USD', 'GBP')).toBe(0.78569)
    })
  })
})
