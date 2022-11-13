let ggg = (num) => {
  nums = String(num).split('')
  nums = nums.reduce((acum, el) => {return acum+(el**num.length)},0)
  return num == nums ? true : false
}

console.log(ggg([7]))
console.log(ggg([371]))
console.log(ggg([1652]))