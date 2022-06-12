function luhnRule(input) {
  let numArr = input.replace(/[^0-9]/g,"").split("").reverse();
  let uncheckedNumArr = [];
  let checkedNumArr = [];
  for (i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
      checkedNumArr.push(parseInt(numArr[i]));
    } else {
      uncheckedNumArr.push(parseInt(numArr[i])); 
    }
  }
  let doubledCheckedNumArr = checkedNumArr.map(function(checkedNum){
    if (checkedNum * 2 > 9) {
      return checkedNum * 2 - 9;
    } else {
      return checkedNum * 2;
    }
  });
  const sumDigit = uncheckedNumArr.reduce((a,b) => a+b, 0) + doubledCheckedNumArr.reduce((a,b) => a+b, 0);
  if (sumDigit % 10 === 0) {
    return true
  } else {
    return false
  }
}

function cardType(input) {
  let numArr = input.replace(/[^0-9]/g,"").split("");
  if (numArr.length === 15 || numArr.length === 16) {
    if (numArr[0] === 4) {
      return "Visa"
    }
  } else {
    return false
  }
}
