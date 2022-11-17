class MyString {
  static reverse(str) {
    this.str = str.split("").reverse().join("");
    return this.str;
  }
  static upFirst(str) {
    this.str =
      str[0].toUpperCase() +
      str
        .split("")
        .splice(1, str.length - 1)
        .join("");
    return this.str;
  }
  static ucWords(str) {
    this.str = str.split(" ").map((el) => {
      return (
        el[0].toUpperCase() +
        el
          .split("")
          .splice(1, el.length - 1)
          .join("")
      );
    });
    return this.str.join(" ");
  }
}
