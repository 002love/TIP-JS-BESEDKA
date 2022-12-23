class What {
  static itop(arr) {
    this.arr = arr.sort((a, b) => b - a);
    return this.arr;
  }
  static ileft(arr) {
    this.arr = arr.sort((a, b) => a - b);
    return this.arr;
  }
  static iright(arr) {
    this.arr = Math.max.apply(null, arr);
    return this.arr;
  }
  static ibottom(arr) {
    this.arr = Math.min.apply(null, arr);
    return this.arr;
  }
  static ihz(arr) {
    this.arr = arr.reduce((acum, el) => {
      return acum * el;
    }, 1);
    return this.arr;
  }
}

let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");
let text5 = document.querySelector(".text5");
console.log(text1);
let input = document.querySelector(".taxt");
let btn = document.querySelector(".btntoinp")
let arr = []
btn.addEventListener("click", () => {
  arr = input.value.split(',')
  text1.innerText = `${What.itop(arr)}`;
  text2.innerText = `${What.ileft(arr)}`;
  text3.innerText = `${What.iright(arr)}`;
  text4.innerText = `${What.ibottom(arr)}`;
  text5.innerText = `${What.ihz(arr)}`;
});
