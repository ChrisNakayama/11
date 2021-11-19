function beep(numberInput) {
  var numberArray = [];
  for (i=0; i <= numberInput; i++) {
    if (i.toString().includes("3")) {
    numberArray.push("<li>Won't you be my neighbor?</li>");
    } else if (i.toString().includes("2")) {
      numberArray.push("<li>Boop!</li>");
    } else if (i.toString().includes("1")) {
      numberArray.push("<li>Beep!</li>");
    } else {
      numberArray.push("<li>" + i + "</li>");   
    }
  } 
  return numberArray;
};
