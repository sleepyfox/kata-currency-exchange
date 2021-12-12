// Exchange rate kata
const USDConversionRate = (currencyToConvertTo) => {
  const USDExchangeRates = {
    'USD': 1.0,
    'EUR': 0.87815,
    'GBP': 0.78569,
    'CAD': 1.31715,
    'INR': 69.3492,
    'MXN': 19.2316,
    'AUD': 1.43534,
    'CNY': 6.88191,
    'MYR': 4.13785,
    'COP': 3203.18
  }

  return(USDExchangeRates[currencyToConvertTo])
}

const toUSDConversionRate = (currencyToConvertFrom) => {
  return(1/USDConversionRate(currencyToConvertFrom))
}

const conversionRate = (fromCurrency, toCurrency) => {
    return(toUSDConversionRate(fromCurrency) * USDConversionRate(toCurrency))
}

const convert = (amount, baseCurrency, conversionCurrency) => {
  return(amount * conversionRate(baseCurrency, conversionCurrency))
}

const currencyAdd = (amount1, baseCurrency, amount2, conversionCurrency) => {
  return(amount2 + convert(amount1, baseCurrency, conversionCurrency))
}

module.exports = {
  convert:             convert,
  USDConversionRate:   USDConversionRate,
  toUSDConversionRate: toUSDConversionRate,
  conversionRate:      conversionRate,
  currencyAdd:         currencyAdd
}
