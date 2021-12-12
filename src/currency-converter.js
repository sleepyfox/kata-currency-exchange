// Exchange rate kata

const currencyConversionRate = (baseCurrency, currencyToConvertTo) => {
  const exchangeRates = {
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
  
  if (baseCurrency != 'USD') {
    throw new Error(`Unexpected base currency "${baseCurrency}"`)
  } else {
    return(exchangeRates[currencyToConvertTo])
  }
}

const convert = (amount, baseCurrency, conversionCurrency) => {
  return(amount * currencyConversionRate(baseCurrency, conversionCurrency))
}

module.exports = {
  currencyConversionRate: currencyConversionRate,
  convert: convert
}
