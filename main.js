/*A result variable has been declared for you, as well as a*/
/*function named half. Call the half function with the */
/*number 100 and store the result in the result variable.*/

function toCount(num) {
  let newNum = 0;
  if (num > 0) {
    console.log(num);
    newNum = num - 1;
    toCount(newNum);
  }
}

toCount(9);
