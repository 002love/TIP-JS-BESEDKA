let armstrongNumber = (num) => {
  let n = num.length;
  nums = String(num).split("");
  nums = nums.map((el) => {
    return Number(el) ** n;
  });
  nums = nums.reduce((acum, el) => {
    return acum + el;
  }, 0);
  return num == nums ? true : false;
};
