
var birinci_reqem = parseInt(prompt("Birinci reqemi daxil edin:"));


var ikinci_reqem = parseInt(prompt("ikinci reqemi daxil edin:"));


  var hasil = 1;
  var cem = 0;

  
  for (var i =birinci_reqem ; i <= ikinci_reqem; i++) {
    if (i % 19 === 0) {
      hasil *= i;
      cem += i;
    }
  }

  
  alert("hasil: " + hasil + "\n: " + cem);

