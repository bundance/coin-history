This project provides a simple user interface onto the GDAX [getHistoricRates](https://docs.gdax.com/#get-historic-rates")
and [getProducts](https://docs.gdax.com/#get-products) endpoints.

With it, you can fetch the coin history for Bitcoin, Litecoin or Ethereum for any start and end date you wish. The app 
will then show the first and last ten entries returned from the GDAX API.

# Installing the app
Clone this repo into a folder on your machine. The enter:

`npm install`

# Running the app
Run the app using:

`npm run start`

Then go to a browser window (if one hasn't already opened) and browse to `http://localhost:3000`

# Running the Tests
To run the unit tests, enter:

`npm run test`

# About the App
## The app's purpose
The app has been written to help developers (and myself!) understand the GDAX `getHistoricRates()` endpoint, which can 
be a bit confusing, as it will only return a maximum of 200 candles for any one request. If there are more than 200 
candles between your start and end times, the request will be rejected. When that happens, it's not clear how to change
your request to get the API to return the data you want.
  
In order to make a successful request between two times, you must set a parameter called `granularity`, which specifies 
the time interval, in seconds, that should be used for each candle. By default, `grnaularity` is 1, meaning you will 
receive data corresponding to 1 candle per second between your start and end times.

If, however, your start and end times are more than 200 seconds apart, you must change the granularity parameter. For 
example, to get a set of 200 candles, each spaced 2 seconds apart, you'd use a granularity value of 2.  

However, calculating the granularity for an arbitrary start and end time is where things get a bit tricky.

On the [GDAX API page](https://docs.gdax.com/#get-historic-rates), there are no example requests showing you what value 
your `granularity` should be be between two points. Without this, should you receive an error, it is hard to tell 
whether you've entered an incorrectly-formatted start time, end time, or granularity value, as you get the same response 
in each case: a simple error.
 
Hence the need for this app.
 
The Coin History app calculates the `granularity` between any two dates for you automatically. Simply enter the start 
and end date, and the required granularity wil automatically appear. Hit `Fetch Data`, and the data will be retrieved, 
with the first 10 and last 10 data items displayed so you can see what the result of the API call is.
    
In addition, if you want to alter the format of the date for the returned data, simply enter a 
[MomentJS-compatible](https://momentjs.com/) date-format in the Date Format Input Box, and the date's format will change 
instantly (to try this out, enter `DD-MM-YYYY` and the date of each candle change format to a four-digit year format).
  
  
  
 
 
