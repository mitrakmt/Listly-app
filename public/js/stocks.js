
var getStocks = function (stockTicker) {

  return new Promise(function(resolve, reject) {

    var stockUrl = 'http://dev.markitondemand.com/MODApis/Api/Quote/json?symbol=' + stockTicker;

      $.getJSON(stockUrl, function (stock) {
        console.log(stock)
        if (stock) {
          $(".stocks").append("<p>" + stock.Data.Name + ": " + stock.Data.LastPrice + "</p>")
          resolve("Found stock correctly");
        } else {
          reject(Error("Failed to grab stock quite information"));
        }
      }, "jsonp");
  });
};
