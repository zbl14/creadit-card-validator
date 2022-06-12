function luhnRule(input){
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
  // let doubleCheckedNumArr = checkedNumArr.map(function(checkedNum){
  //   if (checkedNum * 2 > 9) {
  //     return checkedNum * 2 - 9;
  //   } else {
  //     return checkedNum * 2;
  //   }
  // });
  // const sumAll = uncheckedNumArr.reduce((a,b) => a+b, 0) + doubleCheckedNumArr.reduce((a,b) => a+b, 0);
  // console.log(sumAll)
  console.log(checkedNumArr, uncheckedNumArr)
}