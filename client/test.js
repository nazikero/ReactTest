ReactDOM.render(<h1>こんにちわ</h1>, document.getElementById("root"));
var wait = function(sec) {
    return function() {
      return new Promise(function(resolve/*, reject*/) {
        setTimeout(resolve, sec*1000)
      });
    }
  };

  window.setTimeout(() => 
    ReactDOM.render(<h1>やっぱいまのとりけし</h1>, document.getElementById("root"))
    , 5000)
