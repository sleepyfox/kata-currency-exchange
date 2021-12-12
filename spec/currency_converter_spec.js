const { convert,
        USDConversionRate } = require('../src/currency-converter')

describe('A currency converter API', () => {
  describe('A currency converter function', () => {
    it('should convert 1 USD to 1 USD', () => {
      expect(convert(1, 'USD', 'USD')).toBe(1)
    })

    it('should convert 2 USD to 2 USD', () => {
      expect(convert(2, 'USD', 'USD')).toBe(2)
    })

    it('should convert 1 USD to 0.87815 EUR', () => {
     expect(convert(1, 'USD', 'EUR')).toBe(0.87815)
    })

    it('should error if non-USD base currency', () => {
      expect(() => convert(1, 'EUR', 'USD')).toThrow()
    })
  })

  describe('A USD conversion rate lookup', () => {
    it('should convert USD to USD at 1.0', () => {
      expect(USDConversionRate('USD')).toBe(1.0)
    })

    it('should convert USD to EUR at 0.87815', () => {
      expect(USDConversionRate('EUR')).toBe(0.87815)
    })

    it('should convert USD to GBP at 0.78569', () => {
      expect(USDConversionRate('GBP')).toBe(0.78569)
    })
  })
})
