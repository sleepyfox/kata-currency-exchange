# Node.js currenct conversion code kata

We assume that you have Node.js and npm installed.
To check your environment is set up and works run the following commands from the console:

* `npm install`
* `npm test`

You should see output similar to the following:

```bash
$ npm test

> code-kata-starter@1.0.0 test
> npm run lint && jasmine


> code-kata-starter@1.0.0 lint
> jshint src spec

Randomized with seed 12813
Started
...............


15 specs, 0 failures
Finished in 0.016 seconds
Randomized with seed 12813 (jasmine --random=true --seed=12813)
```
## Problem - currency converter

Given the following Exchange rates from USD

```
Currency code 	Exchange rate
EUR 	0.87815
GBP 	0.78569
CAD 	1.31715
INR 	69.3492
MXN 	19.2316
AUD 	1.43534
CNY 	6.88191
MYR 	4.13785
COP 	3203.18
```

* Implement an End Point which can return the exchange rate from Euro to Dollars
* Extend your solution to convert US dollars to British Pounds
* Extend your solution to convert Euro to British Pounds
* Extend your solution to add 13.12 Euro to 99 British Pounds and return 185.64 CAD

# Implementation

The repo includes a function (src/currency-converter:convert) that takes an amout, a base currency and a currency to convert to and returns an amount in the destination currency according to the supplied rate sheet.

Additional functionality for next steps:

1) An HTTP endpoint e.g. /api/v1/exchange-rate/USD/to/GBP that enables exchange rate lookups, using e.g. [express.js](http://expressjs.com/) or similar, with [SuperAgent](https://www.npmjs.com/package/superagent) as test harness.

versionNumber = 5b8d0fd276b6d288905ed2f63a934e057e8feca2
