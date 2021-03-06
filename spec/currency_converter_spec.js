const { convert,
        USDConversionRate,   // Looks like Class, but isn't :-/
        toUSDConversionRate,
        conversionRate,
        currencyAdd
      } = require('../src/currency-converter')

describe('A currency converter API', () => {
  describe('when converting an amount of a currency', () => {
    it('should convert 1 USD to 1 USD', () => {
      expect(convert(1, 'USD', 'USD')).toBe(1)
    })

    it('should convert 2 USD to 2 USD', () => {
      expect(convert(2, 'USD', 'USD')).toBe(2)
    })

    it('should convert 1 USD to 0.87815 EUR', () => {
     expect(convert(1, 'USD', 'EUR')).toBe(0.87815)
    })

    it('should return zero when presented with an unrecognised currency', () => {
      expect(convert(3, 'USD', 'XYZ')).toBe(0)
    })

    it('should convert 1 USD to 0.87815 EUR', () => {
     expect(convert(1, 'USD', 'EUR')).toBe(0.87815)
    })

    it('should convert 10 USD to 7.8569 GBP', () => {
      expect(convert(10, 'USD', 'GBP')).toBeCloseTo(7.8569, 5)
    })

    it('should convert 13.12 EUR to 11.7386 GBP', () => {
      expect(convert(13.12, 'EUR', 'GBP')).toBeCloseTo(11.7386, 5)
    })
  })

  describe('A from USD conversion rate lookup', () => {
    it('should show rate of USD to USD at 1.0', () => {
      expect(USDConversionRate('USD')).toBe(1.0)
    })

    it('should show rate of USD to EUR at 0.87815', () => {
      expect(USDConversionRate('EUR')).toBe(0.87815)
    })

    it('should show rate of USD to GBP at 0.78569', () => {
      expect(USDConversionRate('GBP')).toBe(0.78569)
    })
  })

  describe('A to USD conversion rate lookup', () => {
    it('should show rate of USD to USD at 1.0', () => {
      expect(toUSDConversionRate('USD')).toBe(1.0)
    })

    it('should show rate of EUR to USD at 1.13876', () => {
      expect(toUSDConversionRate('EUR')).toBeCloseTo(1.13876, 5)
    })
  })

  describe('A generic currency rate lookup', () => {
    it('should show rate of USD to USD at 1.0', () => {
      expect(conversionRate('USD', 'USD')).toBe(1.0)
    })

    it('should show rate of USD to GBP at 0.78569', () => {
      expect(conversionRate('USD', 'GBP')).toBe(0.78569)
    })

    it('should show rate of EUR to USD at 1.13876', () => {
      expect(conversionRate('EUR', 'USD')).toBeCloseTo(1.13876, 5)
    })

    // EUR->GBP = EUR->USD->GBP = 1/0.87815*0.78569
    it('should show rate of EUR to GBP at 0.89471', () => {
      expect(conversionRate('EUR', 'GBP')).toBeCloseTo(0.89471, 5)
    })
  })

  describe('A currency adder', () => {
    it('should add 13.12 EUR to 99 GBP and get 110.74 GBP', () => {
      expect(currencyAdd(13.12, 'EUR', 99, 'GBP')).toBeCloseTo(110.7386, 5)
    })

    it('should add 13.12 EUR to 99 GBP and get 185.64 CAD', () => {
      const result = currencyAdd(13.12, 'EUR', 99, 'GBP')
      expect(convert(result, 'GBP', 'CAD')).toBeCloseTo(185.64, 2)
    })
  })
})
