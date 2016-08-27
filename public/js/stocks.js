
var getStocks = function (stockTicker) {

  return new Promise(function(resolve, reject) {

    var stockUrl = 'http://dev.markitondemand.com/MODApis/Api/Quote/json?symbol=' + stockTicker;

      $.getJSON(stockUrl, function (stock) {
        if (stock) {
          $(".stocks").append("<p>" + stock.Data.Name + ": " + stock.Data.LastPrice + "</p>")
          resolve(stock);
        } else {
          reject(Error("Failed to grab stock quite information"));
        }
      }, "jsonp");
  });
};
